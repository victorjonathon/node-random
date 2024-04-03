const fs = require('node:fs');


//const fileData = fs.readFileSync('./static/file-one.txt', 'utf-8');

//Reading a file
/*fs.readFile(
    './static/file-one.txt', 
    'utf-8', 
    (err, data) => {
        if(err){
            console.log(err);
        }else{
            console.log(data);
        }

    }
);*/

//Writing a file
fs.writeFile(
    './static/file-two.txt',
    'New line added in the file. ',
    { flag: "a" },
    (err) => {
        if(err){
            console.log(err);
        }else{
            console.log('Written');
        }
    }
);