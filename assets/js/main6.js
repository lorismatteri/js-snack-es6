//Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi, Gatsby vuole generare una falsa lista di invitati.

const nomi = ['pippo', 'pluto', 'zlatan', 'pinco', 'aristotele'];

const cognomi = ['paperino', 'topolino', 'pallino', 'ibrahimovic' , 'gino'];

console.log(nomi, cognomi);

const lista = [];

for (let i = 0; i < nomi.length; i++) {
  let x = Math.floor(Math.random() * nomi.length);
  let y = Math.floor(Math.random() * cognomi.length);
  lista[i] = nomi[x] + ` ` + cognomi[y];
}

console.log(lista);
