import { company } from './configuration.js'
import { year } from './configuration.js'

var message = '© ' + company + ' (' + year + ')';

document.querySelector('footer').innerText = message;