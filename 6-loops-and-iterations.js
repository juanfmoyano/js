/*
	Loops offer a quick and easy way to do something repeatedly.

	1. break statement
	2. continue statement
	3. for statement
	4. do...while statement
	5. while statement
	6. labeled statement
	7. for...in statement
	8. for...of statement
*/

/*
	Exception: return statement
	It's invalid to use return outside a function. Therefore, if we want to use return inside a loop, the loop has to be part of a function body.
		- It breaks the execution out of the function which effectively means that no matter how many loops are nested together, return would exit them all and the containing function.
		- It returns a value to the calling context, i.e. the place where the function was called.
*/

/*
	1. continue statement
	The continue statement terminates execution of statements in the current iteration of the current or labeled loop, and continues execution of the loop with the next iteration.
	
	Syntax
	continue;
	continue [label]; where label is optional and is an identifier associated with the label of the statement.

	Description
	Continue does not terminate the execution of the loop entirely, but instead skips to the next iteration.
		- in a while or do...while loop, it jumps back to the condition.
		- in a for loop, it jumpts to the afterthought/update expression
		- in a for...in, for...of, or for await...of loop, it jumps to the next iteration.
	The continue statement can include an optional label that allows the program to jump to the next iteration of a labeled loop statement instead of the innermost loop.
	In this case, the continue statements needs to be nested within this labeled statement

	A continue statement, with or without a following label, cannot be used at the top level of a script, module, function's body, or static initializacion block, even when the function or class is further contained within a loop

*/

/*
	2. break statement
	The break statement terminates the current loop (or switch) statement and transfer program control to the statement following the terminated statement. 
	It can also be used to jump past a labeled statement when used within that labeled statement.

	Syntax
	break;
	break [label]; where label is optional and is an identifier associated with the label of the statement. If the statement is not nested within a loop or switch, then the label identifier is required.

	Description
	When break is escountered the program breaks out the innermost switch or looping statement and continues executing the next statement after that.

	When break label is encountered, the program breaks out of the statement labeled with label and continues executing the next statement after that. The break statement needs to be nested within the referenced label.
	The labeled statement can be any statement (commonly a block statement). It does not have to be another loop statement.
	
	A break statement, with or without a following label, cannot be used at the top level of a script, module, function's body, or static initialization block, even when the function or class is further contained within a loop.
*/

/*
	3. for statement
	A for loop repeats until a specified condition evaluates to false.
	A for statement looks as follows

	for (initialization; condition; afterthought) {
		statement
	}

	*	initialization Optional
	An expression (including assignment expressions) or variable declaration evaluated once before the loop begins. Typically used to initialize a counter variable. 
	This expression may optionally declare new variables with var or let keywords. 
	Variables declared with var are not local to the loop, i.e. they are in the same scope the for loop is in. Variables declared with let are local to the statement.
	The result of this expression is discarded.

	* condition Optional
	An expression to be evaluated before each loop iteration. If this expression evaluates to true, statement is executed. 
	If the expression evaluates to false, execution exits the loop and goes to the first statement after the for construct.
	This conditional test is optional. If omitted, the condition always evaluates to true.

	* afterthought Optional
	An expression to be evaluated at the end of each loop iteration. This occurs before the next evaluation of condition. Generally used to update or increment the counter variable.

	*statement
	A statement that is executed as long as the condition evaluates to true. You can use a block statement to execute multiple statements. 
	To execute no statement within the loop, use an empty statement (;).

	Note: for COULD be used to iterate an unknown number of times, but is not meant to be used in that way and is not the best tool for this job.

*/

for (let forNumber = 0; forNumber <= 12; forNumber = forNumber + 2) {
  console.log(forNumber);
}
// -> 0 2 4 6 8 10 12

let forResult = 1;
for (let forCounter = 0; forCounter < 10; forCounter = forCounter + 1) {
  console.log(forCounter);
  forResult = forResult * 2;
}
console.log({ forResult });
// -> 0 1 2 3 4 5 6 7 8 9 { forResult: 1024 }

