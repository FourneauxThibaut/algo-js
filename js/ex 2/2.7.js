const readlineSync = require("readline-sync");

let nbrArr = [];
let total = 0;
let questionsNbr = readlineSync.question('Can you give me a number please? ');

while ( questionsNbr > 0 ){
    let userNbr = readlineSync.question('Can you give me another number please? ');
    nbrArr.push( userNbr )
    questionsNbr -= 1;
}

nbrArr.forEach(function(item){
    total += parseInt(item);
});
console.log('the total of your number are', total);