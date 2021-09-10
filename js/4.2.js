function rand10(){
    randomNbr = Math.floor(Math.random() * 11);
    console.log( randomNbr );
}

rand10();




/* 

    random est une function de la librairie math.
    la fonction va chercher automatiquement un nombre àléatoire entre deux valeurs


    comme exemple:

    // Returns a random integer from 0 to 99:
        Math.floor(Math.random() * 100);

    // Returns a random integer from 0 to 100:
        Math.floor(Math.random() * 101);

    // Returns a random integer from 1 to 10:
        Math.floor(Math.random() * 10) + 1;

*/