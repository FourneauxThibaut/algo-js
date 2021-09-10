const readlineSync = require("readline-sync");


// EX - 1.5  ----------------------------------------------------------------------------------------------------


let numb = readlineSync.question('Can you give me the first decimal number please ?');
let numb2 = readlineSync.question('Can you give me the second decimal number please ?');

console.log( parseInt(numb) * numb2 );