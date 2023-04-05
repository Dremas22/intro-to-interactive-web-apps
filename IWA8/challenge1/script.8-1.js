const leoName = 'Leo Musvaire'
const leoNumber = '2'
const leoStreet = 'Church St.'
const leoPostal = '3105'
const leoBalance = '-10'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.21000111'
const sarahNumber = '13'
const sarahStreet = 'William Close'
const sarahPostal = '0310'

// Only change below this line

const leo = {
	name: 'Leo Musvaire',
	balance: '-10',
	access_Id: '47afb389-8014-4d0b-aff3-e40203d2107f',
	age: 24,
	address: {
		number: leoNumber,
		street: leoStreet,
		postal_Code: leoPostal
	}
}

const sarah = {
	name: sarahName,
	age: 62,
	access_Id: '6b279ae5-5657-4240-80e9-23f6b635f7a8',
	balance: sarahBalance,
	address: {
		number: sarahNumber,
		street: sarahStreet,
		postal_Code: sarahPostal
	}
}
console.log(leo, leo.address.postal_Code)
console.log(sarah, sarah.address.postal_Code)