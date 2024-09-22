// Function: a function definition is a regular binding where the value of the binding is a function

const square = function (x) {
  return x * x;
};
console.log({ square: square(12) });
// { square: 144 }

const makeNoise = function () {
  // without parameters
  // By default returns undefined, produces a "side effect"
  console.log("Pling");
};
console.log({ makeNoise: makeNoise() });
// Pling
// { makeNoise: undefined }

const roundTo = function (n, step) {
  let remainder = n % step;
  return n - remainder + (remainder < step / 2 ? 0 : step);
};
console.log({ roundTo: roundTo(23, 10) });
// { roundTo: 20 }

const valueTest = function (value) {
  if (value > 10) {
    console.log("Value is greater than 10");
    return; // Automatically 'break' the function execution and returns undefined
  }
  console.log("Value is less than 10");
};
console.log({ valueTest: valueTest(12) });
// Value is greater than 10
// { valueTest: undefined }

// A return statement determines the value the function returns.
// When control comes across such a statement,
// it immediately jumps out of the current function and gives the returned value to the code that called the function

// Binding an scopes
// 1. Each binding has a SCOPE, which is the part of the program in which the binding is visible
// 2. Bindings defined outside any function, block or module are GLOBAL
// 3. Bindings created for function parameters or declared inside a function can be referenced only in that function, they are LOCAL bindings.
// Everytime a function is called, NEW INSTANCES of these bindings are created.
// This provides isolation between functions, each function call acts in its own little word (local environment)

let w = 10; // --> global
if (true) {
  const x = 10; // --> local to block
  let y = 20; // --> local to block
  var z = 30; // --> global
  console.log("Inside block", { w, x, y, z });
}
console.log("Outside block", { w });
console.log("Outside block", { z });
console.log("Outside block", { x, y });
// Inside block {w: 10, x: 10, y: 20, z: 30}
// Outside block {w: 10}
// Outside block {z: 30}
// ERROR: ReferenceError: x is not defined (line 10 in function eval) --> Same applies to y

// Bindings with let and const are local to the BLOCK in which they are declared
// Pre-2015 only functions created new-scopes, so bindings created with var are visible throughout the whole function in which they appear - or throughout the global scope

const halve = function (n) {
  console.log(n);
  return n / 2;
};
let n = 10;
console.log(halve(100));
console.log(n);
// 100 -> n parameter of halve function
// 50 -> return value of halve function
// 10 -> n global variable

// Each scope can "look out" into the scope around, except when multiple bindings have the same name, in which case the last one wins

const hummus = function (factor) {
  const ingredient = function (amount, unit, name) {
    // Blocks and functions can be created inside other blocks and function producing multiple degrees of locality
    let ingredientAmount = amount * factor;
    if (ingredientAmount > 1) {
      unit += "s";
    }
    console.log(`${ingredientAmount} ${unit} ${name}`);
  };
  ingredient(1, "can", "chickpeas");
  ingredient(0.25, "cup", "tahini");
  ingredient(0.25, "cup", "lemon juice");
  ingredient(1, "clove", "garlic");
  ingredient(2, "tablespoon", "olive oil");
  ingredient(0.5, "teaspoon", "cumin");
};
hummus(3);
// 3 cans chickpeas
// 0.75 cup tahini
// 0.75 cup lemon juice
// 3 cloves garlic
// 6 tablespoons olive oil
// 1.5 teaspoons cumin

// Code inside ingredient function can see the factor binding from the outer function
// unit or ingredientAmount are not visible in the outer function
// The set of bindings visible inside a block is determined by the place of that block in the program
// Each local scope can also see all the local scopes that containt it, and all scopes can see the global scope
// This approach to binding visibility is called LEXICAL SCOPING

// Arrow functions
const roundToArrowFn = (n, step) => {
  let remainder = n % step;
  return n - remainder + (remainder < step / 2 ? 0 : step);
};
const squareArrowFn1 = (x) => {
  return x * x;
};
const squareArrowFn2 = (x) => x * x;
const horn = () => {
  console.log("Toot");
};

