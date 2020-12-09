//Stampa il cubo dei primi N numeri, dove N è un numero indicato dall’utente.

const userNumber = Number(prompt(`Insert a number`));

for (let i = 1; i <= userNumber; i++) {
  console.log(Math.pow(i, 3));
}

