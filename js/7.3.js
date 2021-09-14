const readlineSync = require("readline-sync");
     

let userNbr = readlineSync.question('Type an number to get all her divisor ');  


function printDivisors(nbr)
{
    let answer = [];

    for (i=1 ; i<=nbr ; i++)
    {
        if ( nbr % i == 0 ){
            answer.push(i);
        }
    }

    // delete the first number who will always be "1"
    answer.shift();
    // delete the last number who will always be "nbr"
    answer.pop();

    if ( answer.length > 0 )
    {
        return 'The number\'s divisors are', answer;
    }
    else
    {
        return 'The number is prime';
    }
}

console.log( printDivisors(userNbr) );