// Snack 2
// Crea un array di oggetti che rappresentano delle persone.
// Ogni persona ha un nome, un cognome e un’età.
// Crea quindi un nuovo array inserendo, per ogni persona,
// una frase con il nome e cognome e l’indicazione se può guidare, in base all’età

const persone = [
    { nome: "Mario", cognome: "Rossi", eta: 30 },
    { nome: "Anna", cognome: "Verdi", eta: 10 },
    { nome: "Luca", cognome: "Bianchi", eta: 35 },
    { nome: "Giovanni", cognome: "Ferrari", eta: 40 },
    { nome: "Francesca", cognome: "Russo", eta: 28 },
    { nome: "Marco", cognome: "Esposito", eta: 17 },
    { nome: "Alessia", cognome: "Romano", eta: 27 },
    { nome: "Davide", cognome: "Gallo", eta: 45 },
    { nome: "Valentina", cognome: "Marino", eta: 15 },
    { nome: "Roberta", cognome: "Costa", eta: 38 }
];

//* apppoggio
const persone2 = [];

//* foreach che controlla l'età
persone.forEach(element => {
    if (element.eta >= 18) {
        persone2.push(`${element.nome} ${element.cognome} ha ${element.eta} quindi può guidare`)
    } else {
        persone2.push(`${element.nome} ${element.cognome} ha ${element.eta} quindi NON può guidare`)
    }
});

console.log(persone2);