/*
	[Definition]
	A data type describes a set of values and the operations possible on those values.

	[Primitive Types]
	A primitive is one of the simlest types of data that JavaScript has. There are 7 primitive data types:
		1- String: represents a sequence of characters.
		2- Number: represents numeric values.
		3- Boolean: represents a logical entity and can have two values: true or false.
		4- Undefined: represents an undefined value.
		5- Null: represents an intentional absence of any object value.
		6- Symbol: represents a unique identifier.
		7- BigInt: represents integers with arbitrary precision.

	[Autoboxing]
	JavaScript automatically converts primitives to objects when needed. This is called autoboxing.
	For example, when you call a method on a primitive, JavaScript automatically converts the primitive to a wrapper object.
	When the method is called, JavaScript converts the object back to a primitive value.
		1- Number for the primitive number type.
		2- String for the primitive string type.
		3- Boolean for the primitive boolean type.
		4- Symbol for the primitive symbol type.
		5- BigInt for the primitive bigint type.

	[Reference Types]
	1- Object: represents a collection of key/value pairs.
	2- Array: represents a list of elements.
	3- Function: represents a function.
	4- Date: represents a date and time.
	5- RegExp: represents a regular expression.
	6- Map: represents a collection of key/value pairs.
	7- Set: represents a collection of unique values.
	8- WeakMap: represents a collection of key/value pairs in which the keys are weakly referenced.
	9- WeakSet: represents a collection of unique values in which the values are weakly referenced.
*/

/* Autoboxing example for string length */
/* Original code */
const strA = "Autoboxing";
const lengthA = strA.length;

/* Autoboxing as a representative example, there is no real 'strBoxed' created to store the wrapper */
const strB = "Autoboxing";
const strBoxed = new String(strB);
const lengthB = strBoxed.length;
strBoxed = undefined;

/* 
	[1. String]
	- A string is a sequence of characters enclosed in single, double quotes or backticks (for template literals).
	- Strings are immutable, meaning they cannot be changed once created.
	- Strings can be concatenated using the + operator.
	- Strings have a length property that indicates the number of characters in the string.
	- Strings have various methods for manipulating and extracting data from them, due autobxing, you can call methods on string literals.
	- There is no character data type in JavaScript. A character is simply a string with a length of 1.
	- \' to escape a single quote
	- \" to escape a double quote
	- \\ to escape a backslash
	- \n for a new line
	- \t for a tab.
*/

const string1 = "My string";
const string2 = "My string";
const string3 = `My string`;
const string4 = "";
const string5 = `It's my string`;
const string6 = "It's my string";
const string7 = 'My string is an "example".';
const string8 = `My string with a calculated value ${1 + 1}`; // -> My string with a calculated value 2
const string9 = "My concatenated " + "string";
const string10 = "My string".length; // -> 8
const string11 = `My string and ${string5}`; // -> My string and It's my string
const string12 = "Doble quotes do not calculate values ${1 + 1}";
const string13 = "First line\nSecond line";
const string14 = 'New line char "\\n".';
const string15 = `This is a multiline string
	with multiple lines.`;
const string16 = string15[0]; // -> T

/* Common methods applied to strings examples */
const str1 = "Hello, World!";
const str2 = str1.at(0); // -> H
const str3 = str1.charAt(0); // -> H
const str4 = str1.charCodeAt(0); // -> 72
const str5 = str1.codePointAt(0); // -> 72
const str6 = str1.charCodeAt(0).toString(2); // -> 1001000
const str7 = str1.charCodeAt(0).toString(8); // -> 110
const str8 = str1.charCodeAt(0).toString(16); // -> 48
const str9 = str1.charCodeAt(0).toString(32); // -> 1c
const str10 = str1.concat("!!"); // -> Hello, World!!
const str11 = str1.endsWith("World!"); // -> true
const str12 = str1.includes("World"); // -> true
const str13 = str1.indexOf("o"); // -> 4
const str14 = str1.isWellFormed(); // -> true, does not contain any unpaired surrogates (U+D800 to U+DFFF)
const str15 = str1.lastIndexOf("o"); // -> 8
const str16 = str1.localeCompare("Hello, World!"); // -> 0
const str17 = str1.match(/o/g); // -> ['o', 'o']
const str18 = Array.from(str1.matchAll(/o/g)); // -> [['o'], ['o']]
const str19 = str1.normalize(); // -> Hello, World!
const str20 = str1.padEnd(15, "."); // -> Hello, World!..
const str21 = str1.padStart(15, "."); // -> ..Hello, World!
const str22 = str1.repeat(2); // -> Hello, World!Hello, World!
const str23 = str1.replace("World", "JavaScript"); // -> Hello, JavaScript!
const str24 = str1.replaceAll("o", "0"); // -> Hell0, W0rld!
const str25 = str1.search("o"); // -> 4
const str26 = str1.slice(0, 5); // -> Hello
const str27 = str1.slice(-6); // -> World!
const str28 = str1.split(","); // -> ['Hello', ' World!']
const str29 = str1.startsWith("Hello"); // -> true
const str30 = str1.substring(0, 5); // -> Hello - negative index is treated as 0, and indexes are swapped if the start index is greater than the end index
const str31 = str1.toLocaleLowerCase(); // -> hello, world!
const str32 = str1.toLocaleUpperCase(); // -> HELLO, WORLD!
const str33 = str1.toLowerCase(); // -> hello, world!
const str34 = str1.toString(); // -> Hello, World!
const str35 = str1.toUpperCase(); // -> HELLO, WORLD!
const str36 = str1.toWellFormed(); // -> Hello, World!
const str37 = str1.trim(); // -> Hello, World!
const str38 = str1.trimEnd(); // -> Hello, World!
const str39 = str1.trimStart(); // -> Hello, World!
const str40 = str1.valueOf(); // -> Hello, World!
const str41 = [...str1[Symbol.iterator]()]; // -> ['H', 'e', 'l', 'l', 'o', ',', ' ', 'W', 'o', 'r', 'l', 'd', '!']

