//---------------CHANGING THE ELEMENT TEXT FOR ORDER 1---------------//

const root_1 = document.querySelector('[data-key="order1"]');
const biscuits_1 = document.querySelector('[data-biscuits="10"]');
const biscuitElem1 = document.getElementsByClassName("biscuits");
const firstBiscuits = biscuitElem1[0];
firstBiscuits.innerText = root_1.dataset.key + ":" + " " + biscuits_1.dataset.biscuits;

const donuts_1 = document.querySelector('[data-donuts="13"]');
const donutsElem1 = document.getElementsByClassName('donuts');
const firstDonuts = donutsElem1[0];
firstDonuts.innerText = root_1.dataset.key + ":" + " " + donuts_1.dataset.donuts;

const pancakes_1 =  document.querySelector('[data-pancakes="0"]');
const pancakesElem1 = document.getElementsByClassName('pancakes');
const firstPancakes = pancakesElem1[0];
firstPancakes.innerText = root_1.dataset.key + ":" + " " + pancakes_1.dataset.pancakes;

const status_1 = document.querySelector('[data-delivered="false"]')
const statusElem1 = document.getElementsByClassName('status');
const firstStatus = statusElem1[0];
let status1 = status_1.dataset.delivered;
const status_1st = Boolean(status1) === false;
firstStatus.innerText = status_1st ? 'Delivered' : 'Pending'

//---------------CHANGING THE ELEMENT TEXT FOR ORDER 2---------------//

const root_2 = document.querySelector('[data-key="order2"]');
const biscuits_2 = document.querySelector('[data-biscuits="5"]');
const biscuitElem2 = document.getElementsByClassName("biscuits");
const secondBiscuits = biscuitElem2[1];
secondBiscuits.innerText = root_2.dataset.key + ":" + " " + biscuits_2.dataset.biscuits;

const donuts_2 = document.querySelector('[data-donuts="0"]');
const donutsElem2 = document.getElementsByClassName('donuts');
const secondDonuts = donutsElem1[1];
secondDonuts.innerText = root_2.dataset.key + ":" + " " + donuts_2.dataset.donuts;

const pancakes_2 = document.querySelector('[data-pancakes="2"]');
const pancakesElem2 = document.getElementsByClassName('pancakes');
const secondPancakes = pancakesElem2[1];
secondPancakes.innerText = root_2.dataset.key + ":" + " " + pancakes_2.dataset.pancakes;

const status_2 = document.querySelector('[data-delivered="false"]');
const statusElem2 = document.getElementsByClassName('status');
const secondStatus = statusElem2[1];
let status2  = status_2.dataset.delivered;
const status2nd = Boolean(status2) === false;
secondStatus.innerText = status2nd ? 'Delivered' : 'Pending'

//---------------CHANGING THE ELEMENT TEXT FOR ORDER 3---------------//


const root_3 = document.querySelector('[data-key="order3"]');
const biscuits_3 = document.querySelector('[data-biscuits="12"]');
const biscuitElem3 = document.getElementsByClassName("biscuits");
const thirdBiscuits = biscuitElem3[2];
thirdBiscuits.innerText = root_3.dataset.key + ":" + " " + biscuits_3.dataset.biscuits;

const donuts_3 = document.querySelector('[data-donuts="11"]');
const donutsElem3 = document.getElementsByClassName('donuts');
const thirdDonuts = donutsElem3[2];
thirdDonuts.innerText = root_3.dataset.key + ":" + " " + donuts_3.dataset.donuts;

const pancakes_3 = document.querySelector('[data-pancakes="15"]');
const pancakesElem3 = document.getElementsByClassName('pancakes');
const thirdPancakes = pancakesElem3[2];
thirdPancakes.innerText = root_3.dataset.key + ":" + " " + pancakes_3.dataset.pancakes;

const status_3 = document.querySelector('[data-delivered="true"]');
const statusElem3 = document.getElementsByClassName('status');
const thirdStatus = statusElem3[2];
let status3 = status_3.dataset.delivered;
const status3rd = Boolean(status3) === true;
thirdStatus.innerText = status3rd ? 'Delivered' : 'Pending'

//---------------CHECKING STATUS AND COUNTING TOTAL ORDERS BASED ON STATUS---------------//

const countElem1 =  document.getElementsByClassName('count')
const countFirst = countElem1[0];
const countStatus1 = status_1st ? console.log(parseInt(biscuits_1.dataset.biscuits) + parseInt(biscuits_2.dataset.biscuits) + parseInt(biscuits_3.dataset.biscuits)) : 0
const countStatus2 = status3rd ? console.log(parseInt(biscuits_1.dataset.biscuits) + parseInt(biscuits_2.dataset.biscuits) + parseInt(biscuits_3.dataset.biscuits)) : 0

const countElem2 =  document.getElementsByClassName('count')
const count2nd = countElem2[1];
const countStatus3 = status_1st ? console.log(parseInt(donuts_1.dataset.donuts) + parseInt(donuts_2.dataset.donuts) + parseInt(donuts_3.dataset.donuts)) : 0
const countStatus4 = status3rd ? console.log(parseInt(donuts_1.dataset.donuts) + parseInt(donuts_2.dataset.donuts) + parseInt(donuts_3.dataset.donuts)) : 0

const countElem3 =  document.getElementsByClassName('count')
const count3rd = countElem3[2];
const countStatus5 = status_1st ? console.log(parseInt(pancakes_1.dataset.pancakes) + parseInt(pancakes_2.dataset.pancakes) + parseInt(pancakes_3.dataset.pancakes)) : 0
const countStatus6 = status3rd ? console.log(parseInt(pancakes_1.dataset.pancakes) + parseInt(pancakes_2.dataset.pancakes) + parseInt(pancakes_3.dataset.pancakes)) : 0