const buf1 = Buffer.alloc(10);
console.log(buf1);

const buf2 = Buffer.from('a');
console.log(buf2);

const buf3 = Buffer.from('中');
console.log(buf3);

// 合并
const buf4 = Buffer.concat([buf2, buf3]);
console.log(buf4, buf4.toString());