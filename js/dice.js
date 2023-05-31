console.log('JS OK')

// Recupero gli elementi dal DOM
const numberButton = document.getElementById('btn-number');
const battleResultPlaceholder = document.getElementById('battle-result');
const userNumberPlaceholder = document.getElementById('user-number');
const cpuNumberPlaceholder = document.getElementById('cpu-number');


// Creo i messaggio per la vittorie e per il pareggio
const cpuWinnerText = 'Mi dispiace, hai perso';
const userWinnnerText = 'Complimenti, hai vinto';
const tieText = 'Pareggio';

// Creo il messaggio per i due numeri
const userNumberText = 'Il tuo numero è';
const cpuNumberText = 'Il numero della CPU è';


// Genero due numeri casuali al click del bottone
numberButton.addEventListener('click', function(){

  // Potevo anche non usare l'array ma volevo provare se lo avevo capito e giocarci un po'
  const numbers = [];

  for (i = 0; i < 2; i++) {
    const generateNumber = Math.floor(Math.random() * 6) + 1;
    numbers.push(generateNumber);
  }
  
  // Confronto i due numeri e decreto il vincitore 
  let battleResult = tieText;

  if(numbers[0] > numbers[1]){
    battleResult = cpuWinnerText
  } else if (numbers[0] < numbers[1]){
    battleResult = userWinnnerText
  }

  // Stampo i numeri e il messaggio del vincitore
  cpuNumberPlaceholder.innerText = cpuNumberText + ' ' + numbers[0]
  userNumberPlaceholder.innerText = userNumberText + ' ' + numbers[1]
  battleResultPlaceholder.innerText = battleResult;
})


