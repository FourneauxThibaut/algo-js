const readlineSync = require("readline-sync");

// EX - 1.8  ----------------------------------------------------------------------------------------------------


let questions = 4;

console.log( questions + ' remaining');
let name = readlineSync.question('Can you give me your name please?');
questions -= 1;

console.log( questions, ' remaining');
let firstName = readlineSync.question('Can you give me your firstname please?');

questions -= 1;
console.log( questions, ' remaining');
let city = readlineSync.question('Where do you live ?');

questions -= 1;
console.log( questions, ' remaining');
let study = readlineSync.question('What did you study ?');


console.log(' ');
console.log(' your name is ', name + firstName);
console.log(' and you did learn', study, 'and kunfu.. no ?');
console.log(' you\'r now living in ', city);
