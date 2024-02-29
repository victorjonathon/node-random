/**
 * Make an array of country names. return the array consists of lenght of these countries name 
 */

//map() with arrow function
const countries = ['Canada', 'Spain', 'United States', 'Israel'];

//with normal function
/*console.log(
    countries.map(function myFun(name){
        return name.length;
    })
);*/

//with arrow function
console.log(
    countries.map((country) => country.length)
);