for (
  let forCounterNested1 = 0;
  forCounterNested1 < 5;
  forCounterNested1 = forCounterNested1 + 1
) {
  console.log(forCounterNested1);
  for (
    let forCounterNested2 = 0;
    forCounterNested2 < 5;
    forCounterNested2 = forCounterNested2 + 1
  ) {
    console.log(forCounterNested2);
  }
}
// -> 0
// -> 0 1 2 3 4
// -> 1
// -> 0 1 2 3 4
// -> 2
// -> 0 1 2 3 4
// -> 3
// -> 0 1 2 3 4
// -> 4
// -> 0 1 2 3 4

let i = 0;
for (; i < 9; i++) {
  // initialization is optional
  console.log(i);
  // more statements
}
// -> 0 1 2 3 4 5 6 7 8

for (let i = 0; ; i++) {
  // condition is optional
  console.log(i);
  if (i > 3) break;
  // more statements
}
// -> 0 1 2 3 4

for (let j = 0; j < 9; ) {
  // afterthought/update is optional
  console.log(j);
  j = j + 1;
}
// -> 0 1 2 3 4 5 6 7 8 9 - 9 is printed because the condition is evaluated after the statement is executed

let k = 0;
for (;;) {
  // no initialization, condition, afterthought/update
  if (k > 3) break;
  console.log(k);
  k++;
}
// -> 0 1 2 3

for (let current = 15; ; current = current + 1) {
  if (current % 7 == 0) {
    console.log(current);
    break;
  } else if (current % 5 == 0) {
    continue;
  } else {
    console.log(`${current} is not divisible by 7.\n`);
  }
}
// current = 15 is skipped because 15 % 7 is not 0 and 15 % 5 is 0 so continue; jumps to the next iteration
// -> 16 is not divisible by 7.
// -> 17 is not divisible by 7.
// -> 18 is not divisible by 7.
// -> 19 is not divisible by 7.
// current = 20 is skipped because 20 % 7 is not 0 and 20 % 5 is 0 so continue; jumps to the next iteration
// -> 21 here it breaks the loop

function findIndex(someArray, someValue) {
  for (let i = 0; i < someArray.length; i++) {
    if (someArray[i] === someValue) {
      return i;
    }
  }
  return -1;
}
console.log(findIndex([1, 2, 3, 4, 5], 3));
// -> 2
console.log(findIndex([1, 2, 3, 4, 5], 6));
// -> -1

/*
	4. do...while statement
	The do...while statement creates a loop that executes a specified statement until the condition evaluates to false.
	The condition is evaluated AFTER executing the statement, hence the statement is executed AT LEAST once.

	Syntax
	do {
		statement
	} while (condition);

	* statement
	A statement that is executed at least once and re-executed as long as the condition evaluates to true. You can use a block statement to execute multiple statements.

	* condition	
	A expression evaluated AFTER each pass through the loop. 
	If the condition evaluates to true, the statement is re-executed.
	If the condition evaluates to false, executions continues with the statement after the do...while loop.

*/

do {
  console.log("This will be printed at least once");
} while (false);
// -> This will be printed at least once

let result = "";
let doWhileCounter = 0;
do {
  doWhileCounter++;
  result += `${doWhileCounter}`;
} while (doWhileCounter > 0 && doWhileCounter < 10);
console.log(result);
// -> 12345678910
// OBS1: counter starts at 0, so the first iteration adds 1, then the condition is evaluated to true
// OBS2: 10 is printed because the condition is evaluated after the statement is executed, so 10 is printed before the loop breaks

let doWhileBreakCounter = 0;
let doWhileBreakResult = "";
do {
  doWhileBreakCounter++;
  doWhileBreakResult += `${doWhileBreakCounter}`;
  if (doWhileBreakCounter === 5) {
    break;
  }
} while (doWhileBreakCounter < 10);
console.log({ doWhileBreakCounter, doWhileBreakResult });
// -> { doWhileBreakCounter: 5, doWhileBreakResult: '12345' }

