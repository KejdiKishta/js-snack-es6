// Crea un array composto da 4 automobili.
// Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione
// Dividi le automobili in 3 array separati: nel primo array
// solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto

const automobili = [
    { marca: "Toyota", modello: "Yaris", alimentazione: "ibrida" },
    { marca: "Volkswagen", modello: "Golf", alimentazione: "benzina" },
    { marca: "BMW", modello: "i3", alimentazione: "elettrico" },
    { marca: "Fiat", modello: "Panda", alimentazione: "metano" },
    { marca: "Renault", modello: "Clio", alimentazione: "diesel" },
    { marca: "Tesla", modello: "Model S", alimentazione: "elettrico" },
    { marca: "Ford", modello: "Focus", alimentazione: "benzina" },
    { marca: "Audi", modello: "A3", alimentazione: "diesel" },
    { marca: "Mercedes-Benz", modello: "EQC", alimentazione: "elettrico" },
    { marca: "Opel", modello: "Corsa", alimentazione: "gpl" }
];

//* variabile di appoggio con array copiato
//* con ... copio l'array nella varibile nuova
//* aggiungo filter per l'alimentazione

// let autoDiesel = [...automobili.filter((elem) => elem.alimentazione === "diesel")];
// console.log(autoDiesel);

// let autoBenzina = [...automobili.filter((elem) => elem.alimentazione === "benzina")];
// console.log(autoBenzina);

// let altroAuto = [...automobili.filter((elem) => elem.alimentazione !== "diesel" && elem.alimentazione !== "benzina")];
// console.log(altroAuto);

let copiaArray = [...automobili];

let autoDiesel = autocopiaArray.filter((elem) => elem.alimentazione === "diesel")
let autoBenzina = autocopiaArray.filter((elem) => elem.alimentazione === "benzina")
let altroAuto = autocopiaArray.filter((elem) => elem.alimentazione !== "diesel" && elem.alimentazione !== "benzina")