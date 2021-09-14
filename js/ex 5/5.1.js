const readlineSync = require("readline-sync");

function createNewSerie(name, year, member) {
    const obj = {};
    obj.name = name;
    obj.year = year;
    obj.members = member;

    return obj;
}

let serieName = readlineSync.question('Can you tell me the name of the serie?');
let serieYear = readlineSync.question('Can you tell me the year of creation of that serie?');
let anotherMemb = 'yes';
while (anotherMemb != 'yes'){
    let serieMember = [];
    let serieMemb = readlineSync.question('Can you tell me who is the serie?');
    serieMember.push(serieMemb);
    let anotherMemb = readlineSync.question('Do you want to add another member to the serie?');
}

const userSerie = createNewSerie(serieName, serieYear, serieMember);

console.log(userSerie.name);