let doWhileContinueCounter = 0;
let doWhileContinueResult = "";
do {
  doWhileContinueCounter++;
  if (doWhileContinueCounter % 2 === 0) {
    continue;
  }
  doWhileContinueResult += `${doWhileContinueCounter}`;
} while (doWhileContinueCounter < 10);
console.log({ doWhileContinueCounter, doWhileContinueResult });
// -> { doWhileContinueCounter: 10, doWhileContinueResult: '13579' }

/*
	5. while statement
	The while statement creats a loop that executes a specified statement as long as the test condition evaluates to true.
	The condition is evaluated BEFORE executing the statement.

	Syntax
	while (condition) {
		statement
	}

	* condition
	An expression evaluated before each pass through the loop. 
	If this condition evaluates to true, statement is executed. 
	If this condition evaluates to false, execution continues with the statement after the while loop.

	* statement
	A statement that is executed as long as the condition evaluates to true. You can use a block statement to execute multiple statements. 
	To execute no statement within the loop, use an empty statement (;).

*/

let whileCounter = 0;
while (whileCounter < 10) {
  console.log(whileCounter);
  whileCounter++;
}
// -> 0 1 2 3 4 5 6 7 8 9

while (false) {
  console.log("This will not be printed");
}
// -> nothing is printed

let whileBreakCounter = 0;
while (whileBreakCounter < 10) {
  console.log(whileBreakCounter);
  if (whileBreakCounter === 5) {
    break;
  }
  whileBreakCounter++;
}
// -> 0 1 2 3 4 5

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let index = 0;

while (index < numbers.length) {
  if (numbers[index] % 2 === 0) {
    index++;
    continue; // Skip the rest of the loop for even numbers
  }
  console.log(`Processing odd number: ${numbers[index]}`);

  index++;
}
// -> Processing odd number: 1
// -> Processing odd number: 3
// -> Processing odd number: 5
// -> Processing odd number: 7
// -> Processing odd number: 9

/*
	6. labeled statement
	A labeled statement is any statement that is prefixed with an identifier. You can jump to this label using a break or continue statement nested within the labeled element.
	
	Syntax
	label: statement

	* label
	An identifier that is used to identify the statement (that is not a reserved word)

	* statement
	A JavaScript statement. 
		break can be used within any labeled statement
		continue can be used within labeled looping statements

	Description
	Label to identify a statement, and later refer to it using break or continue.
	JavaScript does not have a goto statement, but labels can be used to simulate the behavior of goto.
	Any break or continue that references label must be contained within the statement that's labeled by label
	Think about label as a variable that's only available in the scope of statement.

	If a break label; is encountered when executing statement, execution of statement terminates, and continuos at the statement immediately following the labeled statement.
	If a continue label; is encountered when executing statement, execution of statement continues at the next iteration of the loop.
		continue label; can be only used if statement is one of the looping statements (for, for...in, for...of, while, do...while)
		continue label; allows continuing any given loop even when the statement is nested within other loops

*/

// The first for statement is labeled "loop1"
loop1: for (let i = 0; i < 3; i++) {
  // The second for statement is labeled "loop2"
  loop2: for (let j = 0; j < 3; j++) {
    if (i === 1 && j === 1) {
      continue loop1;
    }
    console.log(`i = ${i}, j = ${j}`);
  }
}
// -> i = 0, j = 0
// -> i = 0, j = 1
// -> i = 0, j = 2
// -> i = 1, j = 0
// -> i = 2, j = 0
// -> i = 2, j = 1
// -> i = 2, j = 2

let labeledStatementI, labeledStatementJ;

// The first for statement is labeled "loop1"
loop1: for (labeledStatementI = 0; labeledStatementI < 3; labeledStatementI++) {
  // The second for statement is labeled "loop2"
  loop2: for (
    labeledStatementJ = 0;
    labeledStatementJ < 3;
    labeledStatementJ++
  ) {
    if (labeledStatementI === 1 && labeledStatementJ === 1) {
      break loop1;
    }
    console.log(
      `labeledStatementI = ${labeledStatementI}, labeledStatementJ = ${labeledStatementJ}`
    );
  }
}
// -> labeledStatementI = 0, labeledStatementJ = 0
// -> labeledStatementI = 0, labeledStatementJ = 1
// -> labeledStatementI = 0, labeledStatementJ = 2
// -> labeledStatementI = 1, labeledStatementJ = 0

