const readlineSync = require("readline-sync");

// EX - 1.6  ----------------------------------------------------------------------------------------------------


let numb = readlineSync.question('Can you the give me the first integer number please ?');
let numb2 = readlineSync.question('Can you the give me the second integer number please ?');

console.log( numb % numb2);

