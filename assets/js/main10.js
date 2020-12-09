//Calcola la somma e la media dei primi 10 numeri.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbers);

let somma = 0;

for (let i = 0; i < numbers.length; i++) {
  somma = somma + numbers[i];
}
console.log(`La somma è ` + somma);

let media = somma / numbers.length;
console.log(`La media è ` + media);