const { createWriteStream } = require('fs');

const writeStream = createWriteStream('./test.txt');

process.stdin.pipe(writeStream);


