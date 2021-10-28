// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

// creo un array con x nomi => const array
// chiedo all'utente il suo nome => prompt
// se il suo nome = ad un valore dell'array allora può partecipare alla festa, se no no => salvare se puo partecipare su una variabile booleana. for per controllare il nome con ogni valore dell'array. Se il nome corrisponde con un valore allora la variabile booleana diventa vera.
// stampare la variabile e se è vera allora partecipa se è falsa non partecipa

const listaNomi = ["marco", "sara", "franco", "jhonny", "maurizio", "michele"];
let nome = prompt("Come ti chiami?");

let partecipa = false;

for(let i = 0; i < listaNomi.length; i++) {
    if (nome === listaNomi[i]) {
        partecipa = true;
    }
    
}

if (partecipa) {
    console.log("Puoi partecipare alla festa");
} else {
    console.log("Non puoi partecipare alla festa");
}