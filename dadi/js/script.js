// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.





//numero random giocatore generato con math.random (genera un numero casuale tra 0 e n, n escluso)
const numberPlayer = Math.floor(Math.random() * 6) + 1;
console.log(numberPlayer);
 //numero random computer
const numberComputer = Math.floor(Math.random() * 6) + 1;
console.log( numberComputer, 'ehufh');

//confrontare i valori dei risultati, il n > vince
if (numberPlayer > numberComputer) {
    console.log('Player WINS!');
} else {
    console.log('Computer WINS!');
}

