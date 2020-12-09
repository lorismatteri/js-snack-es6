//Scrivi una funzione per stabilire se un numero è primo.
//Chiedi un numero all’utente e utilizza la funzione per comunicargli se il numero inserito è primo oppure no.

const numeroPrimo = () => {
  if (numero < 2) {
    console.log(`il numero inserito non è valido`);
  }
  if (numero == 2) {
    console.log(`2 è un numero primo, o forse no, dipende`);
  }
  for (let i = 2; i < numero; i++) {
    if (numero % i == 0) {
      console.log(numero + " non è primo");
      break;
    }
    if (numero % i != 0) {
      console.log(numero + " è primo!");
    }
  }
  
}

var numero = Number(prompt("inserisci un numero intero MAGGIORE di 1"));

numeroPrimo();