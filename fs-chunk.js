const fs = require('node:fs');

const readStream = fs.createReadStream(
    './static/chunk.txt',
    {
        encoding: 'utf-8'
    }
);

const writeStream = fs.createWriteStream('./static/chunk2.txt');

readStream.on('error', err => {
    console.log(err.message);
});

readStream.on('data', (chunk) => {
    //console.log(chunk);
    writeStream.write(chunk);
});

writeStream.on('close', () => {
    console.log('Write operation completed.');
});