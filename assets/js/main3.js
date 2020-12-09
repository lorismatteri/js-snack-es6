//Creare un oggetto che rappresenti un triangolo rettangolo, con le seguenti proprietà: base e altezza.
//Calcolare perimetro e area.(ripassiamo il Teorema di Pitagora ;D )

const triangolo = {
  base: 10,
  altezza: 20
}

const calcoloArea = () => (triangolo.base * triangolo.altezza) / 2;

console.log(`l'area è di ` + calcoloArea() + ` cm quadrati`);

const calcoloIpotenusa = () => Number(Math.sqrt((Math.pow(triangolo.base, 2)) + (Math.pow(triangolo.altezza, 2))).toFixed(2));

console.log(`l'ipotenusa è di ` + calcoloIpotenusa() + ` cm`);

const calcoloPerimetro = () => calcoloIpotenusa() + triangolo.base + triangolo.altezza;

console.log(`il perimetro misura ` + calcoloPerimetro() + ` cm`);