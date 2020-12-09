//Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
//Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
//Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti

const seriea = [
  squadra1 = {
    nome: 'CROTONE',
    punti: 0,
    falli: 0
  },
  squadra2 = {
    nome: 'SASSUOLO',
    punti: 0,
    falli: 0
  },
  squadra3 = {
    nome: 'ATALANTA',
    punti: 0,
    falli: 0
  },
  squadra4 = {
    nome: 'BENEVENTO',
    punti: 0,
    falli: 0
  },
  squadra5 = {
    nome: 'MILAN',
    punti: 0,
    falli: 0
  },
  squadra6 = {
    nome: 'INTER',
    punti: 0,
    falli: 0
  },
  squadra7 = {
    nome: 'JUVENTUS',
    punti: 0,
    falli: 0
  },
  squadra8 = {
    nome: 'ROMA',
    punti: 0,
    falli: 0
  },
  squadra9 = {
    nome: 'NAPOLI',
    punti: 0,
    falli: 0
  },
  squadra10 = {
    nome: 'BOLOGNA',
    punti: 0,
    falli: 0
  },
  squadra11 = {
    nome: 'LAZIO',
    punti: 0,
    falli: 0
  },
  squadra12 = {
    nome: 'TORINO',
    punti: 0,
    falli: 0
  },
  squadra13 = {
    nome: 'VERONA',
    punti: 0,
    falli: 0
  },
  squadra14 = {
    nome: 'UDINESE',
    punti: 0,
    falli: 0
  },
  squadra15 = {
    nome: 'GENOA',
    punti: 0,
    falli: 0
  },
  squadra16 = {
    nome: 'SAMPDORIA',
    punti: 0,
    falli: 0
  },
  squadra17 = {
    nome: 'SPEZIA',
    punti: 0,
    falli: 0
  },
  squadra18 = {
    nome: 'PARMA',
    punti: 0,
    falli: 0
  },
  squadra19 = {
    nome: 'FIORENTINA',
    punti: 0,
    falli: 0
  },
  squadra20 = {
    nome: 'CAGLIARI',
    punti: 0,
    falli: 0
  }
];

const puntiEfalli = () => {
  for (const key in seriea) {
    seriea[key].punti = Math.floor(Math.random() * 100);
    seriea[key].falli = Math.floor(Math.random() * 100);
  }
}

console.log(seriea, puntiEfalli());
