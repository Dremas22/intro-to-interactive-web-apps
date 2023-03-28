// scripts.js

import { nwabisaData } from './Nwabisa.js';
nwabisaData();

import { alexData } from './Alex.js';
alexData();

import { johannesData } from './Johannes.js';
johannesData();

const displayNwabisa = document.getElementById('nwabisa');
displayNwabisa.innerText = firstname + " " + surname + " (" + role + ")";

const displayAlex = document.getElementById('alex');
displayAlex.innerText = firstname + " " + surname + " (" + role + ")";

const displayJohannes = document.getElementById('johannes');
displayJohannes.innerText = firstname + " " + surname + " (" + role + ")";


console.log('Roles:', nwabisa.role, johanes.role, alex.role);