/*
	2. Number
	- JavaScript has only one type of number.
	- Numbers can be integers or floating-point numbers.
	- Numbers can be written with or without decimals.
	- Numbers can be written using exponential notation.
	- Numbers can be positive, negative, or zero.
	- Numbers can be converted to strings using the toString() method.
	- Numbers have various methods for manipulating and extracting data from them.
	- It is capable of storing positive floating-point numbers between 2 ^ -1074 (Number.MIN_VALUE) and (2 - 2 ^ -52) * 2 ^ 1023 (Number.MAX_VALUE).
	- Safely store integers in the range of -(2 ^ 53 - 1) (Number.MIN_SAFE_INTEGER) and 2 ^ 53 - 1 (Number.MAX_SAFE_INTEGER).
	- Positive values greater than Number.MAX_VALUE are converted to +Infinity.
	- Positive values smaller than Number.MIN_VALUE are converted to +0.
	- Negative values smaller than -Number.MAX_VALUE are converted to -Infinity.
	- Negative values greater than -Number.MIN_VALUE are converted to -0.
	- NaN (Not-a-Number) is a special value that indicates that an operation that was intended to return a number failed.
*/

const number1 = 42;
const number2 = 42.0;
const number3 = 42.3;
const number4 = 4.2e1; // -> 42
const number5 = 4.2e-1; // -> 0.42
const number6 = (42.3).toString(); // -> 42.3
const number7 = (42.3).toFixed(0); // -> 42
const number8 = (42.3).toExponential(0); // -> 4e+1
const number9 = (42.3).toPrecision(2); // -> 42
const number10 = (42.3).valueOf(); // -> 42.3
const number11 = Number.isFinite(42.3); // -> true
const number12 = Number.isInteger(42.3); // -> false
const number13 = Number.isNaN(42.3); // -> false
const number14 = Number.isSafeInteger(42.3); // -> false
const number15 = Number.parseFloat("42.3"); // -> 42.3
const number16 = Number.parseInt("42.3"); // -> 42
const number17 = Number.MAX_VALUE; // -> 1.7976931348623157e+308
const number18 = Number.MAX_SAFE_INTEGER; // -> 9007199254740991
const number19 = Number.MIN_VALUE; // -> 5e-324
const number20 = Number.MIN_SAFE_INTEGER; // -> -9007199254740991
const number21 = Number.NEGATIVE_INFINITY; // -> -Infinity
const number22 = Number.POSITIVE_INFINITY; // -> Infinity
const number23 = Number.NaN; // -> NaN
const number24 = Number.EPSILON; // -> 2.220446049250313e-16

/*
	3. Boolean
	- A boolean represents one of two values: true or false.
	- Booleans are commonly used in conditional statements.
	- Booleans are also used in comparison operators.
	- Booleans can be created using comparison operators.
*/

const bool1 = true;
const bool2 = false;
const bool3 = bool1.valueOf(); // -> true
const bool4 = bool2.toString(); // -> false

/* 
	4. Undefined
	- The undefined data type has only one value: undefined.
	- A variable that has not been assigned a value has the value undefined.
	- A function without a return statement will return undefined.
	- The typeof operator returns "undefined" for undefined values.
*/

const myUndefinedValue = undefined;

/*
	5. Null
	- ECMA null definition: primitive value that represents the intentional absence of any object value
	- The null data type has only one value: null.
	- null is an empty or non-existent value.
	- null is an object.
	- The typeof operator returns "object" for null values.
		In the first implementation of JavaScript, JavaScript values were represented as a type tag and a value. 
		The type tag for objects was 0. null was represented as the NULL pointer (0x00 in most platforms). 
		Consequently, null had 0 as type tag, hence the typeof return value "object".
*/

