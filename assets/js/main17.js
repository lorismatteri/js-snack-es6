//  Il software deve chiedere per 5 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti. Esegui questo programma in due versioni, con il for e con il while.

let sum = 0;

/* for (let i = 0; i < 5; i++) {
  let numeroUtente = Number(prompt(`insert a number`));
  sum = sum + numeroUtente;
} */

let i = 0;
while (i < 5) {
  let numeroUtente = Number(prompt(`insert a number`));
  sum = sum + numeroUtente;
  i++;
}

console.log(sum);

