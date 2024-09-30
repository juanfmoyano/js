/*
	1. Conditional operators
	2. Comma operators
	3. Unary operators
	4. Relational operators
	5. Assignment operators
	6. Comparison operators
	7. Arithmetic operators
	8. Bitwise operators
	9. Logical operators
	10. BigInt operators
	11. String operators
*/

/*
	[1] Conditional operators
		- Takes three operands: a condition followed by a question mark (?), then an expression to execute if the condition is truthy followed by a colon (:), and finally the expression to execute if the condition is falsy.
		- This operator is frequently used an alternative to an if statement.

		Syntax:
		condition? exprIfTrue : exprIfFalse

		* condition: An expression whose value is used as a condition.
		* exprIfTrue: An expression which is evaluated if the condition evaluates to a truthy value (one which equals or converted to true)
		* exprIfFalse: An expression which is executed if the condition is falsy (one which equals or converted to false)

		- Possible falsy expressions: null, NaN, 0, empty string ("") and undefined.
		- Common usage to handle value that may be null or undefined.
		- The conditional operator is right-associative, which means it can be "chained" in the following manner, similar to an if ... else if ... else if ... else chain.
*/

let age = 18;
const conditionalOp1 =
  age >= 18 ? "You are eligible to vote" : "You are not eligible to vote";
// -> "You are eligible to vote"

const greeting = (person) => {
  const name = person ? person.name : "stranger";
  return `Hello, ${name}`;
};
console.log(greeting({ name: "Alice" })); // -> Hello, Alice
console.log(greeting(null)); // -> Hello, stranger

age = 15;
const example = () =>
  age >= 18
    ? "You are eligible to vote"
    : age < 10
    ? "You are too young to vote"
    : "You are not eligible to vote";
// -> "You are not eligible to vote"

/*
	[2] Comma operators
		- The comma operator (,) evaluates each of its operands (from left to right) and returns the value of the last operand.
		- This operator is primarily used inside a for loop, to allow multiple variables to be updated each time through the loop.
		- Often two separate statements can and should be used instead
		- Because all expressions except the last one are evaluated and discarded, the comma operator can be useful for executing side effects, such as assignments, incrementing counters, or logging messages.
		- The comma operator is fully different from the comma in arrays, objects, and function arguments and parameters.
			- [1, 2, 3]
			- { a: 1, b: 2, c: 3 }
			- function(a, b, c) { ... }
			- f(1,2)
			- const a = 1, b = 2, c = 3;
			- import { a, b, c } from 'module';
			- export { a, b, c };
		- The comma operator has the lowest precedence of any JavaScript operator. If you want to use it, you should be aware of using parentheses to control the order of evaluation.

	Syntax
		exp1, exp2, exp3, ..., expN

	
*/

const commaOpArray1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const commaOpArray2 = [
  commaOpArray1,
  commaOpArray1,
  commaOpArray1,
  commaOpArray1,
  commaOpArray1,
];

for (let i = 0, j = 9; i <= j; i++, j--) {
  //                              ^
  console.log(`value[${i}][${j}]= ${commaOpArray2[i][j]}`);
}
// -> value[0][9]= 9
// -> value[1][8]= 8
// -> value[2][7]= 7
// -> value[3][6]= 6
// -> value[4][5]= 5

let commaOpValue1, commaOpValue2, commaOpValue3;
(commaOpValue1 = commaOpValue2 = 3), (commaOpValue3 = 4); // Returns 4
console.log(commaOpValue1); // -> 3 (left most)

let commaOpValue4, commaOpValue5, commaOpValue6;
commaOpValue4 = ((commaOpValue5 = 5), (commaOpValue6 = 6)); // Returns 6
console.log(commaOpValue4); // -> 6 (right most)

const commaOpFn1 = () => {
  let x = 0;
  return (x += 1), x; // The same as return ++x or return x++, returns the x value after incrementing
};
commaOpFn1(); // -> 1

