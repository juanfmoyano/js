/*
	Closures: a function along with its lexical environment is collectively called a closure.
	By definition all functions in JavaScript are closures. A closure is a function that has access to its outer function scope even after the outer function has returned.

	* Lexical environment: the term 'lexical' simply means 'source code' or in other words, 'relating to the text of a program'.
	- Lexical environment consists of the environment record and a reference to the outer lexical environment.

	Javascript is lexically-scoped (or statically-scoped) language. Lexical scoping means that the scope of a variable is defined by its position in the source code.
	The JavaScript compiler reads the program's source code and determines the environment accessible to a given function based on its definition, when compiling it.
	What that means is the way that variable look-up or scope look-up happens, is where the functions are defined, not where they are run -> When called, the function body sees the environment in which it was created, not the environment in which it is called.

  Another closure definition: Being able to reference a specific instance of a local binding in a enclosing scope, since everytime a function is called, NEW INSTANCES of these bindings are created.
	This provides isolation between functions, each function call acts in its own little word (local environment), and the bindings are not shared between different calls.
	* Lexical scoping: the scope of a variable is determined by its position within the source code. It determines which variables are accessible in a given scope based on the code's structure.
*/

const a = "static";

function f1() {
  console.log(a);
}
function f2() {
  const a = "dynamic";
  f1();
}
f2(); // -> static

// 1. First the local scope of f1 is searched for the name a. Trivially, because this local environment is empty, no such name is found. Consequently, searching moves to the lexical environment of f1.
// 2. Searching in the lexical environment goes orderly as well. That is, first enclosing the function's first enclosing environment is searched, then the outer enclosing scope, and so on until eventually the global environment is reached, which has no further enclosing environment.
// 3. The enclosing lexical environment of f1 is simply the global scope, hence searching is conducted here for the name a. Since a match is found, bound to the value 20, the name a in console.log(a) is resolved with the value 20.

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
// Each scope can "look out" into the scope around, except when multiple bindings have the same name, in which case the last one wins

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

/*
	Higher-order functions: a function that takes in a function as argument and/or returns back a function
*/

function elementFromSequence(n, a, d) {
  return a + n * d;
}
elementFromSequence(0, 1, 2); // -> 1
elementFromSequence(1, 1, 2); // -> 3
elementFromSequence(2, 1, 2); // -> 5

function defineSequence(a, d) {
  return function (n) {
    return a + n * d;
  };
}
const seq = defineSequence(1, 2);
seq(0); // -> 1
seq(1); // -> 3
seq(2); // -> 5

const seq2 = defineSequence(2, 2);
seq2(0); // -> 2
seq2(1); // -> 4
seq2(2); // -> 6
