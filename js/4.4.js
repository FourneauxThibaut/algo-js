const readlineSync = require("readline-sync");

function rand10(){

    randomNbr = Math.floor(Math.random() * 10) + 1;
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

function average(arr){
    let total = 0;
    arr.forEach(function(item){
        total += parseInt(item);
    });
    average = total / arr.length;

    return average;
}

function min(arr){
    let min = arr[0];
    let max = arr[0];

    arr.forEach(function(item){
        if (item < min){
            min = item;
        }else if ( item > max ){
            max = item;
        }
    });
    return min;
}

function max(arr){
    let min = arr[0];
    let max = arr[0];

    arr.forEach(function(item){
        if (item < min){
            min = item;
        }else if ( item > max ){
            max = item;
        }
    });
    return max; 
}

let arrLenght = readlineSync.question('How many item do you want in the array ? ');

let test = multiRand(arrLenght);
console.log('la liste est: ', test,'le plus gros chiffre est ' + max(test), 'le plus petit chiffre est ' + min(test), 'et la moyenne est de ' + average(test));