/*
	[JS Definition]

	High level definition: is a scripting or programming laguage that allows you to implement complex features. 
	Javascript is a lighweight interpreted programming language
	
	* Interpreted languages: the code is rune from top to bottom and the result of running the code is immediately returned. 
		You don't have to transform the code into a different form before run it.
	* Compiled languages: the code is transformed (compiled) into another form before they run by the computer.
	
	Commonly used for scripting dynamic web features, and it can also be transpiled or compiled in certain contexts (e.g., using TypeScript or Babel).
*/

/*
	[Variables]

	* Binding: generic word to represent all types of storing a value, complex data and even functions.
	They contain values but are not the values themselves, they act as containers.
	You can think of them being little carboard boxes where you can store things.

	Declaration: the process of creating a new binding.
	* let: declares re-assignable, blockscoped local variables, optionally initializing each to a value.
	* const: declares block-scoped local variables. The value of a constant can't be changed through reassignment using the assignment (=) operator, but if a constant is an object, its properties can be added, updated, or removed.
	* var: declares re-assignable, function-scoped or globally-scoped variables, optionally initializing each to a value.

	* environment: the collection of bindings and their values that exist at a given time
*/

let firstName = "John";
// let firstName = 'Jane'; [ERROR] SyntaxError: Identifier 'firstName' has already been declared.
firstName = "Joe";
firstName = "Jane";
console.log(firstName);
// -> Jane

let day;
console.log(day);
// -> undefined
day = "Monday";
console.log(day);
// -> Monday

const lastName = "Doe";
// lastName = "Doe Jr."; [ERROR] TypeError: Assignment to constant variable.
// const middleName; [ERROR] SyntaxError: Missing initializer in const declaration.
console.log(lastName);
// -> Doe

/*
	[Dynamic Typing]
	JavaScript is a "dynamically typed language", which means that, unlike some other languages, 
	you don't need to specify what data type a variable will contain (numbers, strings, arrays, etc.).
*/

let myNumber = "500";
console.log(myNumber, typeof myNumber);
// -> 500 string
myNumber = 500;
console.log(myNumber, typeof myNumber);
// -> 500 number

/*
	You can declare multiple variables at the same time
*/
let user = "John",
  age = 25,
  message = "Hello";

/*
	[Scope]
	* Block scope: Variables declared with let and const are block-scoped, meaning they are only accessible within the block (or statement) they are declared.
		A block is a set of statements enclosed in curly braces ({}). 
	* Function scope: Variables declared with var are function-scoped, meaning they are only accessible within the function they are declared.
		A function scope is created for each function, meaning that variables declared within a function are only accessible within that function.
	* Global Scope: When you declare a variable without var, let, or const in the global scope (i.e., not inside any function), JavaScript implicitly creates a global variable. 
		This means someVar will be a property of the global object (window in browsers or global in Node.js).
*/

/* 
	[use strict]

	For a long time, JavaScript evolved without compatibility issues. New features were added to the language while old functionality didn’t change.
	That had the benefit of never breaking existing code. But the downside was that any mistake or an imperfect decision made by JavaScript’s creators got stuck in the language forever.
	This was the case until 2009 when ECMAScript 5 (ES5) appeared. 
	It added new features to the language and modified some of the existing ones. To keep the old code working, most such modifications are off by default. You need to explicitly enable them with a special directive: "use strict".
	The directive looks like a string: "use strict" or 'use strict'. When it is located at the top of a script, the whole script works the “modern” way.

	Should we use it?
		When you use a developer console to run code, please note that it doesn’t use strict by default. Sometimes, when use strict makes a difference, you’ll get incorrect results.
		All modern browsers support running JavaScript in strict mode. So you can safely use it in your code.
		Modern JavaScript supports “classes” and “modules” – advanced language structures (we’ll surely get to them), that enable use strict automatically. So we don’t need to add the "use strict" directive, if we use them.
*/

/*
	[Implicit global variable]

	* Non-Strict Mode: In non-strict mode, this implicit global variable behavior is allowed. 
		This can lead to unintended side effects or conflicts if different parts of your code or other scripts inadvertently use the same variable name.
	*	Strict Mode: In strict mode ('use strict';), JavaScript does not allow implicit global variables. 
		If you attempt to assign a value to a variable without declaring it first in strict mode, it will throw a ReferenceError.
*/

