function factorial(a){
    if (a == 0) return 1;
    return a * factorial(a - 1);
}
 
let num = 5;
console.log( "Factorial of " + num + " is " + factorial(num) );
