const data = {
	lists: [
		['first', [15, 11, 13, 7, 5]],
		['second', [2, 6, 8, 4, 14, 12, 10]],
		['third', [9, 3, 1]],
	]
}

// Only edit below

const first = data.lists[0][1]
const second = data.lists[1][1]
const third = data.lists[2][1]

let result = '';

const extractBiggest = () => {
	let arr1 = [];
	let arr2 = [];
	let arr3 = [];
	let arr4 = [];

	if (second[6] > first[4] && second[6] > third[2]) {
		arr1.push(second[6],second[5],second[4]);
		arr2.push(first[3],first[2],first[1],first[0]);
		arr3.push(second[2],second[1],second[0]);
		arr4.push(third[2],third[1],third[0]);

		return arr1.concat(arr2, arr3, arr4);

	} else {
		return third
	}
}

// Only edit above

result = extractBiggest();

// result.push(extractBiggest())
// result.push(extractBiggest())
// result.push(extractBiggest())
// result.push(extractBiggest())
// result.push(extractBiggest())

// result.push(extractBiggest())
// result.push(extractBiggest())
// result.push(extractBiggest())
// result.push(extractBiggest())
// result.push(extractBiggest())

// result.push(extractBiggest())
// result.push(extractBiggest())
// result.push(extractBiggest())
// result.push(extractBiggest())
// result.push(extractBiggest())

console.log(result)