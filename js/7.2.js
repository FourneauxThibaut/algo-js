const readlineSync = require("readline-sync");
     

function fibonacci(userNbr) {
    if (userNbr <= 1)
        return userNbr;
    return fibonacci(userNbr-1) + fibonacci(userNbr-2);
}

let userNbr = readlineSync.question('What number do you want as fibonacci input? ');   
console.log( fibonacci(userNbr) );