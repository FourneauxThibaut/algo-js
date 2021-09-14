const readlineSync = require("readline-sync");

const daysList = {
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday ',
    5: 'Friday ',
    6: 'Saturday',
    7: 'Sunday',
};


let userFavoriteNbr = readlineSync.question('Can you give me a number between 1 and 7 please? ');
if (userFavoriteNbr > 7 || userFavoriteNbr < 1 ){
    console.log('You didn\'t respect the order.');
}else{
    console.log(daysList[userFavoriteNbr]);
}
