const readlineSync = require("readline-sync");

// EX - 1.7  ----------------------------------------------------------------------------------------------------


let shoeSize = readlineSync.question('Can you the give me your shoe size please ?');
let birthYear = readlineSync.question('Can you the give me your birth year please ?');

let shoeSizeDouble = shoeSize * 2;

shoeSizeDouble += 5;
shoeSizeDouble *= 50;

shoeSizeDouble -= birthYear;
shoeSizeDouble += 1766;

console.log(shoeSizeDouble);