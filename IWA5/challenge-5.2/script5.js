
//---Correctly assign varibles---- // 

const FREE_WARNING = 'Free shipping only applies to single customer orders';
const BANNED_WARNIN = 'Unfortunately we do not ship to your country of residence'
const NONE_SELECTED = '0'
let shippingCost = 0;

//---- THE ABOVE CODE DID NOT FOLLOW JAVASCRIPT CODING RULES AND IT IS UNSTRUCTURED-----//
const checkShippingLocation = () => {
    let location = ""; //---location variable must be determined by user input or selection---//
    if (location = "RSA") {
        console.log(shippingCost === 400 && currency === 'R');
    } else if (location = "NAM") {
        console.log(shippingCost === 600 && currency === '$');
    } else if (location = "Korea") {
        console.log(BANNED_WARNIN);
    }
     else {
        console.log(shippingCost === 800 && currency === '$');
    }
}
console.log(checkShippingLocation);


/*shoes = 300 * 1
toys - 100 * 5
hirts = 150 * 'NONE_SELECTED'
batteries 35 * 2
pens = 5 * 'NONE_SELECTED' */

//---- THE SCRIPT IS FOR COST CALCULATING, NOT FOR PRODUCT SELECTION-----//

const noShippingCost = () => {
    let userCost = 0;
    let user = 0;
    let location = "";
    const checkUserCost = userCost >= 1000 && user === 1 && location === "RSA" || "NAM" ? shippingCost = 0 : FREE_WARNING
    console.log(checkUserCost);
}

/*shipping = null 
currency = $*/

/*if (shoes + batteries + pens + shirts > 1000 &&  ) {
	if (location = NAM && customers < 2) {
			if (location = RSA)
		    shipping = 0 || calcShipping
		}
	}
}*/

/*if (shipping = 0) && (customers !=== 1) { console.log(WARNING) }

location = 'NK' ? console.log(WARNING) : console.log('price', currency, shoes + batteries + pens + shirts + shipping)

customers = '1'

currency = null*/