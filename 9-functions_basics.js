/*
	[Functions]
	- Functions are a way to group code together to perform a specific task.
	- Functions are similar to procedures- a set of statements that perform a task or calculates a value, but for a procedure to qualify as a function, it should take some input and return an output where there is some obvious relationship between the input and the output.

*/

/*
	Function Declaration
	A function definition (also called function declaration or function statement) consists of the function keyword, followed by:
		- The name of the function.
		- A list of parameters to the function, enclosed in parentheses and separated by commas.
		- The JavaScript statements that define the function, enclosed in curly brackets, { }.

	Syntax
	function functionName(param1, param2, ..., paramN) {
		// code to be executed
	}
	functionName(); // function call
	functionName; // function reference, we refer to the function object but not invoke it
*/

function square(number) {
  return number * number;
}
console.log(square(5)); // -> 25

/*
	Return Statement
	- The return statement stops the execution of a function and returns a value from that function.
	- A return statement can return a value to the function caller.
	- A function can have many return statements.
	- If the value is omitted, undefined is returned instead.
*/

function functionWithMultipleReturns(number) {
  if (number < 0) return "Number is negative";
  if (number === 0) return "Number is zero";
  return "Number is positive";
}
console.log(functionWithMultipleReturns(-5)); // -> Number is negative
console.log(functionWithMultipleReturns(0)); // -> Number is zero
console.log(functionWithMultipleReturns(5)); // -> Number is positive

function functionWithoutReturn() {
  console.log("This function does not return anything");
}
console.log(functionWithoutReturn()); // -> logs and return undefined

/*
	Passing Arguments
	- When you pass a value to a function, you pass a parameter
	- When you define a function, you define a parameter
	- Arguments are the values that the function receives when it is invoked
	- Parameters are the variables that are used in the function declaration/definition
	- Objects and arrays are passed by reference, while strings, numbers, and booleans are passed by value
*/

const obj1 = { name: "Alice" };
function functionWithObjectAsParameter(obj) {
  obj.name = "John";
}
console.log(obj1); // -> { name: 'Alice' }
functionWithObjectAsParameter(obj1);
console.log(obj1); // -> { name: 'John' }

const array1 = [1, 2, 3];
function functionWithArrayAsParameter(array) {
  array.push(4);
}
console.log(array1); // -> [1, 2, 3]
functionWithArrayAsParameter(array1);
console.log(array1); // -> [1, 2, 3, 4]

function myParameterFunction(parameter) {
  console.log("Hello " + parameter);
}

/*
	Functions as arguments
	- Functions can be passed as arguments to other functions
	- Functions can be used as arguments to other functions
	- Functions can be used as return values from other functions
	- A function passed to another function as argument often is called a callback function or simple callback
*/
function executeFunctionWithArguments(fnToExecute) {
  console.log("Executing function with arguments");
  fnToExecute(parameter);
}
executeFunctionWithArguments(myParameterFunction, "World"); // -> Executing function with arguments, Hello World

function getLogger() {
  return function (val) {
    console.log("Processing value: " + val);
  };
}
const logger = getLogger();
logger("Hello"); // -> Processing value: Hello

/*
	Function expressions
	A function expressions refers to a function definition that exists as an expression and not as a standalone statement/function declaration.
	- A function expression is similar to and has the same syntax as a function declaration
	- The main difference between a function expression and a function declaration is the function name, which can be omitted in function expressions to create anonymous functions
	- Function expressions can be used as IIFE (Immediately Invoked Function Expression) which runs as soon as it is defined
		- This is useful when you want to avoid polluting the global scope
	- Function expressions can be used as arguments to other functions
	- Function expressions can be used as return values from other functions
	- Function expressions with name can be used to refer to the function inside the function itself or in the stack trace but not outside the function

	Syntax
	const identifierName = function[functionName](param1, param2, ..., paramN) {
		// code to be executed
	}
*/

const squareWithFunctionExpression = function (number) {
  // Anonymous function expression
  return number * number;
};
console.log(squareWithFunctionExpression(10)); // -> 100

const squareWithFunctionExpressionNamed = function functionExpressionName(
  number
) {
  return number * number;
};
console.log(squareWithFunctionExpressionNamed(6)); // -> 36
console.log(functionExpressionName(6)); // -> Uncaught ReferenceError: functionExpressionName is not defined

const factorialWithFunctionExpressionName = function factorial(number) {
  if (number === 0) return 1;
  return number * factorial(number - 1); // It's okay to refer to the function name inside the function
};
console.log(factorialWithFunctionExpressionName(5)); // -> 120

const squareWithFunctionExpressionIIFE = (function (number) {
  return number * number;
})(5);
console.log(squareWithFunctionExpressionIIFE); // -> 25

const utils = [
  function (a, b) {
    return a + b;
  },
  function (a, b) {
    return a - b;
  },
];
console.log(utils[0](5, 3)); // -> 8
console.log(utils[1](5, 3)); // -> 2

/*
	Methods: Functions that are stored as object properties are called methods
	- Methods are functions that are stored as object properties
	- Methods are functions that belong to objects
	- Methods are defined as function expressions
	- Methods are called on objects
*/

const utilsObject = {
  add: function (a, b) {
    return a + b;
  },
  subtract: function (a, b) {
    return a - b;
  },
};
console.log(utilsObject.add(5, 3)); // -> 8
console.log(utilsObject.subtract(5, 3)); // -> 2

/*
	Function hoisting
	- Function declarations are hoisted to the top of the enclosing function or global scope
	- Function expressions are not hoisted
	- Function declarations inside block statements are hoisted to the top of the function (may exists an incompatible behavior in some browsers)
		- Most browsers don't hoist the function declaration, but the name of the function is made available as undefined identifier in the respective scope
		- Safari, hoists the complete declaration just like any other function (doesn't care the block statement)
		- Microsoft Edge, doesn't hoist anything, not even the name of the function
*/

console.log(hoistedFunction()); // -> "I am hoisted"
function hoistedFunction() {
  return "I am hoisted";
}

console.log(notHoistedFunction()); // -> Uncaught ReferenceError: notHoistedFunction is not defined/ Cannot access 'notHoistedFunction' before initialization
const notHoistedFunction = function () {
  return "I am not hoisted";
};

const userIsNew = false;

if (userIsNew) {
  function greet() {
    console.log("Hello!");
  }
}


/*
	this keyword
	- The JavaScript this keyword refers to the object it belongs to
	- It has different values depending on where it is used
	- In a method, this refers to the owner object
	- Alone, this refers to the global object
	- In a function, this refers to the global object
	- In an event, this refers to the element that received the event
	- Methods like call(), and apply() can refer this to any object
*/

const o1 = {
	x1: 10,
	f: function() { console.log(this.x1); }
};
const x1 = 20;
o1.f(); // -> 10, since is called on o1 object refers to o1 x1 property


var x = 10;
var f2 = f;
var obj = {
   x: 20,
   f: f2
}
console.log({ result1: f()}); // -> 10
console.log({ result2: f2()}); // -> 10
console.log({ result3: obj.f()}); // -> 20
function f() {
   return this.x;
}