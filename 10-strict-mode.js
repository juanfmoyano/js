/*
	[Strict Mode]

	Note: Sometimes you'll see the default, non-strict mode referred to as "sloppy mode" (not official term)
	Strict mode isn't just a subset, it intentionally has different semantics from normal code.
	Browsers not supporting strict mode will run strict mode code with different behavior from browsers that do, so don't rely on strict mode without feature-testing for support for the relevant aspects of strict mode.
	Strict mode code and non-strict mode code can coexist, so scripts can opt into strict mode incrementally.
	Strict mode makes several changes to normal JavaScript semantics:
	- Eliminates some JavaScript silent errors by changing them to throw errors
	- Fixes mistakes that make it difficult for JavaScript engines to perform optimizations: strict mode code can sometimes be made to run faster than identical code that's not strict mode
	- Prohibits some syntax likely to be defined in future versions of ECMAScript
*/

/*
	Invoking strict mode
	Strict mode applies to entire scripts or to individual functions. It doesn't apply to block statements enclosed in {} braces; attempting to apply it to such contexts does nothing.
	eval code, event handler attributes, strings passed to setTimeout() and related functions are either function bodies or entire scripts, and invoking strikct mode in them works as expected.
*/

// 1. Strict mode for scripts
"use strict";
const v = "Hi!  I'm a strict mode script!";

// 2. Strict mode for functions: using strict in functions with rest, default or destructuring parameters is a syntax error
function strict() {
  "use strict";
  function nested() {
    return "And so am I!";
  }
  return "Hi!  I'm a strict mode function! " + nested();
}

function notStrict() {
  return "I'm not strict.";
}

// 3. Strict mode for modules: entire contents of JavaScript modules are automatically in strict mode, with no statement needed to initiate it
function myStrictFunction() {
  // because this is a module, it's already in strict mode
}
export default myStrictFunction;

// 4. Strict mode for classes: all partes of a class's body are strict mode code, including both class declarations and class expressions.
class C1 {
  // All code here is evaluated in strict mode
  test() {
    delete Object.prototype;
  }
}
new C1().test(); // TypeError, because test() is in strict mode

const C2 = class {
  // All code here is evaluated in strict mode
};

// Code here may not be in strict mode
delete Object.prototype; // Will not throw error

/*
	Changes in strict mode
	Strict mode changes both syntax and runtime behavior. Changes generally fall into these categories:
	- changes converting mistakes into errors (as syntax errors or at runtime): changes some previously accepted mistakes into errors, because sometimes JavaScript gives operations which should be errors non-error semantics
	- changes simplifying how variable references are resolved: strict mode simplifies how variables are resolved, which can make code easier to read and understand, and reduces the likelihood of the same variable name referring to different variables
	- changes simplifying eval and arguments
	- changes making it easier to write "secure" JavaScript
	- changes anticipating future ECMAScript evolution
*/

// 1. Changes converting mistakes into errors

/* 
	Assigning to undeclared variables: makes it impossible to accidentally create global variables. 

	- In Strict mode, mistyped variable names are silently added to the global object. 
	- In Non Strict mode, this would throw a ReferenceError. 
*/
("use strict");
let mistypeVariable;
mistypeVarible = 17; // Assuming no global variable mistypeVarible exists this line throws a ReferenceError due to the misspelling of "mistypeVariable" (lack of an "a")

/*
	Failing to assign to object properties

	- Strict mode makes assignments which would otherwise silently fail to throw an error. There are three cases of failure to assign that are turned into errors by strict mode:
		1. Assignment to a non-writable property
		2. Assignment to a getter-only property
		3. Assignment to a new property on a non-extensible object
*/

("use strict");
// Assignment to a non-writable global
undefined = 5; // TypeError
Infinity = 5; // TypeError

// Assignment to a non-writable property
const obj1 = {};
Object.defineProperty(obj1, "x", { value: 42, writable: false });
obj1.x = 9; // TypeError

// Assignment to a getter-only property
const obj2 = {
  get x() {
    return 17;
  },
};
obj2.x = 5; // TypeError

// Assignment to a new property on a non-extensible object
const fixed = {};
Object.preventExtensions(fixed);
fixed.newProp = "ohai"; // TypeError

/*
	Failing to delete object properties

	Attempts to delete a non-configurable or otherwise undeletable property throw in strict mode
	Also forbids deleting plain names, is a syntax error. If the name is a configurable global property, prefix it with globalThis to delete it.
*/

("use strict");
delete Object.prototype; // TypeError
delete [].length; // TypeError

var x;
delete x; // syntax error

delete globalThis.x;

/*
	Duplicate parameter names

	Strict mode requires that function parameters names be unique
	Non-strict mode allows duplicate parameter names, the last duplicated argument hides previous identically-named arguments but remain accessible via arguments (arguments[i] refers to the ith argument)
*/

function sum(a, a, c) {
  // syntax error
  "use strict";
  return a + a + c; // wrong if this code ran
}

