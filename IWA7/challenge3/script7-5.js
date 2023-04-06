const leoName = 'Leo'
const leoSurname = 'Musvaire     '
const leoBalance = '-9394'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.21000111'

const divider = '----------------------------------'

// Only change below this line

const owed = 'R' + " " + Math.abs(parseFloat(leoBalance) + parseFloat(sarahBalance)).toFixed(2);
let newOwed = owed.toString().slice(0, 4) + " " + owed.toString().slice(3);
const leo = " " + leoName.trim() + leoSurname + "(" + "Owed" + " " + "R" + " " + Math.abs(leoBalance).toFixed(2) + ")";
const sarah = sarahName.trim() + "  " + sarahSurname + " " + "(" + "Owed" + " " + "R" + " " + Math.abs(sarahBalance).toFixed(2) + ")";
const total = "Total amount owed: "+ " " + newOwed;

//const result = leo + sarah + divider + divider + total + owed + divider

console.log("");
console.log(sarah);
console.log(leo);
console.log("");
console.log(divider);
console.log(total);
console.log(divider);

/* Leo Musvaire (Owed: R 9394.00)
Sarah Kleinhans (Owed: R 4582.20)

----------------------------------
  Total amount owed: R 14 976.20
---------------------------------- */ 