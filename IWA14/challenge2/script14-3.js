const add = (a, b, c) => { return a + b + c }
const multiply = (a, b, c) => { return a * b * c }

const internal = {

	add,
	multiply,
}

internal.add
internal.multiply

// Not allowed to change below this

const example1 = {
	internal: {
		a: 2,
		b: 4,
		c: 8,
	},
	add,
	multiply,
  calculate: internal
}

const example2 = {
	internal: {
		a: 2,
		b: 4,
		c: 8,
	},
	add,
	multiply,
  calculate: internal
}

console.log(example1.calculate)
console.log(example2.calculate)