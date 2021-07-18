/*
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/

var giocatore = Math.floor(Math.random() * 6) + 1;
console.log("numero estratto per il giocatore: " + giocatore);

var pc =  Math.floor(Math.random() * 6) + 1;
console.log("numero estratto per il pc: " + pc);

if (giocatore > pc) {
    console.log("Giocatore vince!");
}

else if (giocatore < pc) {
    console.log("Pc vince!");
}

else {
    console.log("Pareggio");
}