let commaOpValue7 = 0;
const commaOpArray3 = [1, 2, 3, 4, 5].map((x) => ((commaOpValue7 += x), x * x));
console.log(commaOpArray3); // -> [1, 4, 9, 16, 25]
console.log(commaOpValue7); // -> 15

/*
	[3] Unary operators
		- An operation with only one operand.
		- Unary operators are more efficient than standard JavaScript function calls.
			a. Unary plus (+): precedes an operand and evaluates to its operand but attempts to convert it into a number, if it isn't already.
			b. Unary negation (-): precedes an operand and negates it.
			c. Logical not (!): negates an operand and returns a Boolean value.
			d. Increment (++) and decrement (--): increments or decrements its operand by 1, respectively.
			e. Bitwise NOT (~): inverts the bits of its operand.
			f. typeof: returns a string indicating the type of the unevaluated operand (Check 2-data-types_primitives.js)
			g. delete: deletes an object, an object's property, or an element at a specified index in an array.
				- If property doesn't exists, delete has no effect and returns true.
				- If a property with the same name exists on object's prototype chain, then, after deletion, the object will use the property from the prototype chain.
				- Non-configurable properties cannot be deleted (includes built-in properties like Math.PI, Object.prototype, etc. and created with Object.defineProperty()).
				- Variables, including function parameters never works. Throws error in strict mode, no effect in non-strict mode.
				- Any variable declared with var cannot be deleted from the global scope or from a function's scope, because they may be attached to the global object, they are not configurable
				- Any variable declared with let or const cannot be deleted from the scope within which they were defined, because they are not attached to an object
			h. void: evaluates the given expression and then returns undefined.

*/

let unaryOpValue1 = 2;
let unaryOpValue2 = "2";
let onaryOpValue3 = -3;
console.log(+unaryOpValue1); // -> 2
console.log(+unaryOpValue2); // -> 2
console.log(+onaryOpValue3); // -> -3
console.log(+""); // -> 0
console.log(+true); // -> 1
console.log(+false); // -> 0
console.log(+null); // -> 0
console.log(+undefined); // -> NaN
console.log(+"hello"); // -> NaN

console.log(-unaryOpValue1); // -> -2
console.log(-unaryOpValue2); // -> -2
console.log(-onaryOpValue3); // -> 3
console.log(-""); // -> -0
console.log(-true); // -> -1
console.log(-false); // -> -0
console.log(-null); // -> -0
console.log(-undefined); // -> NaN
console.log(-"hello"); // -> NaN

console.log(!true); // -> false
console.log(!false); // -> true
console.log(!""); // -> true
console.log(!"Cat"); // -> false
console.log(!!true); // -> true
console.log(!!{}); // -> true
console.log(!!new Boolean(false)); // -> true
console.log(!!false); // -> false
console.log(!!""); // -> false
console.log(!!Boolean(false)); // -> false

let unaryOpValue4 = 5; // bits: 00000000 00000000 00000000 00000101
let unaryOpValue5 = -3; // bits: 11111111 11111111 11111111 11111101
console.log(~unaryOpValue4); // -> -6 in bits: 11111111 11111111 11111111 11111010
console.log(~unaryOpValue5); // -> 2 in bits: 00000000 00000000 00000000 00000010

/*
	Two's complement representation
	- The most left bit is the sign bit (0 for positive, 1 for negative)
	- Invert all bits
	- Add 1 to the result
*/

const Employee = {
	name: 'Maria',
	lastName: 'Gonzalez',
}
console.log(Employee.name); // -> Maria
delete Employee.name; // -> true
console.log(Employee.name); // -> undefined
delete Employee.age; // -> true (no effect)
var employeeAge = 25;
delete employeeAge; // -> false (no effect)
delete Math.PI; // -> false (no effect)

function Foo(){
	this.bar = 42;
}
Foo.prototype.bar = 5;
const foo = new Foo();
console.log(foo.bar); // -> 42
delete foo.bar; // -> true and delete the own property
console.log(foo.bar); // -> 5 (from prototype)
delete Foo.prototype.bar; // -> true and delete the inherited property
console.log(foo.bar); // -> undefined

