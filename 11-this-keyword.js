/*
	[This keyword]

	It refers to an object, but it depends on how or where it is being invoked. It also has some differences between strict mode and non-strict mode.
	The this keyword refers to the context where a pice of code is supposed to run. The value of this in Javascript dpends on how a function is invoked (runtime binding), not how it is defined.

	1. In an object method, this refers to the owner object.
	2. Alone, this refers to the global object.
	3. In a function, this refers to the global object.
	4. In a function, in strict mode, this is undefined.
	5. In an event, this refers to the element that received the event.
	6. Methods like call(), and apply() can refer this to any object.

	In arrow functions, this retains the value of the enclosing lexical context's this (they inherit from the parent scope at the time they are defined), but they do not have their own this binding. 
	In global code, it will be set to the global object.
*/

// 1. In an object method, this refers to the owner object.
const person = {
  firstName: "John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

console.log(person.fullName()); // John Doe

// 2. Alone, this refers to the global object.
console.log(this); // Window {...}

// 3. In a function, this refers to the global object.
function myFunction() {
  return this;
}

console.log(myFunction()); // Window {...}

const obj1 = {
  name: "Kate",
};

const obj2 = {
  name: "Jake",
};

obj1.getThis = myFunction;
obj2.getThis = myFunction;

console.log(obj1.getThis()); // {name: "Kate", getThis: [Function: myFunction]}
console.log(obj2.getThis()); // {name: "Jake", getThis: [Function: myFunction]}

// 4. In a function, in strict mode, this is undefined.
function myFunction() {
  "use strict";
  return this;
}

console.log(myFunction()); // undefined

// 5. In an event, this refers to the element that received the event.
document.getElementById("myBtn").addEventListener("click", function () {
  this.innerHTML = "Hello World";
});

// 6. Methods like call(), and apply() can refer this to any object.
const person1 = {
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

const person2 = {
  firstName: "John",
  lastName: "Doe",
};

console.log(person1.fullName.call(person2)); // John Doe

// In arrow functions, this retains the value of the enclosing lexical context's this.
const person3 = {
  firstName: "John",
  lastName: "Doe",
  fullName: () => {
    return this.firstName + " " + this.lastName;
  },
};

const person4 = {
  firstName: "John",
  lastName: "Doe",
  fullName: function () {
    const that = this;
    const nestedFunc = () => {
      return that.firstName + " " + that.lastName;
    };
    return nestedFunc();
  },
};

console.log(person3.fullName()); // undefined undefined
console.log(person4.fullName()); // John Doe

const globalThis = this;
const myArrowFn = () => this;
console.log(myArrowFn() === globalThis); // true

// In global code, it will be set to the global object.
const fullName = () => {
  return this.firstName + " " + this.lastName;
};

console.log(fullName()); // undefined undefined

// Note: In arrow functions, this retains the value of the enclosing lexical context's this.

/*
	[Function borrowing]
	Function borrowing allow us to use the methods of one object in another object without having to make a copy of that method.
	It is accomplished through the use of .call(), .apply(), or .bind() methods. All of which exist to explicitly set this on the method we are borrowing.

	call: The call() method calls a function with a given this value and arguments provided individually.
		call(thisArg)
		call(thisArg, arg1)
		call(thisArg, arg1, arg2)
		call(thisArg, arg1, arg2, ..., argN)

	apply: The apply() method calls a function with a given this value, and arguments provided as an array (or an array-like object).
		apply(thisArg)
		apply(thisArg, [argsArray])

	bind: The bind() method creates a new bound function that, when called, has its this keyword set to the provided value.
		bind(thisArg)
		bind(thisArg, arg1)
		bind(thisArg, arg1, arg2)
		bind(thisArg, arg1, arg2, ..., argN)
*/

function Product(name, price){
	this.name = name;
	this.price = price;
}
function Food(name, price){
	Product.call(this, name, price);
	this.category = 'food';
}
console.log(new Food('cheese', 5).name); // cheese

function greet(){
	const reply = [this.animal, 'typically sleep between', this.sleepDuration].join(' ');
	console.log(reply);
}
const obj = {
	animal: 'cats',
	sleepDuration: '12 and 16 hours'
};
greet.call(obj); // cats typically sleep between 12 and 16 hours

// Apply representative examples
function greet(){
	const reply = [this.animal, 'typically sleep between', this.sleepDuration].join(' ');
	console.log(reply);
}
const obj2 = {
	animal: 'cats',
	sleepDuration: '12 and 16 hours'
};
greet.apply(obj); // cats typically sleep between 12 and 16 hours

const numbers = [5, 6, 2, 3, 7];
const max = Math.max.apply(null, numbers);
console.log(max); // 7

const min = Math.min.apply(null, numbers);
console.log(min); // 2

// Bind representative examples

const module = {
	x: 42,
	getX: function(){
		return this.x;
	}
}

const unboundGetX = module.getX;
console.log(unboundGetX()); // undefined

const boundGetX = module.getX.bind(module);
console.log(boundGetX()); // 42