let filledArray = [];
const arraySize = 3;
outer: for (let i = 0; i < arraySize; i++) {
  let innerArray = [];
  for (let j = 0; j < arraySize; j++) {
    let input = prompt(`Value at coords (${i},${j})`, "");
    if (input) {
      console.log(`Setting value at coords (${i},${j}) to ${input}`);
      innerArray.push(input);
    }

    if (!input) {
      filledArray = [];
      break outer;
    }

    if (innerArray.length === arraySize) {
      filledArray.push(innerArray);
    }
  }
}

console.log(filledArray);
// User fills 1 to 9 on prompt
// -> [['1', '2', '3'], ['4', '5', '6'], ['7', '8', '9']]
// User fills any invalid value on prompt
// -> []

//break label; // A 'break' statement can only jump to a label of an enclosing statement.
label: for (let i = 0; i < 10; i++) {
  // ...
}
// Labels do not allow us to jump into an arbitrary place in the code

label: {
  // ...
  break label; // works
  // ...
}
// Break directive must be inside a block, technically any labelled code block will do

label: {
  // ...
  // continue label; // A 'continue' statement can only jump to a label of an enclosing iteration statement.
  // ...
}
// Continue directive must be inside a loop

/*
	7. for...in statement
	The for...in statement iterates over all enumerable string properties of an object (ignoring properties keyed by Symbols), including inherited enumerable properties.


	Syntax
	for (variable in object) {
		statement
	}

	* variable
	Receives a string property name on each interation. May be declared with const, let, or var, even an assignment target (e.g. previously declared variable, object property, destructuring assignment pattern).
	A legacy syntax allows var declarations of the loop variable to have an initializer. This throws a syntax error in strict mode and is ignored in non–strict mode.

	* object
	Object whose non-symbol enumerable properties are iterated over. 

	* statement
	A statement to be executed on every iteration. May reference variable. You can use a block statement to execute multiple statements.

	Description: 
	The loop will iterate over all enumerable properties of the object itself and those the object inherits from its prototype chain.
	A for...in loop only iterates over enumerable, non-symbol properties. Objects created from built–in constructors like Array and Object have inherited non–enumerable properties from Array.prototype and Object.prototype, 
	such as Array's indexOf() method or Object's toString() method, which will not be iterated over by a for...in loop.

	Order
	The traversal order, as of modern ECMAScript specification, is well-defined and consistent across implementations. 
	Within each component of the prototype chain:
	- all non-negative integer keys (those that can be array indices) will be traversed first in ascending order by value
	- then other string keys in ascending chronological order of property creation.
	
	Control flow statements:
		- break: stops statement execution and goes to the first statement after the loop.
		- continue: stops statement execution and goes to the next iteration of the loop

	Deleted, added or modified properties
	1. It first gets all own string keys of the current object, in a fashion very similar to Object.getOwnPropertyNames()
	2. For each key, if no string with the same value has ever been visited, the property descriptor is retrieved and the property is only visited if it is enumerable. Property string will be marked as visited (even if it's not enumerable)
	3. Current object is replaced with its prototype, and the process is repeated
		- Any properties added to the currently visited object will not be visited
		- If multiple objects in the prototype chain have a property with the same name, only the first one will be considered, and it is only visited if it is enumerable
	It is best not to add, modify or remove properties during iteration. The spec explicitly allows the implementation to not follow the algorithm in one of the following cases:
		- The object's prototype chain is modified during iteration
		- A property is deleted from the object or its prototype chain during iteration
		- A property is added to the object's prototype chain during iteration
		- A property's enumerability is changed during iteration

	Array iteration
	It is better to use a for loop with a numeric index, Array.prototype.forEach or the for...of loop, because they will return the index as a number instead of a string, and also avoid non-index properties.


*/