someVar = "value"; // Creates a global variable in non-strict mode
someVar = "value2"; // Throws an error in strict-mode: ReferenceError: someVar is not defined

/*
	[Naming]
	1- The name must contain letters, digits, or the characters $ or _.
	2- The first character must not be a digit.
	3- Case matters: apple and APPLE ar two different variables
	4- Non-Latin letters are allowed but not recommended.
	5- Reserved names:
		a. Anywhere in JavaScript source.
			break
			case
			catch
			class
			const
			continue
			debugger
			default
			delete
			do
			else
			export
			extends
			false
			finally
			for
			function
			if
			import
			in
			instanceof
			new
			null
			return
			super
			switch
			this
			throw
			true
			try
			typeof
			var
			void
			while
			with

		b. The following are only reserved when they are found in strict mode code:
			let (also reserved in const, let, and class declarations)
			static
			yield (also reserved in generator function bodies)

		c. The following are only reserved when they are found in module code or async function bodies:
			await

		d. Future reserved words
	6- Future reserved words: The following are reserved as future keywords by the ECMAScript specification. They have no special functionality at present, but they might at some future time, so they cannot be used as identifiers.
		a. Always
			enum

		b. The following are only reserved when they are found in strict mode code:
			implements
			interface
			package
			private
			protected
			public

	7. Future reserved words in older standards
		a. The following are reserved as future keywords by older ECMAScript specifications (ECMAScript 1 till 3).
			abstract
			boolean
			byte
			char
			double
			final
			float
			goto
			int
			long
			native
			short
			synchronized
			throws
			transient
			volatile

	8. Identifiers with special meanings: A few identifiers have a special meaning in some contexts without being reserved words of any kind. They include:
		arguments (not a keyword, but cannot be declared as identifier in strict mode)
		as (import * as ns from "mod")
		async
		eval (not a keyword, but cannot be declared as identifier in strict mode)
		from (import x from "mod")
		get
		of
		set

*/

const $myName = "$myName";
const _myName = "_myName";
const fuzzylittleturtle = "fuzzylittleturtle";
const fuzzy_little_turtle = "fuzzy_little_turtle";
const FuzzyLittleTurtle = "FuzzyLittleTurtle";
const fuzzyLittleTurtle = "fuzzyLittleTurtle";
const FUZZY_LITTLE_TURTLE = "FUZZY_LITTLE_TURTLE";
const apple = "apple";
const APPLE = "APPLE";
// const if = 'test'; [ERROR] SyntaxError: Unexpected keyword 'if'.

/*
	[Hoisting]
	Refers to the behavior where variables and functions declarations are "moved" (or "hoisted") to the top of their scope (either the global scope or the function scope)

	The declarations of functions and variables are NOT physically moved to the top of the code.
	Instead, during the compilation phase, the JavaScript engine scans the code for declarations (both variables and functions)
	and allocates memory for them. This process makes them accessible from the beginning of their scope before start code execution, but they remain in the same place in the code.
	- Function declarations are fully hoisted: The entire function, including its body, is hoisted, allowing it to be called before its definition appears in the code.
	- Variables declared with var are initialized to undefined during the hoisting.
	- Variables declared with let and const are hoisted, but not initialized until the code reaches their declaration, leading to the Temporal Dead Zone.
		- Hoisted but not initialized: the variable exists in memory but cannot be accessed (until reaches declaration).
		- Declared without value: the variable is initialiezd to undefined after the declaration line is executed

	[Order of precedence]: Function declarations are hoisted over variable declarations but not over variable assignments.
		1- Variable assignment takes precedence over function declaration
		2- Function declarations take precedence over variable declarations

*/

console.log(foo);
// -> undefined (hoisted, but not initialized)
var foo = "bar";
console.log(foo);
// -> "bar"

console.log(bar);
let bar = "baz";
// -> [ERROR] ReferenceError: Cannot access 'bar' before initialization

console.log(greet());
function greet() {
  return "Hello, world!";
}
// -> "Hello, world!"

var double = 22;
function double(num) {
  return num * 2;
}
console.log(typeof double);
// -> number

var double;
function double(num) {
  return num * 2;
}
console.log(typeof double);
// -> function
