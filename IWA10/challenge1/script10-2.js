const currentYear = new Date().getFullYear()

const holidays = {
    0: {
        id: 0,
        name: 'Day of Reconciliation',
        date: `16 December ${currentYear}`,
    },
    1: {
        id: 1,
        name: 'Workers Day',
        date: new Date(`1 April ${currentYear}`),
    },
    2: {
        id: 2,
        name: 'Day of Goodwill',
        date: new Date(`26 December ${currentYear}`),
    },
    3: {
        id: 3,
        name: 'New Year Day',
        date: new Date(`1 January ${currentYear}`),
    },
    4: {
        id: 4,
        name: 'Womens Day',
        date: new Date(`9 August ${currentYear}`),
    },
    5: {
        id: 5,
        name: 'Heritage Day',
        date: new Date(`24 September ${currentYear}`),
    },
    6: {
        id: 6,
        name: 'Christmas Day',
        date: new Date(`25 December ${currentYear} 13:25`),
    },
    7: {
        id: 7,
        name: 'Youth Day',
        date: new Date(`16 June ${currentYear}`),
    },
    8: {
        id: 8,
        name: 'Human Rights Day',
        date: new Date(`21 March ${currentYear}`)
    },

    /*9: {
        id: 9,
        name: "Tshepo"
    } */
}

const christmas = 6
const futureId = 9

// Do not change code above this comment


if (holidays[9]) {
    console.log(holidays[9]);
}
if (!holidays[9]) {
    console.log(`ID ${futureId} not created yet`)
}


let copied = holidays[6];
copied = { name: 'X-mas Day', date: new Date(`25 December ${currentYear} 00:00`) };
console.log(copied)

let correctDate = holidays[6].date;
correctDate = copied.date
correctDate.hours = 0
correctDate.minutes = 0
isEarlier = copied.date < holidays[6].date
console.log('New date is earlier:', isEarlier)
if (isEarlier) copied.date = correctDate
console.log('ID change:', holidays[6].id == copied.id)
console.log('Name change:', copied.name = copied.name || copied.name)
console.log('Date change:', holidays[christmas].date.toLocaleDateString({day: 25, month: 12, year: 2023}));

//-------CONVERT OBJECT DATES TO NUMBER FOR MIN & MAX PURPOSE----//

const date1 = new Date("16 December 2023").getTime();;
const date2 = new Date("1 April 2023").getTime();
const date3 = new Date("26 December 2023").getTime();
const date4 = new Date("1 January 2023").getTime();
const date5 = new Date("9 August 2023").getTime();
const date6 = new Date("24 September 2023").getTime();
const date7 = new Date("25 December 2023").getTime();
const date8 = new Date("16 June 2023").getTime();
const date9 = new Date("21 March 2023").getTime();

//----------DATES CONVERTION ------//

let firstHolidayTimestamp = Math.min(date1, date2, date3, date4, date5, date6, date7, date8, date9);
const dateFirst = new Date(firstHolidayTimestamp);
const dayFirst = dateFirst.getUTCDate();
const monthFirst = dateFirst.getUTCMonth() + 1;
const yearFirst = dateFirst.getUTCFullYear();
firstHolidayTimestamp = `${dayFirst}/${monthFirst}/${yearFirst}`;


let lastHolidayTimestamp = Math.max(date1, date2, date3, date4, date5, date6, date7, date8, date9);
const dateLast = new Date(lastHolidayTimestamp);
const dayEnd = dateLast.getUTCDate();
const monthEnd = dateLast.getUTCMonth() + 1;
const yearEnd = dateLast.getUTCFullYear();
lastHolidayTimestamp = `${dayEnd}/${monthEnd}/${yearEnd}`;


const firstDay = firstHolidayTimestamp;
const lastDay = lastHolidayTimestamp;


const formatFirstDay = firstDay.toString().padStart(2, '0');
//const formatFirstMonth = firstMonth.toString().padStart(2, '0');
const formatLastDay = lastDay.toString().padStart(2, "0");
//const formatLastMonth = lastMonth.toString().padStart(2, '0');

console.log(`${formatFirstDay}`)
console.log(`${formatLastDay}`)

const randomHoliday = holidays[Math.random()]
console.log(randomHoliday)