//Crea 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza. Calcola quanto pesano tutte le zucchine.

const zucchine = [
  {
    varieta: 'zucchina chiara di Faenza',
    peso: 1,
    lunghezza: 15
  },
  
  {
    varieta: 'zucchina chiara di Faenza',
    peso: 2,
    lunghezza: 15
  },
  
  {
    varieta: 'zucchina chiara di Faenza',
    peso: 3,
    lunghezza: 15
  },
  
  {
    varieta: 'zucchina chiara di Faenza',
    peso: 4,
    lunghezza: 15
  },
  
  {
    varieta: 'zucchina chiara di Faenza',
    peso: 5,
    lunghezza: 15
  },

  {
    varieta: 'zucchina chiara di Faenza',
    peso: 6,
    lunghezza: 15
  },
  
  {
    varieta: 'zucchina chiara di Faenza',
    peso: 7,
    lunghezza: 15
  },
  
  {
    varieta: 'zucchina chiara di Faenza',
    peso: 8,
    lunghezza: 15
  },
  
  {
    varieta: 'zucchina chiara di Faenza',
    peso: 9,
    lunghezza: 15
  },
  
  {
    varieta: 'zucchina chiara di Faenza',
    peso: 10,
    lunghezza: 15
  },
];

console.log(zucchine);
  
let somma = 0;

for (let i = 0; i < zucchine.length; i++) {
  somma = somma + zucchine[i].peso;
}

console.log(somma);