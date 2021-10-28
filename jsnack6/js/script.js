// Genera un array di 50 numeri random. Nell’array non devono esserci doppioni.

// genera array di 50 numeri random => for mathrandom
// controllare il numero con tutti gli elementi del vettore, se è uguale ad uno allora ricrealo finche è uguale , altrimenti metterlo
// aggiungi il numero all'array => .push(n)

const myArray = [];

// con includes

// while (myArray.length < 50) {
//     let numero = Math.floor(Math.random() * 100);
//     while (myArray.includes(numero)) {
//         numero = Math.floor(Math.random() * 100);
//     }
//     myArray.push(numero); 
// }
// console.log(myArray);

while (myArray.length < 50) {
    let doppione = false;
    let numero = Math.floor(Math.random() * 50);
    for (let i = 0; i < myArray.length; i++) {
        if (numero === myArray[i]) {
            doppione = true;
        }
    }

    if (doppione === false) {
        myArray.push(numero);
    }
    
}

console.log(myArray);
