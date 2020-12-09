//Chiedi un numero di 4 cifre all’utente e calcola la somma di tutte le cifre che compongono il numero.

const userNumber = prompt(`inserisci un numero di 4 cifre`);

let somma = 0;

for (let i = 0; i < userNumber.length; i++) {
  let n = Number(userNumber[i])
  somma = somma + n;
}

console.log(somma);