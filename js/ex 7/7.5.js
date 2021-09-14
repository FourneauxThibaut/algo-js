function rand10(){
    randomNbr = Math.floor(Math.random() * 11);
    return randomNbr;
}

function multiRand(n, arr){
    for (let i = 0; i < n; i++) {
        let tempNbr = rand10();
        arr.push(tempNbr);
    }
    return arr;
}



function generateList(nList, nElem){
    var rec = [];

    for (var i = 0; i < nList; ++i) {
        rec[i] = [];

        multiRand(nElem, rec[i])
    }
    return rec;
}

generateList(2, 5);
console.log( rec );