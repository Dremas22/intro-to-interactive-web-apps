
//---Correctly assign varibles---- // 

const FREE_WARNING = 'Free shipping only applies to single customer orders';
const BANNED_WARNING = 'Unfortunately we do not ship to your country of residence'
const NONE_SELECTED = '0'
let shipping = 0;

//---- THE ABOVE CODE DID NOT FOLLOW JAVASCRIPT CODING RULES AND IT IS UNSTRUCTURED-----//
const checkShippingLocation = () => {
    let location = ""; //---location variable must be determined by user input or selection---//
    if (location = "RSA") {
        console.log(shipping === 400 && currency === 'R');
    } else if (location = "NAM") {
        console.log(shipping === 600 && currency === '$');
    } else if (location = "Korea") {
        console.log(BANNED_WARNING);
    }
     else {
        console.log(shipping === 800 && currency === '$');
    }
}
console.log(checkShippingLocation);


/*shoes = 300 * 1
toys - 100 * 5
hirts = 150 * 'NONE_SELECTED'
batteries 35 * 2
pens = 5 * 'NONE_SELECTED' */

//---- CALCULATING TOTAL USER COST-----//

const calShippingCost = () => {
    let price = 0;
    let user = 0;
    let location = "";
    const checkUserCost = price >= 1000 && user === 1 && location === "RSA" || "NAM" ? shipping = 0 : FREE_WARNING
    console.log(checkUserCost);
}



//---- USER BOUGHT SOME ITEMS, WE WANT TO TEST IF OUR ITINARY CODE CAN EXECUTE-----//

currency = "R";
shoes = 300;
toys = 500;
battries = 70;
let destination = "RSA"
let user = 1;
const userLocation =  (destination ==="RSA") && (user === 1);
const Price = userLocation ?  400 && currency === "R" : 600 && currency === "$"
console.log(Price, 'Price: ' + currency + `${shoes + toys + battries + 400}` );


