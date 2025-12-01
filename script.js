
/*
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

Output partite da semplice log, e poi se volete stampate in pagina come sapete fare.

TIP:
per controllare che la vostra logica sui prezzi funzioni correttamente, provate a verificare quanto segue:

100km, 10 anni => prezzo corretto:  €16.80
100km, 70 anni => prezzo corretto: €12.60

*/
const userAge = parseInt(prompt("What's your age?"));
const km = parseInt(prompt("How many km are you going to travel?"));

const priceperkm = 0.21;

let ticketPrice = km * priceperkm;

console.log(userAge);

if (userAge < 18) {
    console.log("utente è minorenne - 20% sconto");
    ticketPrice = ticketPrice * 0.8;

} else if (userAge >= 65) {
    console.log("utente è senior - 40% sconto");
    ticketPrice = ticketPrice * 0.6;

}


console.log("Total price: € " + ticketPrice.toFixed(2));

