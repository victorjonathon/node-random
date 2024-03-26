let obj = {
    f: "Vikas",
    l: "Uniyal"
}

//Adding iterator to the object
/*obj[Symbol.iterator] = function(){
    let objKeys = Object.keys(obj);
    let count = 0;
    let isDone = false;
    let next = () => {
        if(count >= objKeys.length){
            isDone = true;
        }

        return { done: isDone, value: this[objKeys[count++]]}
    }
    return { next };
}*/

//Adding iterator to the object with generator function
obj[Symbol.iterator] = function*(){
    let objKeys = Object.keys(obj);
    for(let t of objKeys){
        yield this[t];
    }
}

//console.log(Object.values(obj));
for(let elm of obj){
    console.log(elm);
}