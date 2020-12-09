//Scrivi una funzione che fonda due array (con lo stesso numero di elementi) prendendo alternativamente gli elementi da uno e dall’altro es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].
const lettere = ['a', 'b', 'c', 'd'];

const numeri = [1, 2, 3, 4];

console.log(lettere, numeri);

const lettereNumeri = [];

const fusione = () => {
  for (let i = 0; lettereNumeri.length < (lettere.length + numeri.length); i++) {
    lettereNumeri.push(lettere[i], numeri[i]);
  }
}

fusione();

console.log(lettereNumeri);