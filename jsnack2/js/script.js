// L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga.

// utente inserisce due parole 
    // se la parola è un numero richiederla
let word1 = prompt("Inserisci la prima parola");

while (!isNaN(word1)) {
    word1 = prompt("Inserisci una parola corretta");
}

let word2 = prompt("Inserisci la seconda parola");

while (!isNaN(word2)) {
    word1 = prompt("Inserisci una parola corretta");
}


// se la lunghezza di word1 > word2 allora stampa word1 e poi word2 => if (), word1.lenght. Se il word1 < word2 stampa word2 e poi word1. Altrimenti dire che sono uguali

if(word1.length > word2.length) {
    console.log("La parola più lunga è:", word1, "La parola più corta è:", word2);
} else if (word1.length < word2.length) {
    console.log("La parola più lunga è:", word2, "La parola più corta è:", word1);
} else {
    console.log("Le due parole hanno la stessa lunghezza");
}