const deleteOpArray1 = [1, 2, 3, 4, 5];
delete deleteOpArray1[2]; // -> true
console.log(deleteOpArray1); // -> [1, 2, empty, 4, 5]

globalThis.globalVar = 1;
console.log(globalVar); // 1
// In non-strict mode, you can use `delete globalVar` as well
delete globalThis.globalVar;
console.log(globalVar); // ReferenceError: globalVar is not defined

const voidOpFn1 = () => 'Hello friend';
console.log(voidOpFn1()); // -> Hello friend
console.log(void voidOpFn1()); // -> undefined

/*
	[4] Relational operators
		a. Less than (<): returns true if the left operand is less than the right operand, otherwise false.
			- First, objects are converted to primitives by calling its [Symbol.toPrimitive]() (with "number" as hint), valueOf(), and toString() methods, in that order. 
			- The left operand is always coerced before the right one. Note that although [Symbol.toPrimitive]() is called with the "number" hint (meaning there's a slight preference for the object to become a number), the return value is not converted to a number, since strings are still specially handled.
			- If the two operands are not of the same type, JavaScript converts the operands then applies strict comparison.
			- If both operands are strings, the comparison is made based on the values of the strings' Unicode code points.
		b. Greater than (>): returns true if the left operand is greater than the right operand, otherwise false.
		c. Less than or equal (<=): returns true if the left operand is less than or equal to the right operand, otherwise false.
		d. Greater than or equal (>=): returns true if the left operand is greater than or equal to the right operand, otherwise false.
		e. instanceof: returns true if the specified object is of the specified object type.
		f. in: returns true if the specified property is in the specified object.
*/

"a" < "b"; // -> true
"a" < "a"; // -> false
"a" < "3"; // -> false

"5" < 3; // -> false
"3" < 3; // -> false
"3" < 5; // -> true
"hello" < 5; // -> false, hello is converted to NaN
5 < "hello"; // -> false, hello is converted to NaN

5n < 3; // false
3 < 5n; // true

true < false; // false, true is converted to 1 and false to 0
false < true; // true, false is converted to 0 and true to 1

0 < true; // true
true < 1; // false

null < 0; // false, null is converted to 0
null < 1; // true, null is converted to 0

undefined < 3; // false, undefined is converted to NaN
3 < undefined; // false, undefined is converted to NaN

3 < NaN; // false
NaN < 3; // false

"a" > "b"; // false
"a" > "a"; // false
"a" > "3"; // true

"5" > 3; // true
"3" > 3; // false
"3" > 5; // false

"hello" > 5; // false
5 > "hello"; // false

"5" > 3n; // true
"3" > 5n; // false

5 > 3; // true
3 > 3; // false
3 > 5; // false

5n > 3; // true
3 > 5n; // false

true > false; // true
false > true; // false

true > 0; // true
true > 1; // false

null > 0; // false
1 > null; // true

undefined > 3; // false
3 > undefined; // false

3 > NaN; // false
NaN > 3; // false

"a" <= "b"; // true
"a" <= "a"; // true
"a" <= "3"; // false

"5" <= 3; // false
"3" <= 3; // true
"3" <= 5; // true

"hello" <= 5; // false
5 <= "hello"; // false

5 <= 3; // false
3 <= 3; // true
3 <= 5; // true

5n <= 3; // false
3 <= 3n; // true
3 <= 5n; // true

true <= false; // false
true <= true; // true
false <= true; // true

true <= 0; // false
true <= 1; // true

null <= 0; // true
1 <= null; // false

undefined <= 3; // false
3 <= undefined; // false

3 <= NaN; // false
NaN <= 3; // false

"a" >= "b"; // false
"a" >= "a"; // true
"a" >= "3"; // true

"5" >= 3; // true
"3" >= 3; // true
"3" >= 5; // false

"hello" >= 5; // false
5 >= "hello"; // false

