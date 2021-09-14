const readlineSync = require("readline-sync");
let userFavoriteNbr = 1;

while ( userFavoriteNbr != 42){ 
    let userFavoriteNbr = readlineSync.question('Can you give me your favorite number please? ');
    if( userFavoriteNbr!= 42 ){
        console.log('Are you sure ? ');
    }else{
        break;
    }
}
