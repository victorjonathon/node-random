const http = require("node:http");
const fs = require("node:fs");

const server = http.createServer((req, res) => {
    //const resFile = fs.readFileSync('./static/file.html', 'utf-8');
    //res.end(resFile);
    fs.createReadStream(__dirname + '/static/file.html', 'utf-8').pipe(res);
    
});

server.listen(3000, () => {
    console.log('Server listening on port 3000');
});