5 >= 3; // true
3 >= 3; // true
3 >= 5; // false

5n >= 3; // true
3 >= 3n; // true
3 >= 5n; // false

true >= false; // true
true >= true; // true
false >= true; // false

true >= 0; // true
true >= 1; // true

null >= 0; // true
1 >= null; // true

undefined >= 3; // false
3 >= undefined; // false

3 >= NaN; // false
NaN >= 3; // false

/*
	[5] Assignment operators
	a. Assignment (=): assigns a value to its left operand based on the value of its right operand.
	b. Addition assignment (+=): adds the value of the right operand to a variable and assigns the result to the variable.
	c. Subtraction assignment (-=): subtracts the value of the right operand from a variable and assigns the result to the variable.
	d. Multiplication assignment (*=): multiplies the value of the right operand by a variable and assigns the result to the variable.
	e. Division assignment (/=): divides a variable by the value of the right operand and assigns the result to the variable.
	f. Remainder assignment (%=): divides a variable by the value of the right operand and assigns the remainder to the variable.
	g. Exponentiation assignment (**=): raises the value of the left operand to the power of the right operand and assigns the result to the left operand.
	h. Left shift assignment (<<=): shifts the left operand to the left by the number of bits specified by the right operand and assigns the result to the left operand.
	i. Right shift assignment (>>=): shifts the left operand to the right by the number of bits specified by the right operand and assigns the result to the left operand.
	j. Unsigned right shift assignment (>>>=): shifts the left operand to the right by the number of bits specified by the right operand and assigns the result to the left operand.
	k. Bitwise AND assignment (&=): performs a bitwise AND between the left and right operands and assigns the result to the left operand.
	l. Bitwise XOR assignment (^=): performs a bitwise XOR between the left and right operands and assigns the result to the left operand.
	m. Bitwise OR assignment (|=): performs a bitwise OR between the left and right operands and assigns the result to the left operand.
	n. Logical AND assignment (&&=): performs a logical AND between the left and right operands and assigns the result to the left operand.
	o. Logical OR assignment (||=): performs a logical OR between the left and right operands and assigns the result to the left operand.
	p. Logical nullish assignment (??=): assigns the value of the right operand to the left operand if the left operand is null or undefined.

	| Name                              | Shorthand operator | Meaning                |
	|-----------------------------------|--------------------|------------------------|
	| Assignment                        | x = f()            | x = f()                |
	| Addition assignment               | x += f()           | x = x + f()            |
	| Subtraction assignment            | x -= f()           | x = x - f()            |
	| Multiplication assignment         | x *= f()           | x = x * f()            |
	| Division assignment               | x /= f()           | x = x / f()            |
	| Remainder assignment              | x %= f()           | x = x % f()            |
	| Exponentiation assignment         | x **= f()          | x = x ** f()           |
	| Left shift assignment             | x <<= f()          | x = x << f()           |
	| Right shift assignment            | x >>= f()          | x = x >> f()           |
	| Unsigned right shift assignment   | x >>>= f()         | x = x >>> f()          |
	| Bitwise AND assignment            | x &= f()           | x = x & f()            |
	| Bitwise XOR assignment            | x ^= f()           | x = x ^ f()            |
	| Bitwise OR assignment             | x |= f()           | x = x | f()            |
	| Logical AND assignment            | x &&= f()          | x && (x = f())         |
	| Logical OR assignment             | x ||= f()          | x || (x = f())         |
	| Nullish coalescing assignment     | x ??= f()          | x ?? (x = f())         |
*/

// a. Assignment
let assignmentValue1 = 5;
let assignmentValue2;
assignmentValue2 = assignmentValue1 + 10;
console.log(assignmentValue2); // -> 15

const [assignmentValue3, assignmentValue4] = [5, 10];
console.log({ assignmentOpValue3: assignmentValue3, assignmentOpValue4: assignmentValue4 }); // -> { assignmentValue3: 5, assignmentValue4: 10 }
const assignmentObject1 = { a: 365, b: 1000 };
const { a: assignmentValue5, b: assignmentValue6 } = assignmentObject1;
console.log({ assignmentValue5, assignmentValue6 }); // -> { assignmentValue5: 365, assignmentValue6: 1000 }

