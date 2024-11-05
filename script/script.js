"use strict";
console.clear();




/*
Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/
PalindromoGioco();
/*
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/
PariDispari();







//function 
//Palindromo
function PalindromoGioco() {
    //Chiedo all'utente una parola
    const parolaUtente = prompt("Scrivi una parola per verificare se è palindroma!");
    let parolaGirata = "";//Inizializzo vuota una stringa

    if (isNaN(parolaUtente)) {//verifico se l'utente abbia inserito una parola
        parolaGirata = InvertiParola(parolaUtente, parolaGirata);//inverto la parola
        if (parolaGirata == parolaUtente) {//confronto se le parola sono palindrome
            console.log("Hai inserito una parola palindroma!");
        } else {
            console.log("Non hai inserito una parola palindroma ;/")
        }
    } else {
        console.log("non hai inserito una parola");
    }
}
//pari dispari
function PariDispari(){
    
}
//Utiliti
function InvertiParola(parolaInserita, parolaInvertita) {
    for (let i = parolaInserita.length - 1; i >= 0; i--) {
        parolaInvertita += parolaInserita[i];
        console.log(parolaInvertita + "=>" + parolaInserita[i]);
    }
    return parolaInvertita;
}