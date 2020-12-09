//Creare un array di oggetti: ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore.

const bicis = [
  bici1 = {
    nome: 'ibra',
    peso: 7
  },
  bici2 = {
    nome: 'aristotele',
    peso: 9
  },
  bici3 = {
    nome: 'gino',
    peso: 11
  }
];

console.log(bicis);

if (bici1.peso < bici2.peso && bici1.peso < bici3.peso) {
  console.log(`la bici che pesa di meno è ` + bici1.nome);
} else if (bici2.peso < bici1.peso && bici2.peso < bici3.peso) {
  console.log(`la bici che pesa di meno è ` + bici2.nome);
} else if (bici3.peso < bici2.peso && bici3.peso < bici1.peso) {
  console.log(`la bici che pesa di meno è ` + bici3.nome);
}