// b. Addition assignment
let addAssignmentValue1 = 5;
addAssignmentValue1 += 10; // -> 15

let addAssignmentValue2 = true;
addAssignmentValue2 += 1; // -> 2
addAssignmentValue2 += false; // -> 2

let addAssignmentValue3 = "Hello";
addAssignmentValue3 += " World"; // -> Hello World
addAssignmentValue3 += false; // -> Hello Worldfalse
addAssignmentValue3 += 2021; // -> Hello Worldfalse2021

// c. Subtraction assignment
let subAssignmentValue1 = 5;
subAssignmentValue1 -= 10; // -> -5

let subAssignmentValue2 = true;
subAssignmentValue2 -= 1; // -> 0
subAssignmentValue2 -= false; // -> 0

let subAssignmentValue3 = "Hello";
subAssignmentValue3 -= " World"; // -> NaN

// d. Multiplication assignment
let mulAssignmentValue1 = 5;
mulAssignmentValue1 *= 10; // -> 50

let mulAssignmentValue2 = true;
mulAssignmentValue2 *= 1; // -> 1
mulAssignmentValue2 *= false; // -> 0

let mulAssignmentValue3 = "Hello";
mulAssignmentValue3 *= " World"; // -> NaN

// e. Division assignment
let divAssignmentValue1 = 5;
divAssignmentValue1 /= 10; // -> 0.5

let divAssignmentValue2 = true;
divAssignmentValue2 /= 1; // -> 1
divAssignmentValue2 /= false; // -> Infinity

let divAssignmentValue3 = "Hello";
divAssignmentValue3 /= " World"; // -> NaN
divAssignmentValue3 /= 5; // -> NaN
divAssignmentValue3 /= 1; // -> NaN

// f. Remainder assignment
let remAssignmentValue1 = 5;

remAssignmentValue1 %= 2; // 1
remAssignmentValue1 %= "foo"; // NaN
remAssignmentValue1 %= 0; // NaN

let remAssigmentValue2 = 3n;
remAssigmentValue2 %= 2n; // 1n

// g. Exponentiation assignment
let expAssignmentValue1 = 5;
expAssignmentValue1 **= 2; // 25

let baz = 5;
baz **= "foo"; // NaN

let expAssignmentValue2 = 3n;
foo **= 2n; // 9n
foo **= 1; // TypeError: Cannot mix BigInt and other types, use explicit conversions




// h. Left shift assignment
let leftShiftAssignmentValue = 5;
// 00000000000000000000000000000101
leftShiftAssignmentValue <<= 2; // 20
// 00000000000000000000000000010100

let leftShiftAssignmentBigInt = 3n;
leftShiftAssignmentBigInt <<= 2n; // 12n

// i. Right shift assignment
let rightShiftAssignmentValue = 5;
// 00000000000000000000000000000101
rightShiftAssignmentValue >>= 2; // 1
// 00000000000000000000000000000001

let rightShiftAssignmentBigInt = 12n;
rightShiftAssignmentBigInt >>= 2n; // 3n

// j. Unsigned right shift assignment
let unsignedRightShiftAssignmentValue = 5;
// 00000000000000000000000000000101
unsignedRightShiftAssignmentValue >>>= 2; // 1
// 00000000000000000000000000000001

// k. Bitwise AND assignment
let bitwiseAndAssignmentValue = 5;
// 00000000000000000000000000000101
bitwiseAndAssignmentValue &= 3; // 1
// 00000000000000000000000000000001

let bitwiseAndAssignmentBigInt = 5n;
bitwiseAndAssignmentBigInt &= 3n; // 1n

// l. Bitwise XOR assignment
let bitwiseXorAssignmentValue = 5;
// 00000000000000000000000000000101
bitwiseXorAssignmentValue ^= 3; // 6
// 00000000000000000000000000000110

