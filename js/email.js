console.log('JS OK');

// Creo un array con delle mail
const emails = ['mariorossi@gmail.com', 'paolobranbilla23@gmail.com', 'paolalombardi@gmail.com', 'martasiciliano@gmail.com', 'ramirobarese@gmail.com', 'sandropagnotto1960@gmail.com'];

// Recupero gl elementi dal DOM
const userEmailInput = document.getElementById('user-email');
const submitButton = document.getElementById('btn-submit');
const userGreeting = document.getElementById('welcome')


// Creo un messaggio di benvenuto 
const grettingMessage = 'Benvenuto, la tua email è'

// Mi metto in ascolto del click del bottone
  submitButton.addEventListener('click', function() {
  
  // recupero il valore dell'input
  const userEmail = userEmailInput.value.trim();

  // Controllo se l'input è una mail valida
  if (userEmail.length < 1 || !userEmail.match('@')){
  alert('Dati inseriti non validi')
  } else {

    let isValid = false

    // Controllo tutte le email salvate
    for (i = 0; i < emails.length; i++) {

      if (userEmail === emails [i]) isValid = true
    }
       
  
    
    // Se trovo una email uguale Stampo il messaggio di benvenuto in pagina altrimenti creo un alert
    if (!isValid) {
      alert("Email inserita non esistente, per favore scegliere un'altra email")
    } else {
      userGreeting.innerText = grettingMessage + ' ' + userEmail;
    }  
  }

  })
  
  
