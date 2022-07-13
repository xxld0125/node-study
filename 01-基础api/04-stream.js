// 二进制友好, 复制图片
const fs = require('fs');

const rs = fs.createReadStream('./image.jpeg');

const ws = fs.createWriteStream('./image2.jpeg')

rs.pipe(ws);