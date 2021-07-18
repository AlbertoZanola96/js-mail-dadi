var email = ["antonio@gmail.com", "tommy@gmail.com" , "anna@libero.it", "stefano@gmail.com"];
var emailInserita = prompt("inserisci la tua email");

for (var i = 0; i < email.length; i++) {
    if (emailInserita == email[i]) {
        console.log("accesso consentito");
    }
    else if (emailInserita != email[i]) {
        console.log("accesso negato");
    }
}