const myNullValue = null;

/*
	[Difference between null and undefined]
	- null is a type of object. undefined is a type of undefined.
	- null means no value on purpose. undefined means a variable has been declared but not assigned a value.
	- null is a value. undefined is a type.
	- null is a keyword. undefined is a global object.
*/

typeof null; // -> object
typeof undefined; // -> undefined
null === undefined; // -> false
null == undefined; // -> true
let v = 42;
v.test; // -> undefined
v = null;
v.test; // -> TypeError: Cannot read property 'test' of null
v = undefined;
v.test; // -> TypeError: Cannot read property 'test' of undefined

/*
	6. BigInt
	- BigInt is a new primitive type in JavaScript that can store large integers.
	- BigInts are created by appending n to the end of an integer or by calling the BigInt() function.
	- BigInts can be used with mathematical operations.
	- BigInts cannot be mixed with regular numbers.
	- BigInts cannot be used with the Math object.
*/

const bigInt1 = 42n;
const bigInt2 = BigInt(42);
const bigInt3 = BigInt("42");
const bigInt4 = BigInt(Number.MAX_SAFE_INTEGER);
const bigInt5 = BigInt(Number.MAX_SAFE_INTEGER + 1); // -> 9007199254740992n
const bigInt6 = 42n + 42n; // -> 84n
const bigInt7 = 42n - 42n; // -> 0n
const bigInt8 = 42n * 42n; // -> 1764n
const bigInt9 = 42n / 42n; // -> 1n
const bigInt10 = 42n % 42n; // -> 0n
const bigInt11 = 42n ** 42n; // -> 150130937545296572356771972164254457814047970568738777235893533016064n
const bigInt12 = 42n.toString(); // -> 42
const bigInt13 = bigInt1.valueOf(); // -> 42n

/*
	7. Symbol
	- A symbol is a unique and immutable data type that is often used to identify object properties.
	- Symbols are often used to add unique property keys to an object that won't colide with keys any other code might add to the object, 
	and which are hidden from any mechanisms other code will tipically use to access the object.
	- Symbols are created using the Symbol() function.
	- Symbols are guaranteed to be unique.
	- Symbols can be used as object keys.
	- Symbols can be used to add hidden properties to objects.
	- Symbols can be used to create private object members.
	- Symbols can be used to create well-known symbols.
	- The typeof operator returns "symbol" for symbol values.
*/

const symbol1 = Symbol();
const symbol2 = Symbol("nameOrDescription");
const symbol3 = Symbol("nameOrDescription");
const symbolComparison = symbol2 === symbol3; // -> false
console.log(symbol2); // -> Symbol(nameOrDescription)
console.log(symbol2.toString()); // -> 'Symbol(nameOrDescription)'
const symbol2Description = symbol2.description; // -> nameOrDescription

const user = {
  name: "John",
};

const id = Symbol("id");
user[id] = 1;
console.log(user[id]); // -> 1
user[id] = 2;

const sym1 = Symbol("uniqueKey");
const obj1 = {
  [sym1]: "value",
};
console.log(obj1[sym1]); // -> value

/* Difference between using symbol and not using symbol 
	1. Uniqueness: 
		Without Symbol: property keys can collide, leading to potential overwrites
		With Symbol: Each symbol is unique, preventing property key collisions

	2. Privacy:
		Without Symbol: All properties are enumerable and can be accessed via standard methods
		With Symbol: Symbol properties are not enumerable by default, making them hidden from standard iteration methods.

	3. Well-Known Symbols
		Without Symbol: Custom behaviors for build-in objects cannot be defined
		With Symbol: Well-known symbols allow customization of built-in object behavior
*/

const obj2 = {};
obj2["key"] = "value1";
obj2["key"] = "value2"; // Overwrites the previous value
console.log(obj2["key"]); // -> 'value2'

const sym2 = Symbol("key");
const sym3 = Symbol("key");
const obj3 = {};
obj3[sym2] = "value1";
obj3[sym3] = "value2"; // Different key, no overwrite
console.log(obj3[sym2]); // -> 'value1'
console.log(obj3[sym3]); // -> 'value2'

const obj4 = { key: "value" };
for (let key in obj4) {
  console.log(key); // -> 'key'
}

const sym4 = Symbol("key");
const obj5 = { [sym4]: "value" };
for (let key in obj5) {
  console.log(key); // -> (no output)
}
console.log(Object.getOwnPropertySymbols(obj)); // -> [Symbol(key)]

class MyClass {
  [Symbol.iterator]() {
    let step = 0;
    return {
      next() {
        step++;
        if (step === 1) {
          return { value: "first", done: false };
        } else if (step === 2) {
          return { value: "second", done: false };
        }
        return { value: undefined, done: true };
      },
    };
  }
}
const instance = new MyClass();
for (const value of instance) {
  console.log(value); // -> 'first', 'second'
}
