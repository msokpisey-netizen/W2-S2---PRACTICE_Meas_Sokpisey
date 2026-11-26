function challenge2(array){
    let reverse = [];
    for(let i= array.length - 1; i>=0; i--){
        reverse.push(array[i]);
    }
    return reverse;
}

console.log(challenge2([14, 15, 16, 20]));
console.log(challenge2([5, 4, 3, 2, 1]));
console.log(challenge2([]));
