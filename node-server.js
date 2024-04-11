const http = require("node:http");

const server = http.createServer((req, res) => {
    let resp = {
        'firstName': 'Super',
        'lastName' : 'Hero'
    } 
    res.end(JSON.stringify(resp));
});

server.listen(3000, () => {
    console.log('Server listening on port 3000');
});