function challenge3(array){
    let aver = 0;
    for(let i= 0; i< array.length; i++){
        aver += array[i];
    }
    return aver/array.length;
}

console.log(challenge3([85, 90, 78, 92]));
console.log(challenge3([10, 20, 30]));
console.log(challenge3([]));
