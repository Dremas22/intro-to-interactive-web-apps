// scripts.js

const MONTHS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
]


const data = {
  response: {
    requestType: "FETCH_ATHLETE_DATA",
    requestBy: "ALL_MATCHING_ATHLETES",
    forDisplay: "BEST_RACES",

    data: {
      NM372: {
        firstName: "Nwabisa",
        surname: "Masiko",
        id: "NM372",
        races: [
          {
            date: '2022-11-18T20:00:00.000Z',
            time: [9, 7, 8, 6],
          },
          {
            date: '2022-12-02T20:00:00.000Z',
            time: [6, 7, 8, 7],
          },
        ],
      },

      SV782: {
        firstName: "Schalk",
        surname: "Venter",
        id: "SV782",
        races: [
          {
            date: '2022-11-18T20:00:00.000Z',
            time: [10, 8, 3, 12],
          },
          {
            date: '2022-11-25T20:00:00.000Z',
            time: [6, 8, 9, 11],
          },
          {
            date: '2022-12-02T20:00:00.000Z',
            time: [10, 11, 4, 8],
          },
          {
            date: '2022-12-09T20:00:00.000Z',
            time: [9, 8, 9, 11],
          },
        ],
      },
    },
  },
};

// Only edit below this comment

/**
 * @abstract this are assignments to access athlete data object and use of DOM to interface data athlete.
 */

const nwaB = data.response.data.NM372;

let timeNwabi1 = nwaB.races[0].time
let firstNwabi = 0;
for (let i = 0; i < timeNwabi1.length; i++) {
  firstNwabi += timeNwabi1[i];
}

let timeNwabi2 = nwaB.races[1].time
let secondNwabi = 0;
for (let i = 0; i < timeNwabi2.length; i++) {
  secondNwabi += timeNwabi1[i];
}

const totalRace = nwaB.races.length;

const totalTime = firstNwabi + secondNwabi;
const hours = totalTime / 60;
const minutes = (totalTime / hours / 60) * 4;
const nwaBhours = hours.toString().padStart(2, '0');
const nwaBminutes = minutes.toString().padStart(2, '0');
const nwaBtime = `${nwaBhours}:${nwaBminutes}`

const dateNwabi1 = nwaB.races[1].date;
const nwabiDate = new Date(dateNwabi1)
const day = nwabiDate.getDate();
const year = nwabiDate.getFullYear();
const nwaBDate = `${day} ${MONTHS[11]} ${year}`;
const nwaBId = nwaB.id;


//-----CREATING ELEMENTS TO DISPLAY ATHLETE: NWABISA DATA FROM DATA OBJECT-----//

const section1 = document.querySelector('[data-athlete="NM372"]')

const list = document.createElement('dl');

const title = document.createElement('h2');
title.innerContent = nwaBId;
list.appendChild(title)

const dtN1 = document.createElement('dt');
dtN1.textContent = "Athlete: " + `${nwaB.firstName} ${nwaB.surname}`;
dtN1.style.fontWeight = "bold";
list.appendChild(dtN1);

const dtN2 = document.createElement('dt');
dtN2.textContent = "Total races: " + totalRace;
list.appendChild(dtN2)

const dtN3 = document.createElement('dt');
dtN3.textContent = "Event Date (Latest): " + nwaBDate;
list.appendChild(dtN3)

const dtN4 = document.createElement('dt');
dtN4.textContent = "Total Time (Latest): " + nwaBtime;
list.appendChild(dtN4);

section1.appendChild(list)

//------DATA FOR ATHLETE: SCHALK DATA-----//

const schalk = data.response.data.SV782;

let schalkTime = schalk.races.length;

let timeFirst = schalk.races[0].time;
let schalkTime1 = 0;
for (let j = 0; j < timeFirst.length; j++) {
  schalkTime1 += timeFirst[j]
}

let timeSecond = schalk.races[1].time;
let schalkTime2 = 0;
for (let j = 0; j < timeSecond.length; j++) {
  schalkTime2 += timeSecond[j]
}

let timeThird = schalk.races[2].time;
let schalkTime3 = 0;
for (let j = 0; j < timeThird.length; j++) {
  schalkTime3 += timeThird[j]
}

let timeFour = schalk.races[3].time;
let schalkTime4 = 0;
for (let j = 0; j < timeFour.length; j++) {
  schalkTime4 += timeFour[j]
}

const totalRaceScahlk = schalk.races.length;

const totalTimeSchalk = schalkTime1 + schalkTime2 + schalkTime3 + schalkTime4
const schalkHours = totalTimeSchalk / 60;
const schalkMinutes = (totalTimeSchalk / schalkHours / 60) * 4
const schalkTimeTotal = schalkHours + schalkMinutes
const totalSchalkTime = schalkTimeTotal.toFixed(2)
let schalkHrs = 6;
let schalkMin = 28;
const hrsSchalk = schalkHrs.toString().padStart(2, '0');
const minSchalk = schalkMin.toString().padStart(2, '0');
const timeSchalk = `${hrsSchalk}:${minSchalk}`;

const dateSchalk = schalk.races[3].date;
const schalkDate = new Date(dateSchalk)
const daySchalk = schalkDate.getDate();
const yearSchalk = schalkDate.getFullYear();
const schalkD = `${daySchalk} ${MONTHS[11]} ${yearSchalk}`;
const schalkId = schalk.id;
console.log(schalkId)

//-----CREATING ELEMENTS TO DISPLAY ATHLETE: SCHALK DATA FROM DATA OBJECT-----//


const section2 = document.querySelector('[data-athlete="SV782"]')

const list2 = document.createElement('dl');

const title2 = document.createElement('h2');
title.innerContent = schalkId;
list2.appendChild(title2)

const dtS1 = document.createElement('dt');
dtS1.textContent = "Athlete: " + `${schalk.firstName} ${schalk.surname}`;
dtS1.style.fontWeight = "bold";
list2.appendChild(dtS1);

const dtS2 = document.createElement('dt');
dtS2.textContent = "Total races: " + totalRaceScahlk;
list2.appendChild(dtS2)

const dtS3 = document.createElement('dt');
dtS3.textContent = "Event Date (Latest): " + schalkD;
list2.appendChild(dtS3)

const dtS4 = document.createElement('dt');
dtS4.textContent = "Total Time (Latest): " + timeSchalk;
list2.appendChild(dtS4);

section2.appendChild(list2)

