const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    // console.log('getPrototypeChain', getPrototypeChain(res));
    // res.end('hello node');

    const { url, method, headers } = req;
    if (url === '/' && method === 'GET') {
        // 主页
        fs.readFile('./index.html', (err, data) => {
            if (err) {
                res.writeHead(500, {
                    'Content-Type': 'text/plain;charset=utf-8',
                })
                res.end('500 服务器挂了');
            }
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html; charset=utf-8');
            res.end(data);
        })
    } else if (url === '/users' && method === 'GET') {
        res.writeHead(200, {
            'Content-Type': 'application/json'
        });
        res.end(JSON.stringify({
            name: 'tom'
        }))

    } else if (method === 'GET' && headers.accept.indexOf('image/*') !== -1) {
        // 读文件 => 缓冲区写入,全部存入内存,会占用空间,大量数据时不建议使用
        // fs.readFile

        // 这时候需要使用流,只占用少量内存空间
        fs.createReadStream('.' + url).pipe(res);

    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain;charset=utf-8');
        res.end('404 页面没找到');
    }
})

server.listen(3000);

function getPrototypeChain(obj) {
    const protoChain = [];
    while (obj = Object.getPrototypeOf(obj)) {
        protoChain.push(obj);
    }
    return protoChain;
}