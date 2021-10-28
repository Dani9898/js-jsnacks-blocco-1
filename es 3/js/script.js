
//  Il software deve chiedere per 10 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti.

// chiedere 10 volte all'utente un numero e salvare ogni numero in un array.

// creo array
const myArray = [];


// chiedere => prompt
// 10 volte => ciclo che finisce quando myArray.length < 10,
//  un numero => parseInt(prompt"") 
// controllare se non è un numero =>  while (isNaN(numero)) numero = parseInt(prompt("Inserisci un numero corretto: ")),
// aggiungere il numero all'array => .push
// fare la somma di tutti i numeri dell'array => for( let i = 0...) che aggiunge ad una variabile esterna il valore contenuto nella posizione i dell'array.
// stampare la somma => log variabile esterna

while (myArray.length < 10) {
    let num = parseInt(prompt("Inserisci un numero: "));
    while (isNaN(num)) {
        num = parseInt(prompt("Inserisci un numero corretto: "));
   }
   myArray.push(num);
}

let somma = 0;

for (let i = 0; i < myArray.length; i++) {
    somma += myArray[i];
}
console.log(somma);







    