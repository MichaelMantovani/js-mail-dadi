# Mail e Dadi

**Mail**

- Inventiamo una lista di email a nostro piacimento
- Chiediamo all'utente una mail
- controlliamo che la mail inserita sia presente nella lista
- se è presente, gli diamo il benvenuto. (in console)
- altrimenti gli diciamo che non può accedere (in console)

<br>

**Gioco dei dadi**
<br>

- Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
- Stabilire il vincitore, in base a chi fa il punteggio più alto.
- Stampare (in console)

<br>
<br>

**SVOLGIMENTO TRACCIA MAIL**

- Creo un array con delle mail
- Creo un input con un bottone per chiedere all'utente la sua mail
- Recupero gl elementi dal DOM
- Creo un messaggio di benvenuto 
- Mi metto in ascolto del click del bottone
  **QUANDO** l'utente clicca il bottone 
  - recupero il valore dell'input
    **SE** il valore dell'input non contiene una @ ed è più corto di una lettera
    - Creo un alert 'dati inseriti non validi'
    **ALTRIMENTI** 
    - Controllo tutte le mail fin che non trovo la stessa     mail 
      **SE** trovo una mail uguale
      - Creo un alert 'email inserita già esistente, scegliere un'altra mail'
      **ALTRIMENTI**
       - Aggiungo la mial all'array
       - Stampo il messaggio di benvenuto in pagina

<br>
<br>

**SVOLGIMENTO TRACCIA DADI**

- Creo due bottoni per generare due numeri
- Recupero gli elementi dal DOM
**QUANDO** l'utente clicca sul bottone-utente
  - Genero un numero casuale da 1 a 6 
  - Assegno il numero all'utente
**QUANDO** l'utente clicca sul bottone-cpu
  - Genero un numero casuale da 1 a 6 
  - Assegno il numero alla CPU
- Creo il messaggio per la vittoria dell'utente
- Creo il messaggio per la vittoria della CPU
- Creo il messaggio per il pareggio
**SE** il numero CPU è maggiore del numero utente
 - Stampo nel DOM il messaggio di vittoria della CPU
 **ALTRIMENTI SE** il numero utente è maggiore del numero CPU
 - Stampo nel DOM il messaggio di vittora dell'utente
 **ALTRIMENTI** 
 - Stanmpo nel DOM il messaggio per il pareggio 

 
