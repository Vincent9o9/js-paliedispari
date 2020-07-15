// Chiedere all'utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

var utente = prompt('inserisci una parola');
var controllo = controlloPalindroma(utente);

console.log(controllo);
console.log(utente);

if (controllo == utente) {
    console.log('parola palindroma');
} else {
    console.log('parola non palindroma');
}

function controlloPalindroma (parola) {
    var contrario = '';
    for (var i = parola.length -1; i >= 0; i--) {
        contrario += parola[i];
    }
    return contrario;
}
