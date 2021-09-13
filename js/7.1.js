const readlineSync = require("readline-sync");

let hidedNbr = Math.floor(Math.random() * 100) + 1;
let userGuess = 0;

while (userGuess != hidedNbr){
    let userGuess = readlineSync.question('Guess the number ');
    if ( userGuess > hidedNbr )
    {
        console.log(' Too high ');
    }
    else{
        console.log(' Too low ');
    }
}
console.log(' Well guessed! ');