/*
	Legacy octal literals

	Strict mode forbids a 0-prefixed octal literal
	In Non Strict mode, a number beginning with 0 is considered octal if it is followed by a sequence of octal digits

	The standardized way to denote octal literals is via the 0o prefix
*/
("use strict");
const sum =
  015 + // syntax error
  197 +
  142;

const sumWithOctal = 0o10 + 8;
console.log(sumWithOctal); // 16

/*
	Setting properties on primitive values

	Strict mode forbids setting properties on primitive values. Accessing a property on a primitive value implicitly creates a wrapper object that's unobservable
	In Non Strict mode, setting properties is ignored 
*/

("use strict");

false.true = ""; // TypeError
(14).sailing = "home"; // TypeError
"with".you = "far away"; // TypeError

/*
	Duplicate property names

	Duplicate property names used to be considered a SyntaxError in strict mode. With the introduction of computed property names, making duplication possible at runtime, this restriction was removed in ES2015.
*/
("use strict");
const o = { p: 1, p: 2 }; // syntax error prior to ECMAScript 2015

// 2. Changes simplifying variable use

/*
	Removal of the with statement

	Strict mode prohibits with statements. The problem of 'with' is that any name inside the block might map either to a property of the object passed to it, or to a variable in surrounding (or even global) scope, at runtime (impossible to know which beforehand).
	Strict mode makes 'with' a syntax error, so there's no chance for a name in a 'with' to refer to an unknown location at runtime
*/
("use strict");
const x = 17;
with (obj) {
  // Syntax error
  // If this weren't strict mode, would this be const x, or
  // would it instead be obj.x? It's impossible in general
  // to say without running the code, so the name can't be
  // optimized.
  x;
}

/*
	Non-leaking eval

	In Strict mode, eval does not introduce new variables into the surrounding scope.
	In Non Strict mode, eval("var x;") introduces a variable x into the surrounding function or the global scope. This means that, in Non Strict mode, the eval statement can modify variables in the surrounding scope.
*/
var x = 17;
var evalX = eval("'use strict'; var x = 42; x;");
console.assert(x === 17); // -> true
console.assert(evalX === 42); // -> true

// Making eval and arguments simpler
// Strict mode makes arguments and eval less bizarrely magical. Both involve a considerable amount of magical behavior in sloppy mode: eval to add or remove bindings and to change binding values, and arguments syncing named arguments with its indexed properties. Strict mode makes great strides toward treating eval and arguments as keywords.

// Preventing binding or assigning eval and arguments
("use strict");
eval = 17;
arguments++;
++eval;
const obj = { set p(arguments) {} };
let eval;
try {
} catch (arguments) {}
function x(eval) {}
function arguments() {}
const y = function eval() {};
const f = new Function("arguments", "'use strict'; return 17;");

// No syncing between parameters and arguments indices
function f(a) {
  "use strict";
  a = 42;
  return [a, arguments[0]];
}
const pair = f(17);
console.assert(pair[0] === 42);
console.assert(pair[1] === 17);

// "Securing" JavaScript
// Strict mode makes it easier to write "secure" JavaScript. Some websites now provide ways for users to write JavaScript which will be run by the website on behalf of other users. JavaScript in browsers can access the user's private information, so such JavaScript must be partially transformed before it is run, to censor access to forbidden functionality. JavaScript's flexibility makes it effectively impossible to do this without many runtime checks. Certain language functions are so pervasive that performing runtime checks has a considerable performance cost. A few strict mode tweaks, plus requiring that user-submitted JavaScript be strict mode code and that it be invoked in a certain manner, substantially reduce the need for those runtime checks.

// No this substitution
("use strict");
function fun() {
  return this;
}
console.assert(fun() === undefined);
console.assert(fun.call(2) === 2);
console.assert(fun.apply(null) === null);
console.assert(fun.call(undefined) === undefined);
console.assert(fun.bind(true)() === true);

// Removal of stack-walking properties
function restricted() {
  "use strict";
  restricted.caller; // throws a TypeError
  restricted.arguments; // throws a TypeError
}
function privilegedInvoker() {
  return restricted();
}
privilegedInvoker();

// Similarly, arguments.callee is no longer supported. In sloppy mode, arguments.callee refers to the enclosing function. This use case is weak: name the enclosing function! Moreover, arguments.callee substantially hinders optimizations like inlining functions, because it must be made possible to provide a reference to the un-inlined function if arguments.callee is accessed. arguments.callee for strict mode functions is a non-deletable property which throws an error when set or retrieved:
("use strict");
const f = function () {
  return arguments.callee;
};
f(); // throws a TypeError

// Future-proofing JavaScript
// Extra reserved words
// Reserved words are identifiers that can't be used as variable names. Strict mode reserves some more names than sloppy mode, some of which are already used in the language, and some of which are reserved for the future to make future syntax extensions easier to implement.

// implements
// interface
// let
// package
// private
// protected
// public
// static
// yield
