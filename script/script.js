"use strict";
console.clear();

/*
Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/


//Chiedo all'utente una parola
const parolaUtente = prompt("Scrivi una parola per verificare se è palindroma!");
let parolaInvertita="";

if(isNaN(parolaUtente)){
    for(let i = parolaUtente.length -1; i>=0;i--){
        parolaInvertita += parolaUtente[i];
        console.log(parolaInvertita + "=>"+ parolaUtente[i]);
    }
    if(parolaInvertita == parolaUtente){
        console.log("Hai inserito una parola palindroma!");
    }else{
        console.log("Non hai inserito una parola palindroma ;/")
    }
}else{
    console.log("non hai inserito una parola");
}