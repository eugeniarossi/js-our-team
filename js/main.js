'use strict';

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
console.log({team});

const container = document.getElementById('container');
const fragment = document.createDocumentFragment();

// Stampo in console e in pagina le proprietà di ogni oggetto contenuto nell'array
for (let i = 0; i < team.length; i++) {
    console.log(`${i + 1} member:`);
    
    const newDiv = document.createElement('div');
    const newHeading = document.createElement('h2');
    newHeading.innerText = (`${i + 1} member:`);
    newDiv.append(newHeading);

    for (let key in team[i]) {
        console.log(`${key}: ${team[i][key]}`);
        const newP = document.createElement('p');
        newP.innerText = (`${key}: ${team[i][key]}`);
        newDiv.append(newP);
    }
    fragment.append(newDiv);
    container.append(fragment);
}