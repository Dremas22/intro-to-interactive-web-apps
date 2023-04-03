//--- Importing script----///

import { firstname1 } from './nwabisa.js';
import { surname1 } from './nwabisa.js';
import { role1 } from './nwabisa.js';

const displayNwabisa = document.getElementById('nwabisa');
displayNwabisa.innerText = firstname1 + " " + surname1 + ": " + role1;

import { firstname2 } from './Alex.js';
import { surname2 } from './Alex.js';
import { role2 } from './Alex.js';

const displayAlex = document.getElementById('alex');
displayAlex.innerText = firstname2 + " " + surname2 + ": " + role2;

import { firstname3 } from './Johannes.js';
import { surname3 } from './Johannes.js';
import {  role3 } from './Johannes.js';

const displayJohannes = document.getElementById('johannes');
displayJohannes.innerText = firstname3 + " " + surname3 + ": " + role3;


console.log('Roles: ', role1, role2, role3);