// Arrow functions - this binding or lexical this

// Arrow functions do not have their own this. Instead, they inherit this from the lexical scope (i.e., the surrounding context where the arrow function is defined).
// This means that arrow functions "capture" the this value from the outer function or global context.

// Regular functions define their own this based on how they are called. In a method, this refers to the object that calls the method.
// In the global context or if a function is called without a specific object, this refers to undefined (in strict mode) or the global object (window in browsers).

const obj = {
  myVar: 'foo',  
  myFunc: () => this.myVar
}
console.log({ result: obj.myFunc()});
// { result: undefined }

const obj2 = {
  myVar: 'foo',  
  myFunc: function() {
    return this.myVar;
  }
}
console.log({ result2: obj2.myFunc()});
// { result: 'foo' }


const taskScheduler = {
  taskName: "Database Backup",
  startTask: function () {
    console.log("Starting task:", this.taskName);
    setTimeout(function () {
      console.log("Executing task:", this.taskName); // Problem with `this` here
    }, 1000);
  },
};
taskScheduler.startTask();
// 'Starting task:' 'Database Backup'
// 'Executing task:' undefined

const taskScheduler2 = {
  taskName: "Database Backup",
  startTask: function () {
    console.log("Starting task:", this.taskName);
    setTimeout(() => {
      console.log("Executing task:", this.taskName); // Arrow function inherits `this` from surrounding context
    }, 1000);
  },
};
taskScheduler2.startTask();
// Starting task: Database Backup
// Executing task: Database Backup

// Optional arguments

const squareOptional = (x) => x * x;
console.log(squareOptional(5, true, "foo")); // It ignores extra params and computes with the first one
// 25

// If you pass too many arguments, the extra ones are ignored
// If you pass too few arguments, the missing ones are assigned undefined -> Downsite possible you accidentally pass the wrong number of arguments

const minus = (a, b) => a - b;
console.log(minus(10));
// NaN
console.log(minus(10, 5));
// 5

const minusWithCheck = (a, b) => {
  if (b === undefined) {
    return -a;
  }
  return a - b;
};
console.log(minusWithCheck(10));
// -10
console.log(minusWithCheck(10, 5));
// 5

// Default values
const minusWithDefault = (a, b = 0) => a - b;
console.log(minusWithDefault(10));
// 10

// Closure
// Being able to reference a specific instance of a local binding in a enclosing scope
// A function that references bindings from local scopes around it is called a closure. Makes possible to use function values in creatives ways
function wrapValue(n) {
  let local = n;
  return () => local;
}

let wrap1 = wrapValue(1);
let wrap2 = wrapValue(2);
console.log(wrap1());
// → 1
console.log(wrap2());
// → 2

function multiplier(factor) {
  return (number) => number * factor;
}

let twice = multiplier(2);
// Twice is now a function that returns number * 2 (since 2 was instantiated as factor)
console.log(twice(5));
// → 10

// When called, the function body sees the environment in which it was created, not the environment in which it is called.

// Recursion
// It is perfectly okay for a function to call itself, as long as it doesn't do it so ofthen that it overflows the stack
// A function that calls itself is called a recursive function

function power(base, exponent) {
  console.log({ base, exponent });
  if (exponent === 0) {
    return 1;
  }
  return base * power(base, exponent - 1);
}

console.log(power(2, 3));
// { base: 2, exponent: 3 }
// { base: 2, exponent: 2 }
// { base: 2, exponent: 1 }
// { base: 2, exponent: 0 }
// 8

