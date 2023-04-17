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

  let nwaB = data.response.data.NM372;
  let month = MONTHS[11];
  console.log(month)

  const createHtml = (athlete) => {
    let nwaB = data.response.data.NM372;
    athlete = nwaB.firstName + athleteData.surname;
    let date = nwaB.races;
    date = date.reverse();
    let time = nwaB.races.time
    time = time.reverse();
    

    const day = date.getDate();
    const month = MONTHS[11];
    const year = date.year;
  
    // first, second, third, fourth = timeAsArray;
    // total = first + second + third + fourth;
  
    // const hours = total / 60;
    // const minutes = total / hours / 60;
  
    const fragment = document.createDocumentFragment();
  
    title = document.createElement('h2');
    title= nwaB.id;
    fragment.appendChild(title);
  
    const list = document.createElement('dl');
  
    const dtN1 = document.createElement('dt');
    dtN1.textContent = "Athlete";
    list.appendChild(dtN1);
    const ddN1 = document.createElement('dd');
    ddN1.textContent = `${nwaB.firstName, nwaB.surname}`;
    list.appendChild(ddN1);

    const dtN2 = document.createElement('dt');
    dtN2.textContent = "Total races";
    list.appendChild(dtN2)
    const ddN2 = document.createElement('dd');
    ddN2.textContent = `${races}`
    list.appendChild(ddN2)

    const dtN3 = document.createElement('dt');
    dtN3.textContent = "Event Date (Latest)";
    list.appendChild(dtN3)
    const ddN3 = document.createElement('dd')
    ddN3.textContent = `${day/month/year}`
    list.appendChild(ddN3)

    const dtN4 = document.createElement('dt');
    dtN4.textContent = "Total Time (Latest)";
    list.appendChild(dtN4);
    const ddN4 = document.createElement('dd')
    ddN4.textContent = `${hours.padStart(2, 0),minutes}`
    list.appendChild(ddN4);
    
    fragment.appendChild(list);
  }
  //[NM372],[SV782] = response.data
  // document.querySelector(NM372).appendChild(createHtml(NM372));
  // document.querySelector(SV782).appendChild(createHtml(SV782));