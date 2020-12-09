//Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo
let userNumber = parseInt(prompt("Insert a number"));

const printPari = (number) => {
  if (number % 2 == 0) {
    return number;
  } else {
    return number + 1;
  }
  
}

let numeroStampato = printPari(userNumber);

console.log(numeroStampato);