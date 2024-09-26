/*
	Comparison operators - Check type coercion concept on 5-type_casting.js file
	!: logical NOT operator takes truth to falsity and vice versa. It is typically used with boolean (logical) values. When used with non-boolean values, it returns false if the operand is truthy, and true if the operand is falsy
	== or isLooselyEqual: the equality operator checks whether its two operands are equal, returing a Boolean result. It attempts to convert and compare operands that are on different types
	=== or isStrictlyEqual: the strict equality operator checks whether its two operands are equal, returning a Boolean result. Always considers operands of different types to be different
	!=: the inequality operator checks whether its two operands are not equal, returning a Boolean result. It attempts to convert and compare operands that are on different types
	!==: the strict inequality operator checks whether its two operands are not equal, returning a Boolean result. Always considers operands of different types to be different
	Object.is() or SameValue(): static method determines wether two values are the same value
	SameValueZero(): static method determines wether two values are the same value. It is similar to SameValue() but treats -0 and +0 as the same value
*/

/*
  NOT operator and double NOT operator examples
	If a value can be converted to true, the value is so called truthy
	If a value can be converted to false, the value is so called falsy
	Expressions that can be converted to false:
		- null
		- NaN
		- 0
		- "" or '' (empty string)
		- undefined
	Even through the ! operator can be used with operands that are not boolean values, it can still be considered a boolean operator since its returns value can always be converted to a boolean primitive
	To explicitly convert its return value (or any expression in general) to the corresponding boolean value, use double NOT operator !! or the Boolean constructor
*/
!true // -> false
!false // -> true
!"" // -> true
!"Cat" // -> false
!!true // -> true
!!{} // -> true
!!new Boolean(false) // -> true
!!false // -> false
!!"" // -> true
!!Boolean(false) // -> false


/*
	Equality operator examples
	1. If the operands have the same type, they are compared as follows:
		- Object: return true only if both operands reference to the SAME object
		- String: return true only if both operands have the same characters in the same order
		- Number: return true only if both operands have the same value. +0 and -0 are treated as the same value. If either operand is NaN, return false (NaN is never equal to NaN)
		- Boolean: return true only if operands are both true or both false
		- BigInt: return true only if both operands have the same value
		- Symbol: return true only if both operands reference to the SAME symbol
	2. If one of the operands is null or undefined, the other must be also null or undefined to return true. Otherwise, return false
	3. If one of the operands is an object and the other is a primitive, conver the object to a primitive.
	4. As this steps both operands are converted to primitives (one of String, Number, Boolean, Symbol and BigInt)
		- If they are of the same type, compare them using step 1
		- If one of the operands is a Symbol buth the other is not, return false
		- If one of the operands is a Boolean but the other is not, convert the boolean to a number: true is converted to 1 and false is converted to 0. Then compare the two operands loosely again
		- Number to String: convert the string to a number. Conversaion failure results in NaN, which will guarantee the comparison to return false
		- Number to BigInt: compare by their numeric value. If the number is +Infinity, -Infinity or NaN, return false
		- String to BigInt: convert the string to a BigInt using the same algorithm as the BigInt() constructor. If the string cannot be converted to a BigInt, return false
*/

// Comparison with no type conversion
1 == 1 // -> true
"hello" == "hello" // -> true
true == true // -> true
Symbol("hello") == Symbol("hello") // -> false (Symbols are compared by their identity, not value)

1 != 1 // -> false
'hello' != 'hello' // -> false
'1' != 1 // -> false
0 != false // -> false
3 != '3' // -> false

// Comparison with type conversion
"1" == 1 // -> true
1 == "1" // -> true
0 == false // -> true
0 == null // -> false
0 == undefined // -> false
0 == !!null // -> true
0 == !!undefined // -> true
null == undefined // -> true

"1" != 1; // -> false
1 != "1"; // -> false
0 != false; // -> false
0 != null; // -> true
0 != undefined; // -> true
0 != !!null; // -> false
0 != !null // -> true
0 != !!undefined; // -> false
null != undefined; // -> false

const number1 = new Number(3);
const number2 = new Number(3);
number1 != 3; // false
number1 != number2; // true

// Comparison of objects
const object1 = { key: 'value' };
const object2 = { key: 'value' };
object1 == object2 // -> false
object1 != object2 // -> true

// Comparing strings and String objects
const string1 = "hello";
const string2 = new String("hello");
const string3 = String("hello");
string1 == string2 // -> true
string1 == string3 // -> true
string2 == string3 // -> true

// Comparing Dates and strings
const date = new Date("1995-12-17T03:24:00");
const dateString = d.toString(); // for example: "Sun Dec 17 1995 03:24:00 GMT-0800 (Pacific Standard Time)"
console.log(date == dateString); // -> true

// Comparing arrays and strings
const array1 = [1, 2, 3];
const b = "1,2,3";
array1 == b // -> true
const c = [true, 0.5, 'hey'];
const d = c.toString();
console.log(array1 == d); // -> true

/*
	Strict equality operator examples
	1. If the operands are of different types, return false
	2. If both operands are objects, return true only if they refer to the SAME object
	3. If both operands are null or both operands are undefined, return true
	4. If either operand is NaN, return false (NaN is never equal to NaN)
	5. Otherwise:
		- Numbers must have the same numeric values. +0 and -0 are considered equal
		- Strings must have the same characters in the same order
		- Booleans must be both true or both false
*/

