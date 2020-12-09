//Crea due array che hanno un numero di elementi diversi. Aggiungi elementi casuali all’array che ha meno elementi, fino a quando ne avrà tanti quanti l’altro.

var listaMag = [1, 'pluto', true, 'gino', 'ibra', 7, 'quaquaraqua', 14];

var listaMin = [2, 'pippo', false, 'aristotele']

console.log(listaMag, listaMin);

for (let i = listaMin.length; i !== listaMag.length; i++) {
  let x = Math.floor(Math.random() * listaMag.length);
  listaMin.push(listaMag[x]);
}

console.log(listaMin);