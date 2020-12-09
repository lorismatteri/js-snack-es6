//Scrivi una funzione che accetti tre argomenti: un array e due numeri (“a” più piccolo di “b” e “b” grande al massimo quanto il numero di elementi dell’array). La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra “a” e “b”
const lettere = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'l'];

console.log(lettere);

const lettereComprese = [];

const intervallo = (arr1, arr2, num1, num2) => {
  if(num1 < num2 && num2 <= arr1.length) {
    for(let i = num1; i <= num2; i++) {
      arr2.push(arr1[i]);
    }
  } 
}

intervallo(lettere, lettereComprese, 2, 4);

console.log(lettereComprese);