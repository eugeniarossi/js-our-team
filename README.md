# CONSEGNA

Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni:
nome
ruolo
foto

### MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.

### MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto

### MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe

### BONUS 1:
Trasformare la stringa foto in una immagine effettiva

### BONUS 2:
Organizzare i singoli membri in card/schede

***
***

# SOLUZIONE

### MILESTONE 0:
0. Definisco un array team con all'interno un oggetto per ogni membro del team. Ogni oggetto conterrà all'interno tre proprietà, con le chiavi nome / ruolo / foto

### MILESTONE 1:
1. Attraverso l'array con un ciclo for. All'interno definirò un secondo ciclo for per stampare ogni proprietà degli oggetti. Faccio un console log.

### MILESTONE 2:
2. Creo un document fragment. Creo un elemento html div container e lo salvo in una variabile.

3. Nel ciclo for dell'array creo degli elementi html div quanti sono gli oggetti. Creo un titolo che aggiungo al div. 

4. Nel ciclo for degli oggetti creo degli elementi html che aggiungo all'interno dei div, e assegno tramite interpolazione le stringhe di informazioni. 

5. Aggiungo i div al frammento e aggiungo il frammento al container. 

### BONUS1: 

6. Aggiungo delle condizioni nel ciclo for dell'oggetto. Se la chiave è 'profile-picture' allora creo un elemento immagine a cui fornisco il path tramite interpolazione 

### BONUS 2:

7. Aggiungo uno stile alla pagina e agli elementi html generati nel ciclo for.