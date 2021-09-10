function rand10(){
    
    randomNbr = Math.floor(Math.random() * 11);
    return randomNbr;
}

function multiRand(n){
    let multiRandArr = []
    
    for (let i = 0; i < n; i++) {
        let tempNbr = rand10();
        multiRandArr.push(tempNbr);
    }
    return multiRandArr;
}

let test = multiRand(5);
console.log( test );