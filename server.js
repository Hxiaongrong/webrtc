/**
 * Created by houxiangrong on 2020/04/18.
 */
const Koa = require('koa')
const path = require('path');
const koaSend = require('koa-send');
const serve = require('koa-static');//koa 静态资源插件
const io = require('socket.io')()
const fs = require('fs');
const os = require('os');
const https = require('https');//node内置https server
const sslify = require('koa-sslify').default;//http强制HTTPS

const logger = require('koa-logger');
const home = serve(path.resolve(__dirname, './public'));

const users = {}; // 保存用户
const sockS = {}; // 保存客户端对应的socket
// 获取本地ip
function getIPAdress() {
	let re = ''
	Object.values(os.networkInterfaces()).forEach(inner => {
		inner.forEach(item => {
			if (item.family === 'IPv4' && item.address !== '127.0.0.1' && !item.internal)
				re = item.address
		})
	})
	return re
}

const port = 9527

const app = new Koa();
app.use(logger())
app.use(sslify())
app.use(home)
app.use(async (ctx, next) => {
    if (!/\./.test(ctx.request.url)) {
        await koaSend(
            ctx,
            'index.html',
            {
                root: path.join(__dirname, './'),
                maxage: 1000 * 60 * 60 * 24 * 7,
                gzip: true,
            } // eslint-disable-line
        );
    } else {
        await next();
    }
});

io.on('connection', sock => {
	sock.on('join', data=>{
        sock.join(data.roomid, () => {
            if (!users[data.roomid]) {
                users[data.roomid] = [];
            }
            let obj = {
                account: data.account,
                id: sock.id
            };
            let arr = users[data.roomid].filter(v => v.account === data.account);
            if (!arr.length) {
                users[data.roomid].push(obj);
            }
            sockS[data.account] = sock;
            io.in(data.roomid).emit('joined', users[data.roomid], data.account, sock.id); // 发给房间内所有人
            // sock.to(data.roomid).emit('joined',data.account);
        });
    });
    sock.on('offer', data=>{
        // console.log('offer', data);
        sock.to(data.roomid).emit('offer',data);
    });
    sock.on('answer', data=>{
        // console.log('answer', data);
        sock.to(data.roomid).emit('answer',data);
    });
    sock.on('__ice_candidate', data=>{
        // console.log('__ice_candidate', data);
        sock.to(data.roomid).emit('__ice_candidate',data);
    });

    // 1 v 1
    sock.on('apply', data=>{ // 转发申请
        sockS[data.account].emit('apply', data);
    });
    sock.on('reply', data=>{ // 转发回复
        sockS[data.account].emit('reply', data);
    });
    sock.on('1v1answer', data=>{ // 转发 answer
        sockS[data.account].emit('1v1answer', data);
    });
    sock.on('1v1ICE', data=>{ // 转发 ICE
        sockS[data.account].emit('1v1ICE', data);
    });
    sock.on('1v1offer', data=>{ // 转发 Offer
        sockS[data.account].emit('1v1offer', data);
    });
    sock.on('1v1hangup', data=>{ // 转发 hangup
        sockS[data.account].emit('1v1hangup', data);
    });
})

io.on('disconnect', (sock) => {
    for (let k in users) {
        users[k] = users[k].filter(v => v.id !== sock.id);
    }
    console.log(`disconnect id => ${users}`);
});

var options = {
    key: fs.readFileSync('./private_key.pem'),  //私钥文件路径
    cert: fs.readFileSync('./ca-cert.pem')  //证书文件路径
};
var server = https.createServer(options, app.callback()).listen(port, () => {
    console.log(`server running success at https://${getIPAdress()}:${port}`)
});

io.listen(server)