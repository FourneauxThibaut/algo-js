function rand10(){
    randomNbr = Math.floor(Math.random() * 11);
    return randomNbr;
}

function multiRand(n, arr){
    for (let i = 0; i < n; i++) {
        let tempNbr = rand10();
        arr.push(tempNbr);
    }
    return arr;
}

function generateList(nList, nElem){
    var arr = [];

    for (var i = 0; i < nList; ++i) {
        arr[i] = [];

        multiRand(nElem, arr[i])
    }
    return arr;
}

function translateNbrToAlphabet(arr){
    arr.forEach(list => {
        list.forEach(item => {
            var ordA = 'a'.charCodeAt(0);
            var ordZ = 'z'.charCodeAt(0);
            var len = ordZ - ordA + 1;
            
            var s = "";
            while(list[item] >= 0) {
                s = String.fromCharCode(n % len + ordA) + s;
                n = Math.floor(n / len) - 1;
            }
            return s;
        });
    });
}

function sortMe(arr){
    arr.forEach(list => {
        var done = false;
        while (!done) {
          done = true;
          for (var i = 1; i < list.length; i += 1) {
            if (list[i - 1] > list[i]) {
              done = false;
              var tmp = list[i - 1];
              list[i - 1] = list[i];
              list[i] = tmp;
            }
          }
        }
        return list;
    });
}

test = generateList(2, 3);
console.log( sortMe(test) );
