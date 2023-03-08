'use strict';

/************
 * Functions
 */

// Funzione che stampa in console e in pagina le proprietà di ogni oggetto contenuto nell'array
function show() {
    for (let i = 0; i < team.length; i++) {
        console.log(`${i + 1} member:`);

        const newCol = document.createElement('div');
        newCol.classList.add('col-9', 'col-md-5', 'col-lg-4', 'my-4', 'px-4', 'text-center');
        const newArticle = document.createElement('article');
        newArticle.classList.add('d-flex', 'flex-column')
        newCol.append(newArticle);
        const newDiv = document.createElement('div');

        for (let key in team[i]) {
            if (key !== 'profile-picture') {
                console.log(`${key}: ${team[i][key]}`);
                const newP = document.createElement('p');
                newP.innerText = team[i][key];
                newDiv.append(newP);
            } else {
                const newImg = `<img src="img/${team[i][key]}" alt="profile picture">`;
                newArticle.innerHTML += newImg;
                console.log(newImg);
            }
        }
        newArticle.append(newDiv);
        fragment.append(newCol);
    }
    container.append(fragment);
}

/************
 * Main
 */

// Definisco un array team con all'interno un oggetto per ogni membro del team
const team = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        'profile-picture': 'wayne-barnett-founder-ceo.jpg'
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        'profile-picture': 'angela-caroll-chief-editor.jpg'
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        'profile-picture': 'walter-gordon-office-manager.jpg'
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        'profile-picture': 'angela-lopez-social-media-manager.jpg'
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        'profile-picture': 'scott-estrada-developer.jpg'
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        'profile-picture': 'barbara-ramos-graphic-designer.jpg'
    }
];

// Stampo in console l'array team
console.log({ team });
// Salvo il container in una variabile
const container = document.getElementById('cards-container');
// Creo un document fragment
const fragment = document.createDocumentFragment();

show();