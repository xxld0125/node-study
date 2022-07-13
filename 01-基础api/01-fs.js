const fs = require('fs');

// 同步
// const data = fs.readFileSync('./conf.js');
// console.log('data====', data);

// 异步调用
// 错误优先的回调
// fs.readFile('./conf.js', (err, data) => {
//     if (err) throw err;
//     console.log(data.toString());
// })


// promise风格
(async () => {
    const fs = require('fs');
    const { promisify } = require('util');
    const readFile = promisify(fs.readFile);
    const data = await readFile('./conf.js');
    console.log('data11', data.toString());
})()