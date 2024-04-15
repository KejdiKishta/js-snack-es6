// Snack2
// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà:
// Punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array
// i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

const squadreDiCalcio = [
    { 
        nome: "Juventus",
        punti: 0,
        falliSubiti: 0, 
    },
    { 
        nome: "Inter",
        punti: 0,
        falliSubiti: 0, 
    },
    { 
        nome: "Milan",
        punti: 0,
        falliSubiti: 0, 
    },
    { 
        nome: "Napoli",
        punti: 0,
        falliSubiti: 0, 
    },
    { 
        nome: "Roma",
        punti: 0,
        falliSubiti: 0, 
    }
];

console.log(squadreDiCalcio);

//* foreach per assegnare a tutti il valore "casuale"
squadreDiCalcio.forEach((squadra) => {
    squadra.falliSubiti = Math.floor((Math.random() * 200) + 100);
    if (squadra.nome === "Juventus") {
        squadra.punti = Math.floor((Math.random() * 10) + 90);
    } else if (squadra.nome === "Inter") {
        squadra.punti = Math.floor((Math.random() * 10) + 10);
    } else  {
        squadra.punti = Math.floor((Math.random() * 50) + 40);
    }
});

//*                                                destrutturazione / funzione / return nel nuovo array
const squadreConFalliSubiti = squadreDiCalcio.map(({ nome, falliSubiti }) => ({ nome, falliSubiti }));

console.log(squadreConFalliSubiti);