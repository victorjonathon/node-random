let mainArray = [4, 10 , 5];
let array = [4, 10 , 5];

array.push(20);
array.unshift(9);
array.pop();
array.shift();

//array.splice(2, 0, 20, 30);
//array.splice(2, 1);

let array1 = array.map((element)=>element+1); 

console.log(mainArray, array, array1);