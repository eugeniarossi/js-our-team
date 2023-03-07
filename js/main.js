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

// Stampo in console le proprietà di ogni oggetto contenuto nell'array
for (let i = 0; i < team.length; i++) {
    console.log(`${i + 1} member:`);
    for (let key in team[i]) {
        console.log(`${key}: ${team[i][key]}`);
    }
}