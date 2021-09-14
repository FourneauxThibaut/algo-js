let arr1 = [1, 2, 3, 4, 5];
let arr2 = [100, 101, 102];


let total = 0;

arr1.forEach(function(item){
    total += parseInt(item);
});

console.log('the total of your number are', total);
total = 0;

arr2.forEach(function(item){
    total += parseInt(item);
});

console.log('the total of your number are', total);

console.log(arr1);