const obj = { a: 1, b: 2, c: 3 };

for (const prop in obj) {
  console.log(`obj.${prop} = ${obj[prop]}`);
}
// -> "obj.a = 1"
// -> "obj.b = 2"
// -> "obj.c = 3"

const triangle = { a: 1, b: 2, c: 3 };

function ColoredTriangle() {
  this.color = "red";
}

ColoredTriangle.prototype = triangle;

const obj2 = new ColoredTriangle();

for (const prop in obj2) {
  console.log(prop);
}
// -> color a b c

for (const prop in obj2) {
  if (obj2.hasOwnProperty(prop)) {
    console.log(prop);
  }
}
// -> color

/*
	8. for...of statement
	The for...of statement executes a loop that operates on a sequence of values source from an iterable object.
	Iterable objects include instance of built-in such as Array, String, TypedArray, Map, Set, NodeList, as well as the arguments object, generators produced by generator functions and user-defined iterables.

	Syntax
	for (variable of object) {
		statement
	}
	
	* variable
  Receives a value from the sequence on each iteration. May be either a declaration with const, let, or var, or an assignment target (e.g. previously declared variable, object property, destructuring assignment pattern).
	Variables declared with var are not local to the loop, i.e. they are in the same scope the for...of loop is in. Variables declared with let or const are local to the loop.

	* iterable
	An iterable object. The source of the sequence of values on which the loop iterates

	* statement
	A statement to be executed on every iteration. May be reference variable. You can use a block statement to execute multiple statements.

	Description
	A for...of loop operates on the values sourced form an iterable one by one in sequential order.
	Each operation of the loop on a value is called an iteration, and hte loop is said to iterate over the iterable.
	Each iteration executes statements that may refer to the current sequence value.
	When a for...of loop iterates over an iterable, it first calls the iterable [Symbol.iterator]() method, which returns an iterator and then repeatedly calls the iterator's next() method to produce the sequence of values to be assigned to variable.


	Control flow statements:
		- break: stops statement execution and goes to the first statement after the loop.
		- continue: stops statement execution and goes to the next iteration of the loop
	If the for...of loop exited early, the return() method of the iterator is called to perform any clean up.

*/

const array1 = ['a', 'b', 'c'];

for (const element of array1) {
  console.log(element);
}

// -> "a"
// -> "b"
// -> "c"

const array2 = [1, 2, 3, 4, 5];
for (let value of array2){
	value += 1;
	console.log(value);
}
// -> 2 3 4 5 6

const string1 = "Hello World";
for (const char of string1) {
  console.log(char);
}
// -> H e l l o  W o r l d

const array3 = new Uint8Array([0x00, 0xff])
for (const value of array3){
	console.log(value);
}
// -> 0 255

const map1 = new Map([['a', 1], ['b', 2], ['c', 3]])
for (const entry of map1){
	console.log(entry);
}
// -> ['a', 1] ['b', 2] ['c', 3]

const set1 = new Set([1, 2, 3, 4, 5])
for (const value of set1){
	console.log(value);
}
// -> 1 2 3 4 5

function foo(arg1, arg2, arg3){
	for (const arg of arguments){
		console.log(arg);
	}
}
foo('pepe', 2, {});
// -> pepe 2 {}

const iterable = {
	[Symbol.iterator](){
		let counter = 0;
		return {
			next(){
				if (counter < 3){
					return {value: counter++, done: false};
				}
				return {value: undefined, done: true};
			}
		}
	}
}

for (const value of iterable){
	console.log(value);
}
// -> 0 1 2

const source = [1, 2, 3];
const iterator = source[Symbol.iterator]();

for (const value of iterator) {
  console.log(value);
  if (value === 1) {
    break;
  }
  console.log("This string will not be logged.");
}
// 1

// Another loop using the same iterator
// picks up where the last loop left off.
for (const value of iterator) {
  console.log(value);
}
// 2
// 3

// The iterator is used up.
// This loop will execute no iterations.
for (const value of iterator) {
  console.log(value);
}
// [No output]

