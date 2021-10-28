// Genera un array di 50 numeri random. Nell’array non devono esserci doppioni.

// genera array di 50 numeri random => for mathrandom
// se un numero generato è nella lista dell'array allora ricrearlo
// aggiungi il numero all'array => .push(n)

const myArray = [];

while (myArray.length < 50) {
    let numero = Math.floor(Math.random() * 100);
    while (myArray.includes(numero)) {
        numero = Math.floor(Math.random() * 100);
    }
    myArray.push(numero);
    
}
console.log(myArray);

