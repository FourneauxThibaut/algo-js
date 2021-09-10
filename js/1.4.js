const readlineSync = require("readline-sync");


// EX - 1.4  ----------------------------------------------------------------------------------------------------

let name = readlineSync.question('Can you give me your name please?');
let firstName = readlineSync.question('Can you give me your firstname please?');
let city = readlineSync.question('Where do you live ?');

console.log("Your name is", firstName, name, "and you live in", city,".");
