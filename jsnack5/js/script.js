// Crea un array vuoto. Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array.

// creo array vuoto => array = []
// chiedo 6 volte all'utente un numero => for() prompt 
// se non è un numero allora richiederglielo => parseInt, while isNaN
// inserirlo nell'array se è dispari => if numero % 2 allora array.push(numero)
// mostrare l'array => log array

const myArray = [];

for (let i = 0; i < 6; i++) {
    let numero = parseInt(prompt("Inserisci un numero: "));
    while (isNaN(numero)) {
        numero = parseInt(prompt("Inserisci un numero corretto: "));
   }
   
   if (numero % 2) {
       myArray.push(numero);
   }
}

console.log(myArray);