// Mail
// Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.
// Prima di partire a scrivere codice poniamoci qualche domanda: Che ci sia un array da qualche parte? Se dobbiamo confrontare qualcosa che "cosa" ci serve?



// creo un array con una lista di email
const emailList = [   
    'jane@gmail.it',
    'jhon@gmail.it',
    'smith@gmail.it',
    'marc@gmail.it',
    'dev@gmail.it',
]


const button = document.querySelector('.btn.btn-primary');
const input = document.getElementById('email');
const output = document.getElementById('output');


// creo un evento al click dell'utente
button.addEventListener('click', function() {

    let find = false; // variabile booleana

    for ( let i = 0; i < emailList.length; i++) {
        if (input.value == emailList[i]) {
            find=true;
        } 
    }

    if (find) { 
        console.log('trovato');
        output.innerHTML = 'trovato';
    } else {
        console.log('non trovato');
        output.innerHTML = 'non trovato ';
    }
});





