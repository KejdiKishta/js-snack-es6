// Scrivere una funzione che accetti tre argomenti, un array e  due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
// Usiamo i nuovi metodi degli array foreach o filter.

const a = 4, b = 7;
const rndNum = [17, 5, 23, 11, 29, 3, 8, 14, 26, 20];

function numBeetween (array, a, b) {
    const filterRes = array.filter((num, index) => index > a && index < b);

    return filterRes;
}

const resultFiltered = numBeetween(rndNum, a, b);

console.log(resultFiltered);
