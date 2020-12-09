//Creare un oggetto palla che abbia le seguenti proprietà.
//Nome = palla
//Peso = 10
//Attraverso un prompt dare la possibilità all’utente di modificare il peso della palla. 

const palla = {
  nome: 'palla',
  peso: 10
}

console.log(palla);

palla.peso = Number(prompt(`Quanto pesa la palla?`));

console.log(palla, `la palla pesa ` + palla.peso);