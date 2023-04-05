const elem = document.getElementsByTagName('dl');

let root1, biscuits1, donuts1, pancakes1, delivered;

for (let i=0; i<elem.length; i++) {
    root1 = elem[i].getAttribute('data-key');-
    biscuits1 = elem[i].getAttribute('data-biscuits');
    donuts1 = elem[i].getAttribute('data-donuts');
    pancakes1 = elem[i].getAttribute('data-pancakes');
    delivered = elem[i].getAttribute('data-delivered');
    console.log(root1, biscuits1, donuts1, pancakes1, delivered)
}
 //console.log("root1", root1)