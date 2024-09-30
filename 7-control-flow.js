/*
	[Control Flow]
	- Control flow is the order in which the computer executes statements in a script.
	- Code is run in order from the first line in the file to the last line, unless the computer runs across structures that change the control flow, such as conditionals and loops.
	- Conditional statements control behavior in JavaScript and determine whether or not pieces of code can run.
		- Sequential (default mode)
		- Conditional (if, else if, else)
		- Exception Handling
		- Loops and iterations
*/

// [IF condition]
console.log("[IF 1]");
if (1 + 1 == 2) {
  console.log("1 + 1 == 2 it's true");
}
// "1 + 1 == 2 it's true"

// [IF and ELSE condition]
console.log("[IF 2]");
if (1 + 1 == 3) {
  console.log("1 + 1 == 3 it's true");
} else {
  console.log("1 + 1 == 3 it's false");
}
// "1 + 1 == 3 it's false"

// [IF, ELSE IF and ELSE condition]
console.log("[IF 3]");
let ifElseNum = 323;
if (ifElseNum < 10) {
  console.log("Small");
} else if (ifElseNum < 100) {
  console.log("Medium");
} else {
  console.log("Large");
}
// 'Large'

// [SWITCH]
console.log("[IF with a lot of nested else ifs and default case]");
let weather = "rainy";
if (weather === "rainy") {
  console.log("Remember to bring an umbrella.");
} else if (weather === "sunny") {
  console.log("Dress lightly.");
} else if (weather === "cloudy") {
  console.log("Go outside.");
} else {
  console.log("Unknown weather type.");
}
// Remember to bring an umbrella.

console.log("[SWITCH]");
switch (weather) {
  case "rainy":
    console.log("Remember to bring an umbrella.");
    break;
  case "sunny":
    console.log("Dress lightly.");
    break;
  case "cloudy":
    console.log("Go outside.");
    break;
  default:
    console.log("Unknown weather type!");
    break;
}
// Remember to bring an umbrella.

weather = "cloudy";
console.log("[SWITCH] With multiple cases");
switch (weather) {
  case "rainy":
    console.log("Remember to bring an umbrella.");
    break;
  case "sunny":
  case "cloudy":
  default:
    console.log("You don't need an umbrella.");
    break;
}
// You don't need an umbrella.

console.log("[SWITCH] With shared code between cases");
weather = "sunny";
switch (weather) {
  case "rainy":
    console.log("Remember to bring an umbrella.");
    break;
  case "sunny":
    console.log("Dress lightly.");
  case "cloudy":
    console.log("Go outside.");
    break;
  default:
    console.log("Unknown weather type!");
    break;
}
// Dress lightly.
// Go outside.

// Observations
// 1. Unfortunately, it inherited the syntax from C/Java and it is a little bit awkward
// 2. You can put any number of case labels inside the block opened by switch
// 3. The program will start executing at the label that corresponds to the value that switch was given, or at default if no matching value was found
// 4. It will continue executing, even across other labels, until it reaches a break statement
// 5. In some cases, this can be used to share some code between cases
// 6. You have to be careful, it is easy to forget a break, which will cause the program to execute code you don't want

/*
	[Exception handling]
	* try: This is the block of code that will be tested for errors while it is being executed.
	* catch: This is the block of code that will execute if there is an error in the try block.
	* finally: This block of code will always execute after the try and catch blocks have executed.
	* throw: This is how you create a custom error. You can use this when you want to stop the execution of the program when a certain condition is met. Can throw text, numbers, booleans, objects, etc.
	* Error: This is an object that represents an error that occurs during the execution of the program.
*/

const customFn = (userAge) => {
	try {
		if(Number.isNaN(Number(userAge))) {
			throw new Error("User age is not a number");
		}
		if (userAge < 18) {
			throw new Error("User is not old enough");
		}
		console.log('User is old enough');
	} catch (error) {
		console.log(error);
	} finally {
		console.log('User age processed');
	}
}

customFn(25); // User is old enough - User age processed
customFn('asd'); // Error: User age is not a number - User age processed
customFn(15); // Error: User is not old enough - User age processed

// Error constructors 
// Error - Creates an error object.
// AggregateError - A collection of errors thrown simultaneously.
// EvalError - An error occurred during the evaluation of a JavaScript expression.
// InternalError - An internal JavaScript error, often indicating a bug in the engine.
// RangeError - A value is outside the allowed range for a given operation.
// ReferenceError - A variable or object is referenced before it’s declared or doesn’t exist.
// SyntaxError - The code contains incorrect syntax, preventing it from being parsed.
// TypeError - A value is not of the expected type.


