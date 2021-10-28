
// chiedere all'utente di inserire due numeri, stampare il maggiore


// chiedere all'utente il primo numero, se non è un numero richiederglielo
let num1 = parseInt(prompt("Inserisci il primo numero: "));

while (isNaN(num1)) {
     num1 = parseInt(prompt("Inserisci un numero corretto: "));
}
 

// chiedere all'utente il secondo numero, se non è un numero richiederglielo
let num2 = parseInt(prompt("Inserisci il secondo numero: "));

while (isNaN(num2)) {
    num2 = parseInt(prompt("Inserisci un numero corretto: "));
}

// Confrontare i numeri e stampare quello maggiore. confronto => if
if (num1 > num2) {
    console.log(`Il maggiore è il numero ${num1}`);
} else if (num2 > num1){
    console.log(`Il maggiore è il numero ${num2}`);
}  else {
    console.log("I due numeri sono uguali");
}

