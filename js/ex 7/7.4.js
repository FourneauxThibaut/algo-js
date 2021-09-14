const readlineSync = require("readline-sync");

console.log('Hello! Welcome to the Pizza Flavors Manager\.\n');
console.log('Please choose your actions:\n');
console.log('1 - List all the pizza flavors\n2 - Add a new pizza flavor\n3 - Remove a pizza flavor\n4 - Exit this program');

let userReq = 0;
let thePizzaList = [];

while ( userReq !== 4 ){

    let userReq = readlineSync.question('Enter your action\'s number: ');  

    switch(userReq){
        case '1':
            console.log(thePizzaList);
            break;

        case '2':
            let newPizza = readlineSync.question('Enter the new pizza\s name: ');  
            thePizzaList.push(newPizza);
            break;
        
        case '3':
            if (thePizzaList.length > 0){
                let delPizza = readlineSync.question('Enter the pizza\'s name you want to destroy: ');
                for (let i = 0; i < thePizzaList.length; i++) {
                    if ( thePizzaList[i] == delPizza )
                    {
                        thePizzaList.splice(i, 1);
                    }
                }
                break;
            }else{
                console.log('there isn\'t any pizza to remove in the list');
                break;
            }

        case '4':
            console.log('Goodby');
            break;
            userReq == 4;
    }       
}
