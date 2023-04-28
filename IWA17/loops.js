const MONTHS = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
]

const getDaysInMonth = (date) => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()

// Only edit below 

/**
 * This day vasriable is extracted from the date method to get the current day by number of days in a  week.
 * @param {String ('')} day
 */

const date = new Date();
const month = MONTHS[date.getMonth()]
const day = date.getDate()

/**
 * The day variable gets current date.
 * This creates 3 arrays, the first one representing weeks with 5 array numbers
 * The second one representing days with 7 array numbers
 * the third one combines the above 2 arrays and returns them in sequencial form.
 * @param {String""} day -
 * @param {String[]} arrDays -
 * @param {String []} arrWeeks -
 * @param {String []} arrMonth -
 */
const createArrays = (arrDays, arrWeeks, arrMonth) => {
    arrDays = Array(7).fill([])
    arrWeeks = Array(5).fill([]);
    arrMonth = Array(5).fill().map(() => Array(7).fill([]));
    for (let i = 0; i < arrMonth.length; i++) {
        for (let j = 0; j < arrMonth[i].length; j++) {
          arrMonth[i][j];
        }
      
    }
    
    return { arrDays, arrWeeks, arrMonth}
    
}

/**
 * This array contains combination of arrDays and arrWees and place them in a 
 * numeracal order.
 * @param {String []} arrMonth -
 */

const { arrMonth } = createArrays();

/**
 * This array contains combination of arrDays and arrWees and place them in a 
 * numeracal order.
 * @param {String ('')} day
 * @param {String []} arrMonth -
 */

const createHtml = (strClass) => {

    const thead = document.querySelector('thead');
    const tr1 = document.createElement('tr');

    arrMonth[0][0] = "Week 1"
    arrMonth[0][7] = 1
    let elem1 = '';
    for (let i = 0; i < arrMonth[0].length; i++) {
        strClass = "table__cell";
    
        if (i === 0) {
            strClass = "table__cell" + " " + "table__cell_weekend"
            elem1 = `${elem1}<th class="${strClass}">${arrMonth[0][0]}</th>`;
        } else if (i === 7) {
            strClass = "table__cell" + " " + "table__cell_weekend"
            elem1 = `${elem1}<th class="${strClass}">${arrMonth[0][7]}</th>`;
        }
         else {
            elem1 = `${elem1}<th class="${strClass}">${arrMonth[0][i]}</th>`;
        }
    
    }

    tr1.innerHTML = `<tr>
                       ${elem1}
                    </tr>`
    thead.appendChild(tr1)

    const tr2 = document.createElement('tr');
    
    arrMonth[1][0] = "Week 2"
    arrMonth[1][1] = 2
    arrMonth[1][2] = 3
    arrMonth[1][3] = 4
    arrMonth[1][4] = 5
    arrMonth[1][5] = 6
    arrMonth[1][6] = 7
    arrMonth[1][7] = 8
    let elem2 = '';
    for (let i = 0; i < arrMonth[1].length; i++) {
        let strClass = "table__cell" + " " + "table__cell_alternate";
    
        if (i === 0) {
            strClass = "table__cell_alternate" + " " + "table__cell_weekend"
            elem2 = `${elem2}<th class="${strClass}">${arrMonth[1][0]}</th>`;
        } else if (i === 7) {
            strClass = "table__cell_alternate" + " " + "table__cell_weekend"
            elem2 = `${elem2}<th class="${strClass}">${arrMonth[1][7]}</th>`;
        }
        else {
            elem2 = `${elem2}<th class="${strClass}">${arrMonth[1][i]}</th>`;
        }
    
    }
    
    tr2.innerHTML = `<tr>
                        ${elem2}
                      </tr>`

    thead.appendChild(tr2)

    const tr3 = document.createElement('tr');

    arrMonth[2][0] = "Week 3"
    arrMonth[2][1] = 9
    arrMonth[2][2] = 10
    arrMonth[2][3] = 11
    arrMonth[2][4] = 12
    arrMonth[2][5] = 13
    arrMonth[2][6] = 14
    arrMonth[2][7] = 15
    let elem3 = '';
    for (let i = 0; i < arrMonth[2].length; i++) {
        let strClass = "table__cell";   
        if (i === 0) {
            strClass = "table__cell" + " " + "table__cell_weekend"
            elem3 = `${elem3}<th class="${strClass}">${arrMonth[2][0]}</th>`;
        } else if (i === 7) {
            strClass = "table__cell" + " " + "table__cell_weekend"
            elem3 = `${elem3}<th class="${strClass}">${arrMonth[2][7]}</th>`;
        }
        else {
            elem3 = `${elem3}<th class="${strClass}">${arrMonth[2][i]}</th>`;
        }
    
    }
    tr3.innerHTML = `<tr>
                        ${elem3}
                      </tr>`

    thead.appendChild(tr3)

    const tr4 = document.createElement('tr');
    arrMonth[3][0] = "Week 4"
    arrMonth[3][1] = 16
    arrMonth[3][2] = 17
    arrMonth[3][3] = 18
    arrMonth[3][4] = 19
    arrMonth[3][5] = 20
    arrMonth[3][6] = 21
    arrMonth[3][7] = 22
    let elem4 = ""
    for (let i = 0; i < arrMonth[3].length; i++) {
        strClass = "table__cell" + " " + "table__cell_alternate";
        if (i === 0) {
            strClass = "table__cell_alternate" + " " + "table__cell_weekend" 
            elem4 = `${elem4}<th class="${strClass}">${arrMonth[3][0]}</th>`;
        } else if (i === 7) {
            strClass = "table__cell_alternate" + " " + "table__cell_weekend"
            elem4 = `${elem4}<th class="${strClass}">${arrMonth[3][7]}</th>`;
        }
        else {
            elem4 = `${elem4}<th class="${strClass}">${arrMonth[3][i]}</th>`;
        }
    
    }
    tr4.innerHTML = `<tr>
                        ${elem4}
                      </tr>`

    thead.appendChild(tr4)

    const tr5 = document.createElement('tr');

    arrMonth[4][0] = "Week 5"
    arrMonth[4][1] = 23
    arrMonth[4][2] = 24
    arrMonth[4][3] = 25
    arrMonth[4][4] = 26
    arrMonth[4][5] = 27
    arrMonth[4][6] = 28
    arrMonth[4][7] = 29
    let elem5 = "";
    for (let i = 0; i < arrMonth[4].length; i++) {
        strClass = "table__cell";
        if (i === 0) {
            strClass = "table__cell" + " " + "table__cell_weekend"
            elem5 = `${elem5}<th class="${strClass}">${arrMonth[4][0]}</th>`;
        } else if (arrMonth[4][i] === day) {
                strClass = "table__cell" + " " + "table__cell_today"
                elem5 = `${elem5}<th class="${strClass}">${arrMonth[4][i]}</th>`
            
        } else if (i === 7) {
            strClass = "table__cell" + " " + "table__cell_weekend"
            elem5 = `${elem5}<th class="${strClass}">${arrMonth[4][7]}</th>`;
        }
         else {
            elem5 = `${elem5}<th class="${strClass}">${arrMonth[4][i]}</th>`
        }
    
    }
    tr5.innerHTML = `<tr>
                        ${elem5}
                    </tr>`

    thead.appendChild(tr5)

}
createHtml()

// Only edit above

const current = new Date()
document.querySelector('[data-title]').innerText = `${MONTHS[current.getMonth()]} ${current.getFullYear()}`

const data = createData()
document.querySelector('[data-content]').innerHTML = createHtml(data)