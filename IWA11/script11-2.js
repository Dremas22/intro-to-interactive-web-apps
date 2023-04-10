const root_1 = document.querySelector('[data-key="order1"]');
const biscuits_1 = document.querySelector('[data-biscuits="10"]');
biscuits_1.innerText = root_1.dataset.key + biscuits_1.dataset.biscuits;
const donuts_1 = document.querySelector('[data-donuts="13"]');
const pancakes_1 =  document.querySelector('[data-pancakes="0"]');
const status_1 = document.querySelector('[data-delivered="false"]');

const root_2 = document.querySelector('[data-key="order2"]');
const biscuits_2 = document.querySelector('[data-biscuits="5"]');
const donuts_2 = document.querySelector('[data-donuts="0"]');
const pancakes_2 = document.querySelector('[data-pancakes="2"]');
const status_2 = document.querySelector('[data-delivered="false"]');

const root_3 = document.querySelector('[data-key="order3"]');
const biscuits_3 = document.querySelector('[data-biscuits="12"]');
const donuts_3 = document.querySelector('[data-donuts="11"]');
const pancakes_3 = document.querySelector('[data-pancakes="15"]');
const status_3 = document.querySelector('[data-delivered="true"]');



donuts_1.innerText = root_1.dataset.key + " " + donuts_1.dataset.donuts;
pancakes_1.innerText = root_1.dataset.key + " " + pancakes_1.dataset.pancakes;
status_1.innerText = root_1.status ? 'Delivered' : 'Pending'

biscuits_2.innerText = root_2.biscuits;
donuts_2.innerText = root_2.donuts;
pancakes_2.innerText = root_2.pancakes;
status_2.innerText = root_2.status ? 'Delivered' : 'Pending'

biscuits_3.innerText = root_3.biscuits;
donuts_3.innerText = root_3.donuts;
pancakes_3.innerText = root_3.pancakes;
status_3.innerText = root_3.status ? 'Delivered' : 'Pending'


document(biscuits.p-count).pending = status_2 ? biscuits_1 + biscuits_2 + biscuits_3: 0
document(biscuits.p-count).delivered = status_3 ? 0 : biscuits_1 + biscuits_2 + biscuits_3

document(donuts.p-count).pending = status_3 ? donuts_1 + donuts_2 + donuts_3: 0
document(donuts.p-count).delivered = status_2 ? 0 : donuts_1 + donuts_2 + donuts_3

document(pancakes.p-count).pending = status_2 ? pancakes_1 + pancakes_2 + pancakes_3 : 0
document(pancakes.p-count).delivered = status_3 ? 0 : pancakes_1 + pancakes_2 + pancakes_3