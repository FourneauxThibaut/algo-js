const readlineSync = require("readline-sync");

// EX - 1.0  ----------------------------------------------------------------------------------------------------


let userName = readlineSync.question('Can you give me your name please?');
console.log("Hello " + userName); 

let numb = readlineSync.question('Can you give me the first number ?');
let numb2 = readlineSync.question('Can you give me the second number to addition?');
console.log( numb + numb2); 

let numb = readlineSync.question('Can you give me the first number ?');
let numb2 = readlineSync.question('Can you give me the second number to soustract?');
console.log( numb - numb2); 

let numb = readlineSync.question('Can you give me the first number ?');
let numb2 = readlineSync.question('Can you give me the second number to multipicate?');
console.log( numb * numb2); 

let numb = readlineSync.question('Can you give me the first number ?');
let numb2 = readlineSync.question('Can you give me the second number to divide?');
console.log( numb / numb2); 

let numb = readlineSync.question('Can you give me the first number ?');
let numb2 = readlineSync.question('Can you give me the second number to modulo?');
console.log( numb % numb2); 