// Problem: in typical Javascript implementations, it's about three times slower thatn a version using a for loop.
// Running through a simple loop is generally cheaper than calling a function multiple times
// The dilemma of speed versus elegance is an interesting thing.
// In the case of the power function, an inelegant (looping) version is still fairly simple and easy to read.
// It doesn’t make much sense to replace it with a recursive function.
// Often, though, a program deals with such complex concepts that giving up some efficiency in order to make the program more straightforward is helpful.
// Recursion is not always just an inefficient alternative to looping. Some problems really are easier to solve with recursion than with loops.
// Most often these are problems that require exploring or processing several “branches”, each of which might branch out again into even more branches.

// Example: starting from 1 and repeatedly either adding 5 or multiplying by 3, an infinite set of numbers can be produces.
// How to write a function that, given a number, tries to find a sequence of such additions and umltiplications that produces that numbers?
// 13: could be reached by first multiplying by 3 and then adding 5 twice

function find(current, history, target) {
	console.log({ current, history, target})
  if (current == target) {
    return history;
  } else if (current > target) {
    return null;
  } else {
    return (
      find(current + 5, `(${history} + 5)`, target) ?? // First tries to add 5 to find a path to the target, if not, tries to multiply by 3
      find(current * 3, `(${history} * 3)`, target)
    );
  }
}
function findSolution(target) {
  return find(1, "1", target);
}

console.log(findSolution(13));
// [Level 0] {current: 1, history: "1", target: 13} 
	// [Level 1] {current: 6, history: "(1 + 5)", target: 13} 
		// [Level 2] {current: 11, history: "((1 + 5) + 5)", target: 13}
			// [Level 3] {current: 16, history: "(((1 + 5) + 5) + 5)", target: 13} -> returns null
			// [Level 3] {current: 33, history: "(((1 + 5) + 5) * 3)", target: 13} -> returns null
		// [Level 2] {current: 18, history: "((1 + 5) * 3)", target: 13} -> returns null
	// [Level 1]{current: 3, history: "(1 * 3)", target: 13} 
		// [Level 2] {current: 8, history: "((1 * 3) + 5)", target: 13} 
			// [Level 3] {current: 13, history: "(((1 * 3) + 5) + 5)", target: 13}  -> returns history
// (((1 * 3) + 5) + 5)

console.log(findSolution(15));
// [Level 0] {current: 1, history: "1", target: 15}
	// [Level 1] {current: 6, history: "(1 + 5)", target: 15} 
		// [Level 2] {current: 11, history: "((1 + 5) + 5)", target: 15} 
			// [Level 3] {current: 16, history: "(((1 + 5) + 5) + 5)", target: 15} -> returns null
			// [Level 3] {current: 33, history: "(((1 + 5) + 5) * 3)", target: 15} -> returns null
		// [Level 2] {current: 18, history: "((1 + 5) * 3)", target: 15} -> returns null
	// [Level 1] {current: 3, history: "(1 * 3)", target: 15} 
		// [Level 2] {current: 8, history: "((1 * 3) + 5)", target: 15} 
			// [Level 3] {current: 13, history: "(((1 * 3) + 5) + 5)", target: 15} 
				// [Level 4] {current: 18, history: "((((1 * 3) + 5) + 5) + 5)", target: 15} -> returns null
				// [Level 4] {current: 39, history: "((((1 * 3) + 5) + 5) * 3)", target: 15} -> returns null
			// [Level 3] {current: 24, history: "(((1 * 3) + 5) * 3)", target: 15} -> returns null
		// [Level 2] {current: 9, history: "((1 * 3) * 3)", target: 15} 
			// [Level 3] {current: 14, history: "(((1 * 3) * 3) + 5)", target: 15}
				// [Level 4] {current: 19, history: "((((1 * 3) * 3) + 5) + 5)", target: 15} -> returns null
				// [Level 4] {current: 42, history: "((((1 * 3) * 3) + 5) * 3)", target: 15} -> returns null
			// [Level 3] {current: 27, history: "(((1 * 3) * 3) * 3)", target: 15} -> returns null
// null

// Pure functions maybe? TBD