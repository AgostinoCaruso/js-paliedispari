"use strict";
console.clear();

/*
Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/
/*
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/
MenuScelta();
//function-----------------------------------------------------
function MenuScelta(){
    let sceltaMenu = parseInt(prompt("Scegli:\n1) Per palindromo\n2) Per pari o dispari"));
    switch(sceltaMenu){
        case 1:
            PalindromoGioco();
            break;
        case 2:
            PariDispariGioco();
            break;
        default:
            console.log("Hai inserito un valore non corretto");
            break;
    }
}
//Palindromo
function PalindromoGioco() {
    //Chiedo all'utente una parola
    const parolaUtente = prompt("Scrivi una parola per verificare se è palindroma!").toLowerCase();
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
function PariDispariGioco() {
    let contatore = 0;
    let disparoParoScelta = prompt("Scegli tra dispari e pari").toLowerCase();//aspetto user input
    while (disparoParoScelta != "pari" && disparoParoScelta != "dispari" && contatore <= 3) {
        console.log(contatore);
        disparoParoScelta = prompt("Hai inserito una parola non valida, pari o dispari").toLowerCase();//aspetto user input
        console.log(disparoParoScelta);
        contatore++;
    }
    contatore = 0;
    let numeroScelto = parseInt(prompt("Digita un numero tra 1 a 5"));//aspetto user input
    while ((numeroScelto != 0 && numeroScelto > 6) && contatore<=3) {
        console.log(contatore);
        numeroScelto = parseInt(prompt("Riprova ad inserire un numero tra 1 a 5"));//aspetto user input
        contatore++;
    }
    if(numeroScelto !=0 && numeroScelto <6){
        let numeroPc = GeneraNumero(5, 1);//genero il numero
        let somma = numeroScelto + numeroPc;
        isNumberEven(somma);//controlla se il numero è paro o disparo
        if (disparoParoScelta == "pari" && isNumberEven(somma)) {
            console.log("hai vinto, hai scelto pari (pc:" + numeroPc + ", tuo:" + numeroScelto + ")");
        } else if (disparoParoScelta == "dispari" && !isNumberEven(somma)) {
            console.log("hai vinto, hai scelto dispari (pc:" + numeroPc + ", tuo:" + numeroScelto + ")");
        } else {
            console.log("non hai vinto, hai scelto " + disparoParoScelta + " (pc:" + numeroPc + ", tuo:" + numeroScelto + ")");
        }
    }else{
        console.log("Hai inserito un numero troppo grande, ricarica la pagina");
    }
    
}
//Utiliti--------------------------------------------------------
function InvertiParola(parolaInserita, parolaInvertita) {
    for (let i = parolaInserita.length - 1; i >= 0; i--) {
        parolaInvertita += parolaInserita[i];
        console.log(parolaInvertita + "=>" + parolaInserita[i]);
    }
    return parolaInvertita;
}
function GeneraNumero(max, min) {
    return Math.floor(Math.random() * max + min)
}
function isNumberEven(num) {//lo scrivo in inglese perchè è intuitivo capire che si tratta di un booleano
    if (num % 2 == 0) return true; // se è paro ritorna true
    else return false;//se disparo ritorna false
}