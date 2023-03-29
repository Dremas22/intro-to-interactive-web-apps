let count = 0; //use local variable type. 

if (date = 2050) {

    const date = 2050;
    let status = "";

	let monthFour = 'April'; //assign a local variable for April
	console.log(monthFour, 'Family Day');
	console.log(monthFour, 'Freedom Day');
	count += 2; //remove let because count variable is already been declared with a "const"

	if (status = "student") {
	   console.log('June', 'Youth Day')
	   count += 1;
    } //indent code block()

    if (status = "parent") {
        console.log(date, 'Christmas Day')
        count += 1;
    }

    console.log("January", "New Year’s Day")
    console.log("March", 'Human Rights Day')
	console.log('August', 'Women’s Day')
	console.log('September', 'Heritage Day')
    count += 4;

	let monthTwelve = 'December';
	console.log(monthTwelve, 'Day of Reconciliation');
	count += 1;

	console.log(date, 'Day of Goodwill')
	count += 1;
}

console.log('Your status is:', "Parent or Student")
console.log('The year is:', date)
console.log('The total holidays is:', count)