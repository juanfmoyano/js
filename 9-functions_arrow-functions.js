/*
	[Arrow functions]
	An arrow function expression is a compact alternative to a traditional function expression, but is limited and can't be used in all situations.
	- Arrow functions don't have their own bindings to this, arguments, or super, and should not be used as methods -> This will be explained in next sections
	- Arrow functions cannot be used as constructors. Calling them with 'new' throws a TypeError. They also don't have access to the new.target keyword.
	- Arrow functions cannot use yield within their body and cannot be created as generator functions -> Generators will be also explained in next sections

	- Rest parameters, default parameters and destructuring within params are supported, and always require parentheses
	- Arrow functions can be async => async code will be also explained in next sections

	Syntax
  () => expression
	param => expression
	(param) => expression
	(param1, paramN) => expression
	() => { statements }
	param => { statements }
	(param1, paramN) => { statements }
*/

const oldFn = function (a) {
  return a + 100;
};
const newFn = (a) => a + 100;

const arrowFn1 = (x) => {
  // Do more things
  return x * x;
};

const arrowFn2 = (x) => x * x;
const arrowFn3 = () => 100;
const arrowFn4 = (x, y) => x + y;
const arrowFn5 = () => {
  console.log("I am an arrow function");
};
const arrowFn6 = () => { x: 6}; // This will not work as expected, because the curly braces are interpreted as the start of a block
const arrowFn7 = () => ({ x: 6 }); // This will work as expected, because the parentheses are interpreted as the start of an object literal

/*
	The 'this' keyword - A little teaser
	- Arrow functions do not have their own this. Instead, they inherit this from the lexical scope (i.e., the surrounding context where the arrow function is defined).
	- This means that arrow functions "capture" the this value from the outer function or global context.
	- Regular functions define their own this based on how they are called. In a method, this refers to the object that calls the method.
*/

const obj = {
  myVar: "foo",
  myFunc: () => this.myVar,
};
console.log({ result: obj.myFunc() });
// -> { result: undefined }

const obj2 = {
  myVar: "foo",
  myFunc: function () {
    return this.myVar;
  },
};
console.log({ result2: obj2.myFunc() });
// -> { result: 'foo' }

const taskScheduler = {
  taskName: "Database Backup",
  startTask: function () {
    console.log("Starting task:", this.taskName);
    setTimeout(function () {
      console.log("Executing task:", this.taskName); // Problem with `this` here, because it is not inherited from the surrounding context
    }, 1000);
  },
};
taskScheduler.startTask();
// -> 'Starting task:' 'Database Backup'
// -> 'Executing task:' undefined

const taskScheduler2 = {
  taskName: "Database Backup",
  startTask: function () {
    console.log("Starting task:", this.taskName);
    setTimeout(() => {
      console.log("Executing task:", this.taskName); // Arrow function inherits `this` from surrounding context (in this case, the startTask method)
    }, 1000);
  },
};
taskScheduler2.startTask();
// -> Starting task: Database Backup
// -> Executing task: Database Backup


