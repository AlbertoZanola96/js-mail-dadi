/*
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
*/

var email = ["antonio@gmail.com", "tommy@gmail.com" , "anna@libero.it", "stefano@gmail.com"];
var emailInserita = prompt("inserisci la tua email");

var mailTrovata = false;

for (var i = 0; i < email.length; i++) {
    var mailId = email[i];

    if (mailId == emailInserita) {
        mailTrovata = true;
    }
}

if (mailTrovata == true) {
    console.log("accesso consentito");
}
else {
    console.log("accesso negato");
}







