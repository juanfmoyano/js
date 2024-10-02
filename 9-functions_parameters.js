
/*
	Function arity: The arity of a function is the number of arguments it expects, which is different from the number of parameters it has
	Function arguments: local variable created every time function is called. It points to an array-like object that contains the arguments passed to the function
*/

function functionExample(a, b, c) {
  console.log({ arguments: arguments, arity: functionExample.length });
  return a + b + c;
}
console.log("Arity outside the function", functionExample.length); // -> Arity outside the function 3
functionExample(1, 2, 3); // -> {arguments: {0: 1, 1: 2, 2: 3}, arity: 3}
functionExample(1, 2, 3, 4); // -> {arguments: {0: 1, 1: 2, 2: 3, 3: 4}, arity: 3}
functionExample(1, 2, 3, "a", ["hello"], { name: "Alice" }); // -> {arguments: {0: 1, 1: 2, 2: 3, 3: 'a', 4: ['hello'], 5: {name: 'Alice'}}, arity: 3}

function functionSumExample(a, b) {
  if (arguments.length === 3) return a + b + arguments[2];
  return a + b;
}
functionSumExample(1, 2); // -> 3
functionSumExample(1, 2, 3); // -> 6
functionSumExample(1, 2, 3, 4); // -> 3

function functionSumExample2(a, b) {
  if (arguments.length === 3) return arguments[0] + arguments[1] + arguments[2];
  return arguments[0] + arguments[1];
}
functionSumExample2(1, 2); // -> 3
functionSumExample2(1, 2, 3); // -> 6
functionSumExample2(1, 2, 3, 4); // -> 3

/*
	Exotic arguments object
	- According to ECMAScript spec: when a function created using function keyword is in non-strict mode, and doesn't have any modern ES6-style parameters
	(rest parameters, default parameters, or destructured parameters), the arguments object is created and its called exotic argument objects.

	When a function is invoked, all the parameters, that have been provided with arguments, are linked with corresponding entries in the arguments object, if the object is an exotic arguments object.
	Linkages are only created one time, and that is while iterating over the arguments object. After that, no linkages can be made.

	arguments.callee: The arguments.callee property contains the currently executing function. This is useful for anonymous functions. Is available in non-strict mode.
*/

function functionExoticArguments(a) {
  a = "new";
  console.log(a);
  console.log(arguments[0]);
}
functionExoticArguments("old"); // -> new, new

function functionExoticArguments2(a) {
  arguments[0] = "new";
  console.log(a);
  console.log(arguments[0]);
}
functionExoticArguments2("old"); // -> new, new

function functionArguments(a, b) {
  b = "new";
  console.log(b);
  console.log(arguments[1]);
}
functionArguments("old"); // -> new, undefined

const fibs = function (n) {
	if (n <= 1) return 1;
	return arguments.callee(n - 1) + arguments.callee(n - 2);
};
console.log(fibs(7)); // -> 21

/*
	Ordinary arguments object
	Strict mode in JavaScript was created to enforce better programming practices and meaningful internal behavior. Thus, the idea of exotic arguments objects becomes useless when we have a strict function.
	A function running in strict mode, or using modern ES6-style parameters, creates an arguments object referred to, by the ECMAScript spec, as an ordinary arguments object.

	With an ordinary arguments object, there is simply no concept of linkage between parameters and corresponding entries in arguments. Changing one won't change the other.
	Apart from this difference, it's also invalid to access the callee property of arguments when it is ordinary.
	arguments.callee is one of these bad coding practices. It's long, kind of ugly in code, and slower than accessing the respective function via its name. Hence, it is disallowed in strict mode. 
*/

function functionOrdinaryArguments(a) {
  a = "new";
  console.log(a);
  console.log(arguments[0]);
}
functionOrdinaryArguments("old"); // -> new, old

/*
	Exotic arguments object vs Ordinary arguments object
	1. Linkage:
		Exotic: Parameters and arguments are linked.
		Ordinary: Parameters and arguments are not linked.
	
	2. Strict Mode:
		Exotic: Applies in non-strict mode.
		Ordinary: Applies in strict mode or with ES6-style parameters.
	
	3. Callee Property:
		Exotic: The arguments.callee property is available.
		Ordinary: The arguments.callee property is not available (throws an error if accessed).
*/


/*
	Rest parameters
	A rest parameter encapsulates all the remaining arguments after the arguments for all non-rest parameters in the form of an array.
	- It's denoted by preceding the parameter name with three dots (...)
	- There can only be one rest parameter in a function
	- The rest parameter must be the last parameter in the function definition
	- Benefit over using the arguments object: rest parameters are real arrays, and they have all the array methods available to them
	- If there are no arguments, the rest parameter will be an empty array
	- No support on older browsers
*/

function showStudentNotes(studentName, ...notes) {
	console.log('Student name:', studentName);
	console.log('Notes:', notes.join(', '));
	console.log('Number of notes:', notes.length);
	console.log('Average:', notes.reduce((acc, note) => acc + note, 0) / notes.length);
	console.log('----------------');
}

showStudentNotes('Alice', 10, 9, 8, 7);
// -> Student name: Alice
// -> Notes: 10, 9, 8, 7
// -> Number of notes: 4
// -> Average: 8.5
// -> ----------------
showStudentNotes('Bob', 9, 8, 7);
// -> Student name: Bob
// -> Notes: 9, 8, 7
// -> Number of notes: 3
// -> Average: 8
// -> ----------------

function showLangInfo(name, yearReleased, ...influencingLangs) {
	console.log(name + ' was first released in ' + yearReleased + '.');
	console.log('It was influenced by:');
	console.log(' - ' + influencingLangs.join('\n - '));
}

showLangInfo('JavaScript', 1995, 'Python', 'Java', 'Scheme');
// -> JavaScript was first released in 1995.
// -> It was influenced by:
// ->  - Python
// ->  - Java
// ->  - Scheme
showLangInfo('ABC', 1987);
// -> ABC was first released in 1987.
// -> It was influenced by:
//-> -

function functionRestParams1(...rest1, ...rest2) {
	console.log(rest1, rest2);
}

function functionRestParams2(...rest1, a) {
	console.log(rest1, a);
}

/*
	Spread operator: converts an iterable sequence (e.g. array, string, object) into individual elements
*/

const nums1 = [1, 50, 9, -4, -50, 0, 0, 10, 15, 13];
const min1 = Math.min(nums1);
console.log('The minimum number is:', min1); // -> NaN

const min2 = Math.min(...nums1);
console.log('The minimum number is:', min2); // -> -50

/*
	Default-valued parameters
	- If a parameter is not provided, it will take the value of undefined
	- You can set a default value for a parameter by using the assignment operator (=)
	- Default values are evaluated at the time of function call, not at the time of function definition
	- Default values can be expressions or function calls
	- Default values can refer to other parameters

	Syntax
	function functionName(param1 = defaultValue1, param2 = defaultValue2, ..., paramN = defaultValueN) {
		// code to be executed
	}
*/

function greeting(text = 'Hello', name = 'Alice') {
	console.log(text + ', ' + name + '!');
}
greeting(); // -> Hello, Alice!
greeting('Hi', 'Bob'); // -> Hi, Bob!

function sum(a, b = a) {
	return a + b;
}
sum(3, 10); // -> 13
sum(3); // -> 6