// Comparing operands of the same type
"hello" === "hello" // -> true
"hello" === "hola" // -> false
3 === 3 // -> true
3 === 4.0 // -> false
true === true // -> true
null === null // -> true

"hello" !== "hello"; //	-> false
"hello" !== "hola"; // -> true
3 !== 3; // -> false
3 !== 4; // -> true
true !== true; // -> false
true !== false; // -> true
null !== null; // -> false

// Comparing operands of different types
"3" === 3 // -> false
true === 1 // -> false
null === undefined // -> false
3 === new Number(3) // -> false

'3' !== 3 // -> true
true !== 1 // -> true
null !== undefined // -> true
3 !== new Number(3) // -> true

// Comparing objects
const object3 = { key: 'value' };
const object4 = { key: 'value' };
object3 === object4 // -> false
object3 === object3 // -> true
object3 !== object4 // -> true
object3 !== object3 // -> false

/*
	Object.is() examples
	Determines whether two values are the same value. Two values are the same if one of the following holds:
		- both undefined
		- both null
		- both true or both false
		- both strings of the same length with the same characters in the same order
		- both the same object (both values reference the same object in memory)
		- both BigInts with the same numeric value
		- both symbols that reference the same symbol value
		- both numbers and
			- both +0
			- both -0
			- both NaN
			- or both non-zero, not NaN, and have the same value
	
	Object.is() is not equivalent to the == operator. 
		The == operator applies various coercions to both sides (if they are not the same type) before testing equality, Object.is() doesn't coerce either value
	Object.is() is also not equivalent to the === operator. 
		The === operator (also the == operator) treats the number values -0 and +0 as equal, but NaN as not equal to each other.
*/

Object.is(25, 25); // -> true
Object.is("foo", "foo"); // -> true
Object.is("foo", "bar"); // -> false
Object.is(null, null); // -> true
Object.is(undefined, undefined); // -> true
Object.is(window, window); // -> true
Object.is([], []); // -> false
Object.is({}, {}); // -> false
const foo = { a: 1 };
const bar = { a: 1 };
const sameFoo = foo;
Object.is(foo, foo); // -> true
Object.is(foo, bar); // -> false
Object.is(foo, sameFoo); // -> true
Object.is(0, -0); // -> false
Object.is(+0, -0); // -> false
Object.is(-0, -0); // -> true
Object.is(NaN, 0 / 0); // -> true
Object.is(NaN, Number.NaN); // -> true

/*
Equality Comparisons Table

+----------------------+----------------------+---------+-----------+---------------+----------------+
|          x           |          y           |   ==    |    ===    |  Object.is()  | SameValueZero  |
+----------------------+----------------------+---------+-----------+---------------+----------------+
| undefined            | undefined            |   ✅    |    ✅     |      ✅       |      ✅        |
| null                 | null                 |   ✅    |    ✅     |      ✅       |      ✅        |
| true                 | true                 |   ✅    |    ✅     |      ✅       |      ✅        |
| false                | false                |   ✅    |    ✅     |      ✅       |      ✅        |
| 'foo'                | 'foo'                |   ✅    |    ✅     |      ✅       |      ✅        |
| 0                    | 0                    |   ✅    |    ✅     |      ✅       |      ✅        |
| +0                   | -0                   |   ✅    |    ✅     |      ❌       |      ✅        |
| +0                   | 0                    |   ✅    |    ✅     |      ✅       |      ✅        |
| -0                   | 0                    |   ✅    |    ✅     |      ❌       |      ✅        |
| 0n                   | -0n                  |   ✅    |    ✅     |      ✅       |      ✅        |
| 0                    | false                |   ✅    |    ❌     |      ❌       |      ❌        |
| ""                   | false                |   ✅    |    ❌     |      ❌       |      ❌        |
| ""                   | 0                    |   ✅    |    ❌     |      ❌       |      ❌        |
| '0'                  | 0                    |   ✅    |    ❌     |      ❌       |      ❌        |
| '17'                 | 17                   |   ✅    |    ❌     |      ❌       |      ❌        |
| [1, 2]               | '1,2'                |   ✅    |    ❌     |      ❌       |      ❌        |
| new String('foo')    | 'foo'                |   ✅    |    ❌     |      ❌       |      ❌        |
| null                 | undefined            |   ✅    |    ❌     |      ❌       |      ❌        |
| null                 | false                |   ❌    |    ❌     |      ❌       |      ❌        |
| undefined            | false                |   ❌    |    ❌     |      ❌       |      ❌        |
| { foo: 'bar' }       | { foo: 'bar' }       |   ❌    |    ❌     |      ❌       |      ❌        |
| new String('foo')    | new String('foo')    |   ❌    |    ❌     |      ❌       |      ❌        |
| 0                    | null                 |   ❌    |    ❌     |      ❌       |      ❌        |
| 0                    | NaN                  |   ❌    |    ❌     |      ❌       |      ❌        |
| 'foo'                | NaN                  |   ❌    |    ❌     |      ❌       |      ❌        |
| NaN                  | NaN                  |   ❌    |    ❌     |      ✅       |      ✅        |
+----------------------+----------------------+---------+-----------+---------------+----------------+
*/
