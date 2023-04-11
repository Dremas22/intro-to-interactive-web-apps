const add = (a, b, c) => { return a + b + c }
const multiply = (a, b, c) => { return a * b * c}

const internal = () => {
    
            this.add;
	        this.multiply;

}

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
example2.calculate()