let bitwiseXorAssignmentBigInt = 5n;
bitwiseXorAssignmentBigInt ^= 3n; // 6n

// m. Bitwise OR assignment
let bitwiseOrAssignmentValue = 5;
// 00000000000000000000000000000101
bitwiseOrAssignmentValue |= 3; // 7
// 00000000000000000000000000000111

let bitwiseOrAssignmentBigInt = 5n;
bitwiseOrAssignmentBigInt |= 3n; // 7n

// n. Logical AND assignment
let logicalAndAssignmentValue = true;
logicalAndAssignmentValue &&= false; // false

// o. Logical OR assignment
let logicalOrAssignmentValue = false;
logicalOrAssignmentValue ||= true; // true

// p. Nullish coalescing assignment
let nullishCoalescingAssignmentValue = null;
nullishCoalescingAssignmentValue ??= 'default'; // 'default'

/*
	[6] Comparison operators: check 5-equality-comparison.js
*/

/*
	[7] Arithmetic operators
		a. Addition (+): adds two operands.
		b. Subtraction (-): subtracts the right operand from the left operand.
		c. Multiplication (*): multiplies two operands.
		d. Division (/): divides the left operand by the right operand.
		e. Remainder (%): returns the division remainder.
		f. Exponentiation (**): raises the left operand to the power of the right operand.
*/

// a. Addition
1 + 2; // 3
true + 1; // 2
false + false; // 0
1n + 2n; // 3n
1n + BigInt(2); // 3n
Number(1n) + 2; // 3
"foo" + "bar"; // "foobar"
5 + "foo"; // "5foo"
"foo" + false; // "foofalse"
"2" + 2; // "22"

// b. Subtraction
5 - 3; // 2
3 - 5; // -2
"foo" - 3; // NaN; "foo" is converted to the number NaN
5 - "3"; // 2; "3" is converted to the number 3
2n - 1n; // 1n
2n - 1; // TypeError: Cannot mix BigInt and other types, use explicit conversions
2 - 1n; // TypeError: Cannot mix BigInt and other types, use explicit conversions
2n - BigInt(1); // 1n
Number(2n) - 1; // 1

// c. Multiplication
2 * 2; // 4
-2 * 2; // -4
Infinity * 0; // NaN
Infinity * Infinity; // Infinity
"foo" * 2; // NaN
"2" * 2; // 4
2n * 2n; // 4n
-2n * 2n; // -4n
2n * 2; // TypeError: Cannot mix BigInt and other types, use explicit conversions
2 * 2n; // TypeError: Cannot mix BigInt and other types, use explicit conversions
2n * BigInt(2); // 4n
Number(2n) * 2; // 4
5 * null; // 0
6 * undefined; // NaN

// d. Division
1 / 2; // 0.5
Math.floor(3 / 2); // 1
1.0 / 2.0; // 0.5
2 / 0; // Infinity
2.0 / 0.0; // Infinity, because 0.0 === 0
2.0 / -0.0; // -Infinity
5 / "2"; // 2.5
5 / "foo"; // NaN
1n / 2n; // 0n
5n / 3n; // 1n
-1n / 3n; // 0n
1n / -3n; // 0n
2n / 0n; // RangeError: BigInt division by zero
2n / 2; // TypeError: Cannot mix BigInt and other types, use explicit conversions
2 / 2n; // TypeError: Cannot mix BigInt and other types, use explicit conversions
2n / BigInt(2); // 1n
Number(2n) / 2; // 1

// e. Remainder
13 % 5; // 3
1 % -2; // 1
1 % 2; // 1
2 % 3; // 2
5.5 % 2; // 1.5
3n % 2n; // 1n
-13 % 5; // -3
-1 % 2; // -1
-4 % 2; // -0
-3n % 2n; // -1n
NaN % 2; // NaN
Infinity % 2; // NaN
Infinity % 0; // NaN
Infinity % Infinity; // NaN
2 % Infinity; // 2
0 % Infinity; // 0

