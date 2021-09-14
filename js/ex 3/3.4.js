let arr =[3, 4, 5, 100, 402, 101, 102];
let min = arr[0];
let max = arr[0];

arr.forEach(function(item){
    if (item < min){
        min = item;
    }else if ( item > max ){
        max = item;
    }
});

console.log('le chiffre le plus grand est ', max, 'et le plus petit est ', min);