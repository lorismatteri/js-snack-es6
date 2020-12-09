//Crea 10 oggetti che rappresentano una zucchina.
//Dividi in due array separati le zucchine che misurano meno o più di 15cm.
//Infine stampa separatamente quanto pesano i due gruppi di zucchine

const zucchine = [
  {
    varieta: 'zucchina chiara di Faenza',
    peso: 1,
    lunghezza: 20
  },
  
  {
    varieta: 'zucchina chiara di Faenza',
    peso: 2,
    lunghezza: 10
  },
  
  {
    varieta: 'zucchina chiara di Faenza',
    peso: 3,
    lunghezza: 20
  },
  
  {
    varieta: 'zucchina chiara di Faenza',
    peso: 4,
    lunghezza: 10
  },
  
  {
    varieta: 'zucchina chiara di Faenza',
    peso: 5,
    lunghezza: 20
  },

  {
    varieta: 'zucchina chiara di Faenza',
    peso: 6,
    lunghezza: 10
  },
  
  {
    varieta: 'zucchina chiara di Faenza',
    peso: 7,
    lunghezza: 20
  },
  
  {
    varieta: 'zucchina chiara di Faenza',
    peso: 8,
    lunghezza: 10
  },
  
  {
    varieta: 'zucchina chiara di Faenza',
    peso: 9,
    lunghezza: 20
  },
  
  {
    varieta: 'zucchina chiara di Faenza',
    peso: 10,
    lunghezza: 10
  },
];

const zucchineLunghe = [];

const zucchineCorte = [];

for (const key in zucchine) {
  if (zucchine[key].lunghezza < 15) {
    zucchineCorte.push(zucchine[key]);
  } else if (zucchine[key].lunghezza > 15) {
    zucchineLunghe.push(zucchine[key]);
  }
}

console.log(zucchine);
console.log(zucchineCorte);
console.log(zucchineLunghe);

let pesoCorte = 0;

for (let i = 0; i < zucchineCorte.length; i++) {
  pesoCorte = pesoCorte + zucchineCorte[i].peso;
}

console.log(`le zucchine corte pesano ` + pesoCorte);

let pesoLunghe = 0;

for (let i = 0; i < zucchineLunghe.length; i++) {
  pesoLunghe = pesoLunghe + zucchineLunghe[i].peso;
}

console.log(`le zucchine lunghe pesano ` + pesoLunghe);