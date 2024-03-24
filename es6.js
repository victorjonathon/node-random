//Destructuring array with rest operator 
let arr = ["vikas", "37", "SE"];
let [, fullname, ...restOfData] = arr; 
console.log(restOfData);


//Destructuring object with rest operator 
let obj = {
    firstName: 'Alfa',
    age: 37,
    prof: 'SE'
}

let { firstName, ...restOfProp } = obj;
console.log(restOfProp);