// f. Exponentiation
2 ** 3; // 8
3 ** 2; // 9
3 ** 2.5; // 15.588457268119896
10 ** -1; // 0.1
2 ** 1024; // Infinity
NaN ** 2; // NaN
NaN ** 0; // 1
1 ** Infinity; // NaN
2 ** "3"; // 8
2 ** "hello"; // NaN
2n ** 3n; // 8n
2n ** 1024n; // A very large number, but not Infinity
2n ** 2; // TypeError: Cannot mix BigInt and other types, use explicit conversions
2 ** 2n; // TypeError: Cannot mix BigInt and other types, use explicit conversions
2n ** BigInt(2); // 4n
Number(2n) ** 2; // 4
2 ** 3 ** 2; // 512
2 ** (3 ** 2); // 512
(2 ** 3) ** 2; // 64
-(2 ** 2); // -4
(-2) ** 2; // 4

/*
	[8] Bitwise operators
		a. Bitwise AND (&): performs a bitwise AND between each pair of the corresponding bits of the two operands.
		b. Bitwise OR (|): performs a bitwise OR between each pair of the corresponding bits of the two operands.
		c. Bitwise XOR (^): performs a bitwise XOR between each pair of the corresponding bits of the two operands.
		d. Bitwise NOT (~): inverts the bits of its operand.
		e. Left shift (<<): shifts the left operand to the left by the number of bits specified by the right operand.
		f. Sign-propagating right shift (>>): shifts the left operand to the right by the number of bits specified by the right operand.
		g. Zero-fill right shift (>>>): shifts the left operand to the right by the number of bits specified by the right operand and fills in new values from the left.
*/

// a. Bitwise AND
// 0 AND 0 = 0
// 0 AND 1 = 0
// 1 AND 0 = 0
// 1 AND 1 = 1

14 & 9;
// 9  (00000000000000000000000000001001)
// 14 (00000000000000000000000000001110)
// -------------------------------------
// 8  (00000000000000000000000000001000)

// b. Bitwise OR
// 0 OR 0 = 0
// 0 OR 1 = 1
// 1 OR 0 = 1
// 1 OR 1 = 1

14 | 9;
// 14 (00000000000000000000000000001110)
// 9  (00000000000000000000000000001001)
// -------------------------------------
// 15 (00000000000000000000000000001111)

// c. Bitwise XOR
// 0 XOR 0 = 0
// 0 XOR 1 = 1
// 1 XOR 0 = 1
// 1 XOR 1 = 0

14 ^ 9;
// 14 (00000000000000000000000000001110)
// 9  (00000000000000000000000000001001)
// -------------------------------------
// 7  (00000000000000000000000000000111)

// d. Bitwise NOT 
// NOT 0 = 1
// NOT 1 = 0
~9 
// 9  (00000000000000000000000000001001)
// -------------------------------------
// -10 (11111111111111111111111111110110) -> Two's complement representation of -10. Converts to 0000000000000000000000000001001 + 1 = 00000000000000000000000000001010 = 10

// e. Left shift
9 << 2; // 36
// 9  (00000000000000000000000000001001)
// -------------------------------------
// 36 (00000000000000000000000000100100)

// f. Sign-propagating right shift
9 >> 2; // 2
// 9  (00000000000000000000000000001001)
// -------------------------------------
// 2  (00000000000000000000000000000010)

-9 >> 2; // -3
// -9 (11111111111111111111111111110111)
// -------------------------------------
// -3 (11111111111111111111111111111101) -> Two's complement representation of -3. Converts to 0000000000000000000000000000010 + 1 = 0000000000000000000000000000011 = 3

// g. Zero-fill right shift
9 >>> 2; // 2
// 9  (00000000000000000000000000001001)
// -------------------------------------
// 2  (00000000000000000000000000000010)

-9 >>> 2; // 1073741821
// -9 				(11111111111111111111111111110111)
// 						-------------------------------------
// 1073741821 (00111111111111111111111111111101)

