const data = {
	lists: [
		['first', [15, 11, 13, 7, 5]],
		['second', [2, 6, 8, 4, 14, 12, 10]],
		['third', [9, 3, 1]],
	]
}

// Only edit below

const { first = 1 } = data.lists[0] || {}
const { second = 1 } = data.lists[1] || {}
const { third = 1 } = data.lists[2] || {}

const result = []

const extractBiggest = () => {
	if (first[first.length-1] > second[second.length-1]) {
		return second[second.length-1]
	}

	if (third[third.length-1] < 1) {
		return second[second.length-1]
	}
	
	return third[third.length-1]
}

// Only edit above

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

console.log(result)