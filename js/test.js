const readlineSync = require("readline-sync");


// EX - 1.3  ----------------------------------------------------------------------------------------------------


/* let userName = readlineSync.question('Can you give me your firstname please?');
console.log("Hello " + userName); */


// EX - 1.4  ----------------------------------------------------------------------------------------------------

/* let name = readlineSync.question('Can you give me your name please?');
let firstName = readlineSync.question('Can you give me your firstname please?');
let city = readlineSync.question('Where do you live ?');

console.log("Your name is", firstName, name, "and you live in", city,"."); */


// EX - 1.5  ----------------------------------------------------------------------------------------------------


/* let numb = readlineSync.question('Can you give me the first decimal number please ?');
let numb2 = readlineSync.question('Can you give me the second decimal number please ?');

console.log( parseInt(numb) * numb2 ); */


// EX - 1.6  ----------------------------------------------------------------------------------------------------


/* let numb = readlineSync.question('Can you the give me the first integer number please ?');
let numb2 = readlineSync.question('Can you the give me the second integer number please ?');

console.log( numb % numb2); */


// EX - 1.7  ----------------------------------------------------------------------------------------------------



/* let shoeSize = readlineSync.question('Can you the give me your shoe size please ?');
let birthYear = readlineSync.question('Can you the give me your birth year please ?');

let shoeSizeDouble = shoeSize * 2;

shoeSizeDouble += 5;
shoeSizeDouble *= 50;

shoeSizeDouble -= birthYear;
shoeSizeDouble += 1766;

console.log(shoeSizeDouble); */


// EX - 1.8  ----------------------------------------------------------------------------------------------------


/* let questions = 4;

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
console.log(' you\'r now living in ', city); */
