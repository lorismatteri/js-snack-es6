//Stampa le potenze di 2 fino a 1000.
let i = 1;
while (i >= 1) {
  let x = Math.pow(2, i);
  if (x <= 1000) {
    console.log(x);
  } else {
    console.log(`Il risultato è maggiore di 1000`);
    break;
  }
  i++;
}
