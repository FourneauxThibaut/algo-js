const readlineSync = require("readline-sync");


// EX - 1.3  ----------------------------------------------------------------------------------------------------


let userName = readlineSync.question('Can you give me your firstname please?');
console.log("Hello " + userName);
