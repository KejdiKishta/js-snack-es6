// Snack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

//* array di oggetti
const biciDaCorsa = [
    { 
        nome: "Fulmine Velociraptor",
        peso: 7.2 
    },
    { 
        nome: "Turbo Tornado",
        peso: 6.8 
    },
    { 
        nome: "Supersonica Sparviero",
        peso: 6.5 
    },
    { 
        nome: "Furia Frenetica",
        peso: 7.0 
    },
    { 
        nome: "Razzo Rampante",
        peso: 6.9 
    }
];

//* stampa di controllo
console.log(biciDaCorsa);

//* variabile con un risultato di default
let biciLeggera = biciDaCorsa[0];

//* ciclo foreach che per ogni elemento confronta il peso
biciDaCorsa.forEach((element, index) => {
    //* se il peso è minore salvo l'elemento nella variabile
    if (element.peso < biciLeggera.peso) {
        biciLeggera = biciDaCorsa[index];
    }
});

//* destrutturazione
const { nome, peso } = biciLeggera;

//* creo elemento e stampo nel DOM
const result = document.createElement("h1");
result.innerHTML = `La bici più leggera è ${nome} che pesa ${peso} kg`

document.body.append(result);