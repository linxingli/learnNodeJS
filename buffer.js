buf = new Buffer(265);

len = buf.write('hahaha');

console.log('写入字节数 '+ len);

buf1 = new Buffer(26);

for (let i = 0; i < 26; i++) {
  buf1[i] = i + 97;
}

console.log(buf1.toString('ascii'));
console.log(buf1.toString('ascii',0,5));
console.log(buf1.toString('utf8',0,5));
console.log(buf1.toString(undefined,0,5)); // 使用 'utf8' 编码, 并输出: abcde
