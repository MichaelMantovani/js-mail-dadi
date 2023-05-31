console.log('JS OK');

// Creo un array con delle mail
const emails = ['mariorossi@gmail.com', 'paolobranbilla23@gmail.com', 'paolalombardi@gmail.com', 'martasiciliano@gmail.com', 'ramirobarese@gmail.com', 'sandropagnotto1960@gmail.com'];

// Recupero gl elementi dal DOM
const userEmailInput = document.getElementById('user-email');
const submitButton = document.getElementById('btn-submit');
const userGreeting = document.getElementById('welcome')


// Creo un messaggio di benvenuto 
const grettingMessage = 'Benvenuto, la tua mail è'

// Mi metto in ascolto del click del bottone
  submitButton.addEventListener('click', function() {
  
  // recupero il valore dell'input
  const userEmail = userEmailInput.value.trim();

  // Controllo se l'input è una mail valida
  if (userEmail.length < 1 || !userEmail.match('@')){
  alert('Dati inseriti non validi')
  } else {

    // Controllo tutte le email salvate
    for (i = 0; i < emails.length; i++) {

      // Se trovo una email uguale creo un alert
      if (userEmail === emails [i]) alert("Email inserita già esistente, per favore scegliere un'altra email");
    }

    // Stampo il messaggio di benvenuto in pagina
    userGreeting.innerText = grettingMessage + ' ' + userEmail;
  }
  
  
})