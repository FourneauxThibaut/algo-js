const readlineSync = require("readline-sync");


let error = Error('You didn\'t follow the instructions')

let minNbr = readlineSync.question('Can you give me the min value please?');
let maxNbr = readlineSync.question('Can you give me the max value please?');

if ( minNbr > maxNbr ) {
    console.log(error);
    break;
}else{
    let currentNbr = readlineSync.question('Can you give me the current value please?');
}