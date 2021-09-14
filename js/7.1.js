const readlineSync = require("readline-sync");

let hidedNbr = Math.floor(Math.random() * 100) + 1;
let userGuess = 0;

while (userGuess != hidedNbr){
    let userGuess = readlineSync.question('Guess the number ');    
    if ( userGuess > hidedNbr )
    {
        console.log(' Too high ');
        maxGuess-=1
    }
    else if ( userGuess < hidedNbr )
    {
        console.log(' Too low ');
        maxGuess-=1
    }
    else
    {
        console.log(' Well guessed! ');
        break;
    }
}

