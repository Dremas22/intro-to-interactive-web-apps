const rent = 400;
const tax = '12%';
const food = 51.7501;
const salary = 800;
const transport = 10.2;
const hourOfDay = 00;
const minuteOfDay = 00;

// Only change below this line

if  (hourOfDay == '00' && minuteOfDay == '00') {
	const taxAsDecimal = parseInt(tax) / '100'
    const startingAfterTax = salary * (1 - taxAsDecimal)
    let balance = 0;
	balance = startingAfterTax - transport - food - rent
	console.log(balance.toFixed(2));
}

/*const taxAsDecimal = parseInt(tax) / 100;
const salaryAfterTax = salary * (1 - taxAsDecimal);
const checkTime = (hourOfDay === 00 && minuteOfDay === 00);
let balance = 0;
const userBalance = checkTime ? balance = salaryAfterTax - transport - food - rent : balance = 0;

console.log(userBalance.toFixed(2));
*/
