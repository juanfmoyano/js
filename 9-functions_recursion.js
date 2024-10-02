/*
	[Recursion]
	In perspective of Javascript: A recursion is to call a function from within itself
	Recursion is a technique for iterating over an operation by having a function call itself repeatedly until it arrives at a result.
		- The base case is the condition that stops the recursion. It is the simplest scenario of the problem and doesn't require calling the function again.
		- The recursive case is the condition where the function calls itself with a modified input with a simpler version of the problem.
*/

function factorial(n) {
	if (n === 0) {
		return 1;
	}
	return n * factorial(n - 1);
}
factorial(0) // -> 1
factorial(1) // -> 1
factorial(3) // -> 6
factorial(4) //-> 24
factorial(10) // ->3628800

function fibonacci(n) {
	if (n === 0) {
		return 0;
	}
	if (n === 1) {
		return 1;
	}
	return fibonacci(n - 1) + fibonacci(n - 2);
}
fibonacci(0) // -> 0
fibonacci(1) // -> 1
fibonacci(2) // -> 1
fibonacci(3) // -> 2
fibonacci(4) // -> 3
fibonacci(5) // -> 5
fibonacci(6) // -> 8
fibonacci(7) // -> 13
fibonacci(8) // -> 21
fibonacci(9) // -> 34

/*
	How recursion works?

	1. Parsing a function in Javascript
	When reading a JavaScript program, the moment a function is encountered, its body is allocated space in memory after being compiled. 
	'Compiled' means that the body is converted into a set of precise machine instructions, so that each time the function is called, there is no need to convert the body to machin code again.
	Once this allotment of space memory is done, step two is to take the address of the location where this code dwells in memory and assign it to the function name..
	Hence, after alloting space to a function f()'s body, f would internally point to some memory location where the body of f() is stored..
	In recursive function (which contains a call to itself), there is absolutely nothing special to be done by the engine to parse and consequently compile it.
	The recursive call inside the function simply refers to the address where the function's code sits in memory. 

	2. Frames and the call stack
	When a function is called, a new frame is created in the call stack. This frame contains all the variables and arguments of the function.
	When a function calls itself, a new frame is created in the call stack, and so on. This is why recursion can be dangerous, as it can lead to a stack overflow if the recursion is too deep.
	When the base case is reached, the function returns a value and the frame is popped off the call stack.
*/

// Problem: in typical Javascript implementations, it's about three times slower thatn a version using a for loop.
// Running through a simple loop is generally cheaper than calling a function multiple times
// The dilemma of speed versus elegance is an interesting thing.
// In the case of the power function, an inelegant (looping) version is still fairly simple and easy to read.
// It doesn’t make much sense to replace it with a recursive function.
// Often, though, a program deals with such complex concepts that giving up some efficiency in order to make the program more straightforward is helpful.
// Recursion is not always just an inefficient alternative to looping. Some problems really are easier to solve with recursion than with loops.
// Most often these are problems that require exploring or processing several “branches”, each of which might branch out again into even more branches.
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