/*
	[9] Logical operators
		a. Logical AND (&&): returns true if both operands are true; otherwise, returns false.
		b. Logical OR (||): returns true if at least one of the operands is true; otherwise, returns false.
		c. Nullish coalescing (??): returns the right-hand operand when the left-hand operand is null or undefined; otherwise, returns the left-hand operand.
		d. Logical NOT (!): returns false if its single operand can be converted to true; otherwise, returns true.
*/

// a. Logical AND
result = "" && "foo"; // result is assigned "" (empty string)
result = 2 && 0; // result is assigned 0
result = "foo" && 4; // result is assigned 4

function A() {
  console.log("called A");
  return false;
}
function B() {
  console.log("called B");
  return true;
}
console.log(A() && B());
// Logs "called A" to the console due to the call for function A,
// && evaluates to false (function A returns false), then false is logged to the console;
// the AND operator short-circuits here and ignores function B

true || false && false; // true
true && (false || false); // false
(2 === 3) || (4 < 0) && (1 === 1); // false

a1 = true && true; // t && t returns true
a2 = true && false; // t && f returns false
a3 = false && true; // f && t returns false
a4 = false && 3 === 4; // f && f returns false
a5 = "Cat" && "Dog"; // t && t returns "Dog"
a6 = false && "Cat"; // f && t returns false
a7 = "Cat" && false; // t && f returns false
a8 = "" && false; // f && f returns ""
a9 = false && ""; // f && f returns false
a10 = "" && ""; // f && f returns ""
a11 = 3 && 5; // t && t returns 5

// b. Logical OR
function A() {
  console.log("called A");
  return false;
}
function B() {
  console.log("called B");
  return true;
}
console.log(B() || A());
// Logs "called B" due to the function call,
// then logs true (which is the resulting value of the operator)


true || false && false; // returns true, because && is executed first
(true || false) && false; // returns false, because grouping has the highest precedence

true || true; // t || t returns true
false || true; // f || t returns true
true || false; // t || f returns true
false || 3 === 4; // f || f returns false
"Cat" || "Dog"; // t || t returns "Cat"
false || "Cat"; // f || t returns "Cat"
"Cat" || false; // t || f returns "Cat"
"" || false; // f || f returns false
false || ""; // f || f returns ""
false || varObject; // f || object returns varObject

// c. Nullish coalescing
// null || undefined ?? "foo"; // raises a SyntaxError
// true && undefined ?? "foo"; // raises a SyntaxError
(null || undefined) ?? "foo"; // returns "foo"

const nullValue = null;
const emptyText = ""; // falsy
const someNumber = 42;

const valA = nullValue ?? "default for A";
const valB = emptyText ?? "default for B";
const valC = someNumber ?? 0;

console.log(valA); // "default for A"
console.log(valB); // "" (as the empty string is not null or undefined)
console.log(valC); // 42

const count = 0;
const text = "";

const qty = count || 42;
const message = text || "hi!";
console.log(qty); // 42 and not 0
console.log(message); // "hi!" and not ""
const myText = ""; // An empty string (which is also a falsy value)

const notFalsyText = myText || "Hello world";
console.log(notFalsyText); // Hello world

const preservingFalsy = myText ?? "Hi neighborhood";
console.log(preservingFalsy); // '' (as myText is neither undefined nor null)

function a() {
  console.log("a was called");
  return undefined;
}
function b() {
  console.log("b was called");
  return false;
}
function c() {
  console.log("c was called");
  return "foo";
}

console.log(a() ?? c());
// Logs "a was called" then "c was called" and then "foo"
// as a() returned undefined so both expressions are evaluated

console.log(b() ?? c());
// Logs "b was called" then "false"
// as b() returned false (and not null or undefined), the right
// hand side expression was not evaluated

const test = { someFooProp: "hi" };
console.log(test.someFooProp?.toUpperCase() ?? "not available"); // "HI"
console.log(test.someBarProp?.toUpperCase() ?? "not available"); // "not available"





