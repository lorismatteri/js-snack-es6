//Scrivi una funzione che accetti una stringa come argomento e la ritorni girata (es. Ciao -> oaiC)

let parola = 'loris';

console.log(parola);

const contrario = () => parola.split('').reverse().join('');

console.log(contrario(parola));
