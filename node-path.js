//path module of node js
const path = require("node:path"); //'node:' is optional here but is a good practice 

console.log(path.basename(__filename));
console.log(path.extname(__filename));
console.log(path.join('folder', 'index.js'));
console.log(path.resolve('folder', 'index.js'));
console.log(path.resolve('/folder', 'index.js'));