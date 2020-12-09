//Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari

const numeri = [11, 22, 33, 44, 55, 66, 77, 88, 99];
console.log(numeri);

const sommaPosizioneDispari = () => {
  let somma = 0;
  for (let i = 0; i < numeri.length; i++) {
    if (i % 2 !== 0) {
      console.log(i, numeri[i]);
      somma = somma + numeri[i];
    }
  }
  return somma;
}

console.log(sommaPosizioneDispari());