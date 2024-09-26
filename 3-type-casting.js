/*
	[Type]
	Type is a characteristic of a value affecting what kind of data it can store, and the structure that the data will adhere to.
	To remember: JavaScript has dynamic types, meaning that the same variable can hold different types of data at different times.

	[Type conversion]
	Type conversion (or type casting) means transfer of data from one data type to another.
	Implicit conversion happens when the compiler (for compiled languages) or runtime (for script languages like JavaScript) automatically converts one data type into another.
	The source code can also explicitly require a conversion to take place
	- Converting Strings to Numbers
  - Converting Numbers to Strings
	-	Converting Dates to Numbers
	-	Converting Numbers to Dates
	-	Converting Booleans to Numbers
	-	Converting Numbers to Booleans

	[Type coercion]
	Type coercion is the automatic or implicit conversion of values from one data type to another (such as strings to numbers).
	Type conversion is similar to type coercion, because they both convert values from one data type to another with one key difference:
		- type coercion is implicit whereas type conversion can be either implicit or explicit.

*/

// Strings to numbers
const stringToNumberValue1 = "3.14";
const stringToNumberValue2 = "100";
const stringToNumber1 = Number("3.14"); // -> 3.14
const stringToNumber2 = Number(Math.PI); // -> 3.141592653589793
const stringToNumber3 = Number("3.14abc"); // -> NaN
const stringToNumber4 = Number("abc3.14"); // -> NaN
const stringToNumber5 = Number(""); // -> 0
const stringToNumber6 = Number(" "); // -> 0
const stringToNumber7 = Number("John"); // -> NaN
const stringToNumber8 = Number("99 98"); // -> NaN
// parseFloat() examples
const stringToNumber9 = parseFloat("3.14"); // -> 3.14
// parseInt() examples
const stringToNumber10 = parseInt("3.14"); // -> 3
const stringToNumber11 = parseInt("3.14abc"); // -> 3
const stringToNumber12 = parseInt("abc3.14"); // -> NaN
const stringToNumber13 = parseInt(""); // -> NaN
const stringToNumber14 = parseInt("1010", 2); // -> 10
// Unary plus operator (+) examples
const stringToNumber15 = +stringToNumberValue2; // -> 100

// Numbers to strings
const numberToStringValue1 = 123;
const numberToString1 = String(3.14); // -> "3.14"
const numberToString2 = String(3.14e2); // -> "314"
const numberToString3 = String(3.14e-2); // -> "0.0314"
const numberToString4 = String(100 + 23); // -> "123"
const numberToString5 = numberToStringValue.toString(); // -> "123"
// toExponential() examples
const numberToString6 = numberToStringValue1.toExponential(); // -> "1.23e+2"
const numberToString7 = numberToStringValue1.toExponential(2); // -> "1.23e+2"
// toFixed() examples
const numberToString8 = numberToStringValue1.toFixed(); // -> "123"
const numberToString9 = numberToStringValue1.toFixed(2); // -> "123.00"
const numberToString10 = numberToStringValue1.toFixed(6); // -> "123.000000"
// toPrecision() examples
const numberToString11 = numberToStringValue1.toPrecision(); // -> "123"
const numberToString12 = numberToStringValue1.toPrecision(2); // -> "1.2e+2"
const numberToString13 = numberToStringValue1.toPrecision(6); // -> "123.000"

// Dates to numbers
const dateToNumberValue1 = new Date();
const dateToNumber1 = Number(dateToNumberValue1); // -> 1630035946506
// getTime() examples
const dateToNumber2 = dateToNumberValue1.getTime(); // -> 1630035946506

// Dates to Strings
const dateToStringValue1 = new Date();
const dateToString1 = dateToStringValue1.toString(); // -> "Sun Aug 29 2021 17:39:06 GMT+0300 (East Africa Time)"
const dateToString2 = dateToStringValue1.toDateString(); // -> "Sun Aug 29 2021"
const dateToString3 = dateToStringValue1.toTimeString(); // -> "17:39:06 GMT+0300 (East Africa Time)"
const dateToString4 = dateToStringValue1.toISOString(); // -> "2021-08-29T14:39:06.506Z"
const dateToString5 = dateToStringValue1.toUTCString(); // -> "Sun, 29 Aug 2021 14:39:06 GMT"
const dateToString6 = dateToStringValue1.toLocaleString(); // -> "8/29/2021, 5:39:06 PM"
const dateToString7 = dateToStringValue1.toLocaleDateString(); // -> "8/29/2021"
const dateToString8 = dateToStringValue1.toLocaleTimeString(); // -> "5:39:06 PM"
const dateToString9 = dateToStringValue1.toDateString(); // -> "Sun Aug 29 2021"
// toLocaleString() examples
const dateToString10 = dateToStringValue1.toLocaleString("en-US"); // -> "8/29/2021, 5:39:06 PM"
const dateToString11 = dateToStringValue1.toLocaleString("en-GB"); // -> "29/08/2021, 17:39:06"
const dateToString12 = dateToStringValue1.toLocaleString("ar-EG"); // -> "٢٩‏/٠٨‏/٢٠٢١ ٥:٣٩:٠٦ م"
// toLocaleDateString() examples
const dateToString13 = dateToStringValue1.toLocaleDateString("en-US"); // -> "8/29/2021"
const dateToString14 = dateToStringValue1.toLocaleDateString("en-GB"); // -> "29/08/2021"
const dateToString15 = dateToStringValue1.toLocaleDateString("ar-EG"); // -> "٢٩‏/٠٨‏/٢٠٢١"
// toLocaleTimeString() examples
const dateToString16 = dateToStringValue1.toLocaleTimeString("en-US"); // -> "5:39:06 PM"
const dateToString17 = dateToStringValue1.toLocaleTimeString("en-GB"); // -> "17:39:06"
const dateToString18 = dateToStringValue1.toLocaleTimeString("ar-EG"); // -> "٥:٣٩:٠٦ م"

// Boolean to string
const booleanToStringValue1 = true;
const booleanToString1 = String(true); // -> "true"
const booleanToString2 = String(false); // -> "false"
// toString() examples
const booleanToString3 = booleanToStringValue1.toString(); // -> "true"
const booleanToString4 = booleanToStringValue1.toString(); // -> "false"

/*
	[Boolean coercion]

	Booleans are returned as-is.
	undefined turns into false.
	null turns into false.
	0, -0, and NaN turn into false; other numbers turn into true.
	0n turns into false; other BigInts turn into true.
	The empty string "" turns into false; other strings turn into true.
	Symbols turn into true.
	All objects become true.
*/

/*
	[String coercion]

	Strings are returned as-is.
	undefined turns into "undefined".
	null turns into "null".
	true turns into "true"; false turns into "false".
	Numbers are converted with the same algorithm as toString(10).
	BigInts are converted with the same algorithm as toString(10).
	Symbols throw a TypeError.
	Objects are first converted to a primitive by calling its [Symbol.toPrimitive]() (with "string" as hint), toString(), and valueOf() methods, in that order. The resulting primitive is then converted to a string.
*/

/* 
	[Number coercion]

	Numbers are returned as-is.
	undefined turns into NaN.
	null turns into 0.
	true turns into 1; false turns into 0.
	Strings are converted by parsing them as if they contain a number literal. Parsing failure results in NaN. There are some minor differences compared to an actual number literal:
	Leading and trailing whitespace/line terminators are ignored.
	A leading 0 digit does not cause the number to become an octal literal (or get rejected in strict mode).
	+ and - are allowed at the start of the string to indicate its sign. (In actual code, they "look like" part of the literal, but are actually separate unary operators.) However, the sign can only appear once, and must not be followed by whitespace.
	Infinity and -Infinity are recognized as literals. In actual code, they are global variables.
	Empty or whitespace-only strings are converted to 0.
	Numeric separators are not allowed.
	BigInts throw a TypeError to prevent unintended implicit coercion causing loss of precision.
	Symbols throw a TypeError.
	Objects are first converted to a primitive by calling their [Symbol.toPrimitive]() (with "number" as hint), valueOf(), and toString() methods, in that order. The resulting primitive is then converted to a number.
*/

/*
	[Big Int coercion]

	BigInts are returned as-is.
	undefined and null throw a TypeError.
	true turns into 1n; false turns into 0n.
	Strings are converted by parsing them as if they contain an integer literal. Any parsing failure results in a SyntaxError. The syntax is a subset of string numeric literals, where decimal points or exponent indicators are not allowed.
	Numbers throw a TypeError to prevent unintended implicit coercion causing loss of precision.
	Symbols throw a TypeError.
	Objects are first converted to a primitive by calling their [Symbol.toPrimitive]() (with "number" as hint), valueOf(), and toString() methods, in that order. The resulting primitive is then converted to a BigInt.
*/

/*
Original Value    | Converted to Number | Converted to String | Converted to Boolean
------------------------------------------------------------------------------------
false             | 0                   | "false"             | false
true              | 1                   | "true"              | true
0                 | 0                   | "0"                 | false
-0                | 0                   | "0"                 | false
1                 | 1                   | "1"                 | true
"0"               | 0                   | "0"                 | true [!]
"000"             | 0                   | "000"               | true [!]
"1"               | 1                   | "1"                 | true
NaN               | NaN                 | "NaN"               | false
Infinity          | Infinity            | "Infinity"          | true
-Infinity         | -Infinity           | "-Infinity"         | true
""                | 0 [!]               | ""                  | false [!]
"20"              | 20                  | "20"                | true
"twenty"          | NaN                 | "twenty"            | true
[]                | 0 [!]               | ""                  | true
[20]              | 20 [!]              | "20"                | true
[10,20]           | NaN                 | "10,20"             | true
["twenty"]        | NaN                 | "twenty"            | true
["ten","twenty"]  | NaN                 | "ten,twenty"        | true
function(){}      | NaN                 | "function(){}"      | true
{}                | NaN                 | "[object Object]"   | true
null              | 0 [!]               | "null"              | false
undefined         | NaN                 | "undefined"         | false
0n                | 0                   | "0"                 | false
1n                | 1                   | "1"                 | true
BigInt(0)         | 0                   | "0"                 | false
BigInt(1)         | 1                   | "1"                 | true
Symbol()          | TypeError           | TypeError           | true
------------------------------------------------------------------------------------
[!] - The conversion is not intuitive.
*/

// == operator with false at left side
const equalOperatorWithFalseAtLeft1 = false == false; // -> true
const equalOperatorWithFalseAtLeft2 = false == true; // -> false
const equalOperatorWithFalseAtLeft3 = false == 0; // -> true
const equalOperatorWithFalseAtLeft4 = false == ""; // -> true
const equalOperatorWithFalseAtLeft5 = false == null; // -> false
const equalOperatorWithFalseAtLeft6 = false == undefined; // -> false
const equalOperatorWithFalseAtLeft7 = false == NaN; // -> false
const equalOperatorWithFalseAtLeft8 = false == Infinity; // -> false
const equalOperatorWithFalseAtLeft9 = false == -Infinity; // -> false
const equalOperatorWithFalseAtLeft10 = false == 1; // -> false
const equalOperatorWithFalseAtLeft11 = false == "0"; // -> true
const equalOperatorWithFalseAtLeft12 = false == "000"; // -> true
const equalOperatorWithFalseAtLeft13 = false == "1"; // -> false
const equalOperatorWithFalseAtLeft14 = false == "twenty"; // -> false
const equalOperatorWithFalseAtLeft15 = false == []; // -> true
const equalOperatorWithFalseAtLeft16 = false == [0]; // -> true
const equalOperatorWithFalseAtLeft17 = false == [1]; // -> false
const equalOperatorWithFalseAtLeft18 = false == [20]; // -> false
const equalOperatorWithFalseAtLeft19 = false == [10, 20]; // -> false
const equalOperatorWithFalseAtLeft20 = false == ["twenty"]; // -> false
const equalOperatorWithFalseAtLeft21 = false == ["ten", "twenty"]; // -> false
const equalOperatorWithFalseAtLeft22 = false == function () {}; // -> false
const equalOperatorWithFalseAtLeft23 = false == {}; // -> false
const equalOperatorWithFalseAtLeft24 = false == 0n; // -> true
const equalOperatorWithFalseAtLeft25 = false == 1n; // -> false
const equalOperatorWithFalseAtLeft26 = false == BigInt(0); // -> true
const equalOperatorWithFalseAtLeft27 = false == BigInt(1); // -> false
const equalOperatorWithFalseAtLeft28 = false == Symbol(); // -> false

// == operator with true at left side
const equalOperatorWithTrueAtLeft1 = true == false; // -> false
const equalOperatorWithTrueAtLeft2 = true == true; // -> true
const equalOperatorWithTrueAtLeft3 = true == 0; // -> false
const equalOperatorWithTrueAtLeft4 = true == ""; // -> false
const equalOperatorWithTrueAtLeft5 = true == null; // -> false
const equalOperatorWithTrueAtLeft6 = true == undefined; // -> false
const equalOperatorWithTrueAtLeft7 = true == NaN; // -> false
const equalOperatorWithTrueAtLeft8 = true == Infinity; // -> false
const equalOperatorWithTrueAtLeft9 = true == -Infinity; // -> false
const equalOperatorWithTrueAtLeft10 = true == 1; // -> true
const equalOperatorWithTrueAtLeft11 = true == "0"; // -> false
const equalOperatorWithTrueAtLeft12 = true == "000"; // -> false
const equalOperatorWithTrueAtLeft13 = true == "1"; // -> true
const equalOperatorWithTrueAtLeft14 = true == "twenty"; // -> false
const equalOperatorWithTrueAtLeft15 = true == []; // -> false
const equalOperatorWithTrueAtLeft16 = true == [0]; // -> false
const equalOperatorWithTrueAtLeft17 = true == [1]; // -> true
const equalOperatorWithTrueAtLeft18 = true == [20]; // -> false
const equalOperatorWithTrueAtLeft19 = true == [10, 20]; // -> false
const equalOperatorWithTrueAtLeft20 = true == ["twenty"]; // -> false
const equalOperatorWithTrueAtLeft21 = true == ["ten", "twenty"]; // -> false
const equalOperatorWithTrueAtLeft22 = true == function () {}; // -> false
const equalOperatorWithTrueAtLeft23 = true == {}; // -> false
const equalOperatorWithTrueAtLeft24 = true == 0n; // -> false
const equalOperatorWithTrueAtLeft25 = true == 1n; // -> true
const equalOperatorWithTrueAtLeft26 = true == BigInt(0); // -> false
const equalOperatorWithTrueAtLeft27 = true == BigInt(1); // -> true
const equalOperatorWithTrueAtLeft28 = true == Symbol(); // -> false

// == operator with 0 at left side
const equalOperatorWithZeroAtLeft1 = 0 == false; // -> true
const equalOperatorWithZeroAtLeft2 = 0 == true; // -> false
const equalOperatorWithZeroAtLeft3 = 0 == 0; // -> true
const equalOperatorWithZeroAtLeft4 = 0 == ""; // -> true
const equalOperatorWithZeroAtLeft5 = 0 == null; // -> false
const equalOperatorWithZeroAtLeft6 = 0 == undefined; // -> false
const equalOperatorWithZeroAtLeft7 = 0 == NaN; // -> false
const equalOperatorWithZeroAtLeft8 = 0 == Infinity; // -> false
const equalOperatorWithZeroAtLeft9 = 0 == -Infinity; // -> false
const equalOperatorWithZeroAtLeft10 = 0 == 1; // -> false
const equalOperatorWithZeroAtLeft11 = 0 == "0"; // -> true
const equalOperatorWithZeroAtLeft12 = 0 == "000"; // -> true
const equalOperatorWithZeroAtLeft13 = 0 == "1"; // -> false
const equalOperatorWithZeroAtLeft14 = 0 == "twenty"; // -> false
const equalOperatorWithZeroAtLeft15 = 0 == []; // -> true
const equalOperatorWithZeroAtLeft16 = 0 == [0]; // -> true
const equalOperatorWithZeroAtLeft17 = 0 == [1]; // -> false
const equalOperatorWithZeroAtLeft18 = 0 == [20]; // -> false
const equalOperatorWithZeroAtLeft19 = 0 == [10, 20]; // -> false
const equalOperatorWithZeroAtLeft20 = 0 == ["twenty"]; // -> false
const equalOperatorWithZeroAtLeft21 = 0 == ["ten", "twenty"]; // -> false
const equalOperatorWithZeroAtLeft22 = 0 == function () {}; // -> false
const equalOperatorWithZeroAtLeft23 = 0 == {}; // -> false
const equalOperatorWithZeroAtLeft24 = 0 == 0n; // -> true
const equalOperatorWithZeroAtLeft25 = 0 == 1n; // -> false
const equalOperatorWithZeroAtLeft26 = 0 == BigInt(0); // -> true
const equalOperatorWithZeroAtLeft27 = 0 == BigInt(1); // -> false
const equalOperatorWithZeroAtLeft28 = 0 == Symbol(); // -> false

// == operator with 1 at left side
const equalOperatorWithOneAtLeft1 = 1 == false; // -> false
const equalOperatorWithOneAtLeft2 = 1 == true; // -> true
const equalOperatorWithOneAtLeft3 = 1 == 0; // -> false
const equalOperatorWithOneAtLeft4 = 1 == ""; // -> false
const equalOperatorWithOneAtLeft5 = 1 == null; // -> false
const equalOperatorWithOneAtLeft6 = 1 == undefined; // -> false
const equalOperatorWithOneAtLeft7 = 1 == NaN; // -> false
const equalOperatorWithOneAtLeft8 = 1 == Infinity; // -> false
const equalOperatorWithOneAtLeft9 = 1 == -Infinity; // -> false
const equalOperatorWithOneAtLeft10 = 1 == 1; // -> true
const equalOperatorWithOneAtLeft11 = 1 == "0"; // -> false
const equalOperatorWithOneAtLeft12 = 1 == "000"; // -> false
const equalOperatorWithOneAtLeft13 = 1 == "1"; // -> true
const equalOperatorWithOneAtLeft14 = 1 == "twenty"; // -> false
const equalOperatorWithOneAtLeft15 = 1 == []; // -> false
const equalOperatorWithOneAtLeft16 = 1 == [0]; // -> false
const equalOperatorWithOneAtLeft17 = 1 == [1]; // -> true
const equalOperatorWithOneAtLeft18 = 1 == [20]; // -> false
const equalOperatorWithOneAtLeft19 = 1 == [10, 20]; // -> false
const equalOperatorWithOneAtLeft20 = 1 == ["twenty"]; // -> false
const equalOperatorWithOneAtLeft21 = 1 == ["ten", "twenty"]; // -> false
const equalOperatorWithOneAtLeft22 = 1 == function () {}; // -> false
const equalOperatorWithOneAtLeft23 = 1 == {}; // -> false
const equalOperatorWithOneAtLeft24 = 1 == 0n; // -> false
const equalOperatorWithOneAtLeft25 = 1 == 1n; // -> true
const equalOperatorWithOneAtLeft26 = 1 == BigInt(0); // -> false
const equalOperatorWithOneAtLeft27 = 1 == BigInt(1); // -> true
const equalOperatorWithOneAtLeft28 = 1 == Symbol(); // -> false

// == operator with '0' at left side
const equalOperatorWithZeroStringAtLeft1 = "0" == false; // -> true
const equalOperatorWithZeroStringAtLeft2 = "0" == true; // -> false
const equalOperatorWithZeroStringAtLeft3 = "0" == 0; // -> true
const equalOperatorWithZeroStringAtLeft4 = "0" == ""; // -> false
const equalOperatorWithZeroStringAtLeft5 = "0" == null; // -> false
const equalOperatorWithZeroStringAtLeft6 = "0" == undefined; // -> false
const equalOperatorWithZeroStringAtLeft7 = "0" == NaN; // -> false
const equalOperatorWithZeroStringAtLeft8 = "0" == Infinity; // -> false
const equalOperatorWithZeroStringAtLeft9 = "0" == -Infinity; // -> false
const equalOperatorWithZeroStringAtLeft10 = "0" == 1; // -> false
const equalOperatorWithZeroStringAtLeft11 = "0" == "0"; // -> true
const equalOperatorWithZeroStringAtLeft12 = "0" == "000"; // -> true
const equalOperatorWithZeroStringAtLeft13 = "0" == "1"; // -> false
const equalOperatorWithZeroStringAtLeft14 = "0" == "twenty"; // -> false
const equalOperatorWithZeroStringAtLeft15 = "0" == []; // -> false
const equalOperatorWithZeroStringAtLeft16 = "0" == [0]; // -> true
const equalOperatorWithZeroStringAtLeft17 = "0" == [1]; // -> false
const equalOperatorWithZeroStringAtLeft18 = "0" == [20]; // -> false
const equalOperatorWithZeroStringAtLeft19 = "0" == [10, 20]; // -> false
const equalOperatorWithZeroStringAtLeft20 = "0" == ["twenty"]; // -> false
const equalOperatorWithZeroStringAtLeft21 = "0" == ["ten", "twenty"]; // -> false
const equalOperatorWithZeroStringAtLeft22 = "0" == function () {}; // -> false
const equalOperatorWithZeroStringAtLeft23 = "0" == {}; // -> false
const equalOperatorWithZeroStringAtLeft24 = "0" == 0n; // -> true
const equalOperatorWithZeroStringAtLeft25 = "0" == 1n; // -> false
const equalOperatorWithZeroStringAtLeft26 = "0" == BigInt(0); // -> true
const equalOperatorWithZeroStringAtLeft27 = "0" == BigInt(1); // -> false
const equalOperatorWithZeroStringAtLeft28 = "0" == Symbol(); // -> false

// == operator with '000' at left side
const equalOperatorWithTripleZeroStringAtLeft1 = "000" == false; // -> true
const equalOperatorWithTripleZeroStringAtLeft2 = "000" == true; // -> false
const equalOperatorWithTripleZeroStringAtLeft3 = "000" == 0; // -> true
const equalOperatorWithTripleZeroStringAtLeft4 = "000" == ""; // -> false
const equalOperatorWithTripleZeroStringAtLeft5 = "000" == null; // -> false
const equalOperatorWithTripleZeroStringAtLeft6 = "000" == undefined; // -> false
const equalOperatorWithTripleZeroStringAtLeft7 = "000" == NaN; // -> false
const equalOperatorWithTripleZeroStringAtLeft8 = "000" == Infinity; // -> false
const equalOperatorWithTripleZeroStringAtLeft9 = "000" == -Infinity; // -> false
const equalOperatorWithTripleZeroStringAtLeft10 = "000" == 1; // -> false
const equalOperatorWithTripleZeroStringAtLeft11 = "000" == "0"; // -> true
const equalOperatorWithTripleZeroStringAtLeft12 = "000" == "000"; // -> true
const equalOperatorWithTripleZeroStringAtLeft13 = "000" == "1"; // -> false
const equalOperatorWithTripleZeroStringAtLeft14 = "000" == "twenty"; // -> false
const equalOperatorWithTripleZeroStringAtLeft15 = "000" == []; // -> false
const equalOperatorWithTripleZeroStringAtLeft16 = "000" == [0]; // -> true
const equalOperatorWithTripleZeroStringAtLeft17 = "000" == [1]; // -> false
const equalOperatorWithTripleZeroStringAtLeft18 = "000" == [20]; // -> false
const equalOperatorWithTripleZeroStringAtLeft19 = "000" == [10, 20]; // -> false
const equalOperatorWithTripleZeroStringAtLeft20 = "000" == ["twenty"]; // -> false
const equalOperatorWithTripleZeroStringAtLeft21 = "000" == ["ten", "twenty"]; // -> false
const equalOperatorWithTripleZeroStringAtLeft22 = "000" == function () {}; // -> false
const equalOperatorWithTripleZeroStringAtLeft23 = "000" == {}; // -> false
const equalOperatorWithTripleZeroStringAtLeft24 = "000" == 0n; // -> true
const equalOperatorWithTripleZeroStringAtLeft25 = "000" == 1n; // -> false
const equalOperatorWithTripleZeroStringAtLeft26 = "000" == BigInt(0); // -> true
const equalOperatorWithTripleZeroStringAtLeft27 = "000" == BigInt(1); // -> false
const equalOperatorWithTripleZeroStringAtLeft28 = "000" == Symbol(); // -> false

// == operator with '1' at left side
const equalOperatorWithOneStringAtLeft1 = "1" == false; // -> false
const equalOperatorWithOneStringAtLeft2 = "1" == true; // -> true
const equalOperatorWithOneStringAtLeft3 = "1" == 0; // -> false
const equalOperatorWithOneStringAtLeft4 = "1" == ""; // -> false
const equalOperatorWithOneStringAtLeft5 = "1" == null; // -> false
const equalOperatorWithOneStringAtLeft6 = "1" == undefined; // -> false
const equalOperatorWithOneStringAtLeft7 = "1" == NaN; // -> false
const equalOperatorWithOneStringAtLeft8 = "1" == Infinity; // -> false
const equalOperatorWithOneStringAtLeft9 = "1" == -Infinity; // -> false
const equalOperatorWithOneStringAtLeft10 = "1" == 1; // -> true
const equalOperatorWithOneStringAtLeft11 = "1" == "0"; // -> false
const equalOperatorWithOneStringAtLeft12 = "1" == "000"; // -> false
const equalOperatorWithOneStringAtLeft13 = "1" == "1"; // -> true
const equalOperatorWithOneStringAtLeft14 = "1" == "twenty"; // -> false
const equalOperatorWithOneStringAtLeft15 = "1" == []; // -> false
const equalOperatorWithOneStringAtLeft16 = "1" == [0]; // -> false
const equalOperatorWithOneStringAtLeft17 = "1" == [1]; // -> true
const equalOperatorWithOneStringAtLeft18 = "1" == [20]; // -> false
const equalOperatorWithOneStringAtLeft19 = "1" == [10, 20]; // -> false
const equalOperatorWithOneStringAtLeft20 = "1" == ["twenty"]; // -> false
const equalOperatorWithOneStringAtLeft21 = "1" == ["ten", "twenty"]; // -> false
const equalOperatorWithOneStringAtLeft22 = "1" == function () {}; // -> false
const equalOperatorWithOneStringAtLeft23 = "1" == {}; // -> false
const equalOperatorWithOneStringAtLeft24 = "1" == 0n; // -> false
const equalOperatorWithOneStringAtLeft25 = "1" == 1n; // -> true
const equalOperatorWithOneStringAtLeft26 = "1" == BigInt(0); // -> false
const equalOperatorWithOneStringAtLeft27 = "1" == BigInt(1); // -> true
const equalOperatorWithOneStringAtLeft28 = "1" == Symbol(); // -> false

// == operator with 'twenty' at left side
// TL;DR: "twenty" is equal to "twenty" and ["twenty"]
const equalOperatorWithTwentyStringAtLeft = "twenty" == false; // -> false
const equalOperatorWithTwentyStringAtLeft1 = "twenty" == true; // -> false
const equalOperatorWithTwentyStringAtLeft2 = "twenty" == 0; // -> false
const equalOperatorWithTwentyStringAtLeft3 = "twenty" == ""; // -> false
const equalOperatorWithTwentyStringAtLeft4 = "twenty" == null; // -> false
const equalOperatorWithTwentyStringAtLeft5 = "twenty" == undefined; // -> false
const equalOperatorWithTwentyStringAtLeft6 = "twenty" == NaN; // -> false
const equalOperatorWithTwentyStringAtLeft7 = "twenty" == Infinity; // -> false
const equalOperatorWithTwentyStringAtLeft8 = "twenty" == -Infinity; // -> false
const equalOperatorWithTwentyStringAtLeft9 = "twenty" == 1; // -> false
const equalOperatorWithTwentyStringAtLeft10 = "twenty" == "0"; // -> false
const equalOperatorWithTwentyStringAtLeft11 = "twenty" == "000"; // -> false
const equalOperatorWithTwentyStringAtLeft12 = "twenty" == "1"; // -> false
const equalOperatorWithTwentyStringAtLeft13 = "twenty" == []; // -> false
const equalOperatorWithTwentyStringAtLeft14 = "twenty" == [0]; // -> false
const equalOperatorWithTwentyStringAtLeft15 = "twenty" == [1]; // -> false
const equalOperatorWithTwentyStringAtLeft16 = "twenty" == [20]; // -> false
const equalOperatorWithTwentyStringAtLeft17 = "twenty" == [10, 20]; // -> false
const equalOperatorWithTwentyStringAtLeft18 = "twenty" == ["twenty"]; // -> true
const equalOperatorWithTwentyStringAtLeft19 = "twenty" == ["ten", "twenty"]; // -> false
const equalOperatorWithTwentyStringAtLeft20 = "twenty" == function () {}; // -> false
const equalOperatorWithTwentyStringAtLeft21 = "twenty" == {}; // -> false
const equalOperatorWithTwentyStringAtLeft22 = "twenty" == 0n; // -> false
const equalOperatorWithTwentyStringAtLeft23 = "twenty" == 1n; // -> false
const equalOperatorWithTwentyStringAtLeft24 = "twenty" == BigInt(0); // -> false
const equalOperatorWithTwentyStringAtLeft25 = "twenty" == BigInt(1); // -> false
const equalOperatorWithTwentyStringAtLeft26 = "twenty" == Symbol(); // -> false

// == operator with [] at left side
// TL;DR: [] is equal to false, 0, "", "0", "000", [], 0n and BigInt(0)
const equalOperatorWithEmptyArrayAtLeft1 = [] == false; // -> true
const equalOperatorWithEmptyArrayAtLeft2 = [] == true; // -> false
const equalOperatorWithEmptyArrayAtLeft3 = [] == 0; // -> true
const equalOperatorWithEmptyArrayAtLeft4 = [] == ""; // -> true
const equalOperatorWithEmptyArrayAtLeft5 = [] == null; // -> false
const equalOperatorWithEmptyArrayAtLeft6 = [] == undefined; // -> false
const equalOperatorWithEmptyArrayAtLeft7 = [] == NaN; // -> false
const equalOperatorWithEmptyArrayAtLeft8 = [] == Infinity; // -> false
const equalOperatorWithEmptyArrayAtLeft9 = [] == -Infinity; // -> false
const equalOperatorWithEmptyArrayAtLeft10 = [] == 1; // -> false
const equalOperatorWithEmptyArrayAtLeft11 = [] == "0"; // -> false
const equalOperatorWithEmptyArrayAtLeft12 = [] == "000"; // -> false
const equalOperatorWithEmptyArrayAtLeft13 = [] == "1"; // -> false
const equalOperatorWithEmptyArrayAtLeft14 = [] == "twenty"; // -> false
const equalOperatorWithEmptyArrayAtLeft15 = [] == []; // -> true
const equalOperatorWithEmptyArrayAtLeft16 = [] == [0]; // -> false
const equalOperatorWithEmptyArrayAtLeft17 = [] == [1]; // -> false
const equalOperatorWithEmptyArrayAtLeft18 = [] == [20]; // -> false
const equalOperatorWithEmptyArrayAtLeft19 = [] == [10, 20]; // -> false
const equalOperatorWithEmptyArrayAtLeft20 = [] == ["twenty"]; // -> false
const equalOperatorWithEmptyArrayAtLeft21 = [] == ["ten", "twenty"]; // -> false
const equalOperatorWithEmptyArrayAtLeft22 = [] == function () {}; // -> false
const equalOperatorWithEmptyArrayAtLeft23 = [] == {}; // -> false
const equalOperatorWithEmptyArrayAtLeft24 = [] == 0n; // -> false
const equalOperatorWithEmptyArrayAtLeft25 = [] == 1n; // -> false
const equalOperatorWithEmptyArrayAtLeft26 = [] == BigInt(0); // -> false
const equalOperatorWithEmptyArrayAtLeft27 = [] == BigInt(1); // -> false
const equalOperatorWithEmptyArrayAtLeft28 = [] == Symbol(); // -> false

// == operator with [0] at left side
// TL;DR: [0] is equal to false, 0, "", "0", "000", [], 0n and BigInt(0)
const equalOperatorWithSingleZeroArrayAtLeft1 = [0] == false; // -> true
const equalOperatorWithSingleZeroArrayAtLeft2 = [0] == true; // -> false
const equalOperatorWithSingleZeroArrayAtLeft3 = [0] == 0; // -> true
const equalOperatorWithSingleZeroArrayAtLeft4 = [0] == ""; // -> true
const equalOperatorWithSingleZeroArrayAtLeft5 = [0] == null; // -> false
const equalOperatorWithSingleZeroArrayAtLeft6 = [0] == undefined; // -> false
const equalOperatorWithSingleZeroArrayAtLeft7 = [0] == NaN; // -> false
const equalOperatorWithSingleZeroArrayAtLeft8 = [0] == Infinity; // -> false
const equalOperatorWithSingleZeroArrayAtLeft9 = [0] == -Infinity; // -> false
const equalOperatorWithSingleZeroArrayAtLeft10 = [0] == 1; // -> false
const equalOperatorWithSingleZeroArrayAtLeft11 = [0] == "0"; // -> true
const equalOperatorWithSingleZeroArrayAtLeft12 = [0] == "000"; // -> true
const equalOperatorWithSingleZeroArrayAtLeft13 = [0] == "1"; // -> false
const equalOperatorWithSingleZeroArrayAtLeft14 = [0] == "twenty"; // -> false
const equalOperatorWithSingleZeroArrayAtLeft15 = [0] == []; // -> false
const equalOperatorWithSingleZeroArrayAtLeft16 = [0] == [0]; // -> false
const equalOperatorWithSingleZeroArrayAtLeft17 = [0] == [1]; // -> false
const equalOperatorWithSingleZeroArrayAtLeft18 = [0] == [20]; // -> false
const equalOperatorWithSingleZeroArrayAtLeft19 = [0] == [10, 20]; // -> false
const equalOperatorWithSingleZeroArrayAtLeft20 = [0] == ["twenty"]; // -> false
const equalOperatorWithSingleZeroArrayAtLeft21 = [0] == ["ten", "twenty"]; // -> false
const equalOperatorWithSingleZeroArrayAtLeft22 = [0] == function () {}; // -> false
const equalOperatorWithSingleZeroArrayAtLeft23 = [0] == {}; // -> false
const equalOperatorWithSingleZeroArrayAtLeft24 = [0] == 0n; // -> true
const equalOperatorWithSingleZeroArrayAtLeft25 = [0] == 1n; // -> false
const equalOperatorWithSingleZeroArrayAtLeft26 = [0] == BigInt(0); // -> true
const equalOperatorWithSingleZeroArrayAtLeft27 = [0] == BigInt(1); // -> false
const equalOperatorWithSingleZeroArrayAtLeft28 = [0] == Symbol(); // -> false

// == operator with [1] at left side
// TL;DR: [1] is equal to true, "1", 1, 1n and BigInt(1)
const equalOperatorWithSingleOneArrayAtLeft1 = [1] == false; // -> false
const equalOperatorWithSingleOneArrayAtLeft2 = [1] == true; // -> true
const equalOperatorWithSingleOneArrayAtLeft3 = [1] == 0; // -> false
const equalOperatorWithSingleOneArrayAtLeft4 = [1] == ""; // -> false
const equalOperatorWithSingleOneArrayAtLeft5 = [1] == null; // -> false
const equalOperatorWithSingleOneArrayAtLeft6 = [1] == undefined; // -> false
const equalOperatorWithSingleOneArrayAtLeft7 = [1] == NaN; // -> false
const equalOperatorWithSingleOneArrayAtLeft8 = [1] == Infinity; // -> false
const equalOperatorWithSingleOneArrayAtLeft9 = [1] == -Infinity; // -> false
const equalOperatorWithSingleOneArrayAtLeft10 = [1] == 1; // -> true
const equalOperatorWithSingleOneArrayAtLeft11 = [1] == "0"; // -> false
const equalOperatorWithSingleOneArrayAtLeft12 = [1] == "000"; // -> false
const equalOperatorWithSingleOneArrayAtLeft13 = [1] == "1"; // -> true
const equalOperatorWithSingleOneArrayAtLeft14 = [1] == "twenty"; // -> false
const equalOperatorWithSingleOneArrayAtLeft15 = [1] == []; // -> false
const equalOperatorWithSingleOneArrayAtLeft16 = [1] == [0]; // -> false
const equalOperatorWithSingleOneArrayAtLeft17 = [1] == [1]; // -> false
const equalOperatorWithSingleOneArrayAtLeft18 = [1] == [20]; // -> false
const equalOperatorWithSingleOneArrayAtLeft19 = [1] == [10, 20]; // -> false
const equalOperatorWithSingleOneArrayAtLeft20 = [1] == ["twenty"]; // -> false
const equalOperatorWithSingleOneArrayAtLeft21 = [1] == ["ten", "twenty"]; // -> false
const equalOperatorWithSingleOneArrayAtLeft22 = [1] == function () {}; // -> false
const equalOperatorWithSingleOneArrayAtLeft23 = [1] == {}; // -> false
const equalOperatorWithSingleOneArrayAtLeft24 = [1] == 0n; // -> false
const equalOperatorWithSingleOneArrayAtLeft25 = [1] == 1n; // -> true
const equalOperatorWithSingleOneArrayAtLeft26 = [1] == BigInt(0); // -> false
const equalOperatorWithSingleOneArrayAtLeft27 = [1] == BigInt(1); // -> true
const equalOperatorWithSingleOneArrayAtLeft28 = [1] == Symbol(); // -> false

// == operator with [20] at left side
// TL;DR: [20] is not equal to anything (can be equal in case [20] == 20)
const equalOperatorWithSingleTwentyArrayAtLeft1 = [20] == false; // -> false
const equalOperatorWithSingleTwentyArrayAtLeft2 = [20] == true; // -> false
const equalOperatorWithSingleTwentyArrayAtLeft3 = [20] == 0; // -> false
const equalOperatorWithSingleTwentyArrayAtLeft4 = [20] == ""; // -> false
const equalOperatorWithSingleTwentyArrayAtLeft5 = [20] == null; // -> false
const equalOperatorWithSingleTwentyArrayAtLeft6 = [20] == undefined; // -> false
const equalOperatorWithSingleTwentyArrayAtLeft7 = [20] == NaN; // -> false
const equalOperatorWithSingleTwentyArrayAtLeft8 = [20] == Infinity; // -> false
const equalOperatorWithSingleTwentyArrayAtLeft9 = [20] == -Infinity; // -> false
const equalOperatorWithSingleTwentyArrayAtLeft10 = [20] == 1; // -> false
const equalOperatorWithSingleTwentyArrayAtLeft11 = [20] == "0"; // -> false
const equalOperatorWithSingleTwentyArrayAtLeft12 = [20] == "000"; // -> false
const equalOperatorWithSingleTwentyArrayAtLeft13 = [20] == "1"; // -> false
const equalOperatorWithSingleTwentyArrayAtLeft14 = [20] == "twenty"; // -> false
const equalOperatorWithSingleTwentyArrayAtLeft15 = [20] == []; // -> false
const equalOperatorWithSingleTwentyArrayAtLeft16 = [20] == [0]; // -> false
const equalOperatorWithSingleTwentyArrayAtLeft17 = [20] == [1]; // -> false
const equalOperatorWithSingleTwentyArrayAtLeft18 = [20] == [20]; // -> false
const equalOperatorWithSingleTwentyArrayAtLeft19 = [20] == [10, 20]; // -> false
const equalOperatorWithSingleTwentyArrayAtLeft20 = [20] == ["twenty"]; // -> false
const equalOperatorWithSingleTwentyArrayAtLeft21 = [20] == ["ten", "twenty"]; // -> false
const equalOperatorWithSingleTwentyArrayAtLeft22 = [20] == function () {}; // -> false
const equalOperatorWithSingleTwentyArrayAtLeft23 = [20] == {}; // -> false
const equalOperatorWithSingleTwentyArrayAtLeft24 = [20] == 0n; // -> false
const equalOperatorWithSingleTwentyArrayAtLeft26 = [20] == BigInt(0); // -> false
const equalOperatorWithSingleTwentyArrayAtLeft27 = [20] == BigInt(1); // -> false
const equalOperatorWithSingleTwentyArrayAtLeft28 = [20] == Symbol(); // -> false
const equalOperatorWithSingleTwentyArrayAtLeft25 = [20] == 1n; // -> false

// == operator with [10, 20] at left side
// TL;DR: [10, 20] is not equal to anything
const equalOperatorWithTenTwentyArrayAtLeft1 = [10, 20] == false; // -> false
const equalOperatorWithTenTwentyArrayAtLeft2 = [10, 20] == true; // -> false
const equalOperatorWithTenTwentyArrayAtLeft3 = [10, 20] == 0; // -> false
const equalOperatorWithTenTwentyArrayAtLeft4 = [10, 20] == ""; // -> false
const equalOperatorWithTenTwentyArrayAtLeft5 = [10, 20] == null; // -> false
const equalOperatorWithTenTwentyArrayAtLeft6 = [10, 20] == undefined; // -> false
const equalOperatorWithTenTwentyArrayAtLeft7 = [10, 20] == NaN; // -> false
const equalOperatorWithTenTwentyArrayAtLeft8 = [10, 20] == Infinity; // -> false
const equalOperatorWithTenTwentyArrayAtLeft9 = [10, 20] == -Infinity; // -> false
const equalOperatorWithTenTwentyArrayAtLeft10 = [10, 20] == 1; // -> false
const equalOperatorWithTenTwentyArrayAtLeft11 = [10, 20] == "0"; // -> false
const equalOperatorWithTenTwentyArrayAtLeft12 = [10, 20] == "000"; // -> false
const equalOperatorWithTenTwentyArrayAtLeft13 = [10, 20] == "1"; // -> false
const equalOperatorWithTenTwentyArrayAtLeft14 = [10, 20] == "twenty"; // -> false
const equalOperatorWithTenTwentyArrayAtLeft15 = [10, 20] == []; // -> false
const equalOperatorWithTenTwentyArrayAtLeft16 = [10, 20] == [0]; // -> false
const equalOperatorWithTenTwentyArrayAtLeft17 = [10, 20] == [1]; // -> false
const equalOperatorWithTenTwentyArrayAtLeft18 = [10, 20] == [20]; // -> false
const equalOperatorWithTenTwentyArrayAtLeft19 = [10, 20] == [10, 20]; // -> false
const equalOperatorWithTenTwentyArrayAtLeft20 = [10, 20] == ["twenty"]; // -> false
const equalOperatorWithTenTwentyArrayAtLeft21 = [10, 20] == ["ten", "twenty"]; // -> false
const equalOperatorWithTenTwentyArrayAtLeft22 = [10, 20] == function () {}; // -> false
const equalOperatorWithTenTwentyArrayAtLeft23 = [10, 20] == {}; // -> false
const equalOperatorWithTenTwentyArrayAtLeft24 = [10, 20] == 0n; // -> false
const equalOperatorWithTenTwentyArrayAtLeft25 = [10, 20] == 1n; // -> false
const equalOperatorWithTenTwentyArrayAtLeft26 = [10, 20] == BigInt(0); // -> false
const equalOperatorWithTenTwentyArrayAtLeft27 = [10, 20] == BigInt(1); // -> false
const equalOperatorWithTenTwentyArrayAtLeft28 = [10, 20] == Symbol(); // -> false

// == operator with ["twenty"] at left side
// TL;DR: ['twenty'] is not equal to anything
const equalOperatorWithTwentyStringArrayAtLeft1 = ["twenty"] == false; // -> false
const equalOperatorWithTwentyStringArrayAtLeft2 = ["twenty"] == true; // -> false
const equalOperatorWithTwentyStringArrayAtLeft3 = ["twenty"] == 0; // -> false
const equalOperatorWithTwentyStringArrayAtLeft4 = ["twenty"] == ""; // -> false
const equalOperatorWithTwentyStringArrayAtLeft5 = ["twenty"] == null; // -> false
const equalOperatorWithTwentyStringArrayAtLeft6 = ["twenty"] == undefined; // -> false
const equalOperatorWithTwentyStringArrayAtLeft7 = ["twenty"] == NaN; // -> false
const equalOperatorWithTwentyStringArrayAtLeft8 = ["twenty"] == Infinity; // -> false
const equalOperatorWithTwentyStringArrayAtLeft9 = ["twenty"] == -Infinity; // -> false
const equalOperatorWithTwentyStringArrayAtLeft10 = ["twenty"] == 1; // -> false
const equalOperatorWithTwentyStringArrayAtLeft11 = ["twenty"] == "0"; // -> false
const equalOperatorWithTwentyStringArrayAtLeft12 = ["twenty"] == "000"; // -> false
const equalOperatorWithTwentyStringArrayAtLeft13 = ["twenty"] == "1"; // -> false
const equalOperatorWithTwentyStringArrayAtLeft14 = ["twenty"] == "twenty"; // -> false
const equalOperatorWithTwentyStringArrayAtLeft15 = ["twenty"] == []; // -> false
const equalOperatorWithTwentyStringArrayAtLeft16 = ["twenty"] == [0]; // -> false
const equalOperatorWithTwentyStringArrayAtLeft17 = ["twenty"] == [1]; // -> false
const equalOperatorWithTwentyStringArrayAtLeft18 = ["twenty"] == [20]; // -> false
const equalOperatorWithTwentyStringArrayAtLeft19 = ["twenty"] == [10, 20]; // -> false
const equalOperatorWithTwentyStringArrayAtLeft20 = ["twenty"] == ["twenty"]; // -> false
const equalOperatorWithTwentyStringArrayAtLeft21 =
  ["twenty"] == ["ten", "twenty"]; // -> false
const equalOperatorWithTwentyStringArrayAtLeft22 = ["twenty"] == function () {}; // -> false
const equalOperatorWithTwentyStringArrayAtLeft23 = ["twenty"] == {}; // -> false
const equalOperatorWithTwentyStringArrayAtLeft24 = ["twenty"] == 0n; // -> false
const equalOperatorWithTwentyStringArrayAtLeft25 = ["twenty"] == 1n; // -> false
const equalOperatorWithTwentyStringArrayAtLeft26 = ["twenty"] == BigInt(0); // -> false
const equalOperatorWithTwentyStringArrayAtLeft27 = ["twenty"] == BigInt(1); // -> false
const equalOperatorWithTwentyStringArrayAtLeft28 = ["twenty"] == Symbol(); // -> false

// == operator with ["ten", "twenty"] at left side
// TL;DR: ['ten', 'twenty'] is not equal to anything
const equalOperatorWithTenTwentyStringArrayAtLeft1 = ["ten", "twenty"] == false; // -> false
const equalOperatorWithTenTwentyStringArrayAtLeft2 = ["ten", "twenty"] == true; // -> false
const equalOperatorWithTenTwentyStringArrayAtLeft3 = ["ten", "twenty"] == 0; // -> false
const equalOperatorWithTenTwentyStringArrayAtLeft4 = ["ten", "twenty"] == ""; // -> false
const equalOperatorWithTenTwentyStringArrayAtLeft5 = ["ten", "twenty"] == null; // -> false
const equalOperatorWithTenTwentyStringArrayAtLeft6 =
  ["ten", "twenty"] == undefined; // -> false
const equalOperatorWithTenTwentyStringArrayAtLeft7 = ["ten", "twenty"] == NaN; // -> false
const equalOperatorWithTenTwentyStringArrayAtLeft8 =
  ["ten", "twenty"] == Infinity; // -> false
const equalOperatorWithTenTwentyStringArrayAtLeft9 =
  ["ten", "twenty"] == -Infinity; // -> false
const equalOperatorWithTenTwentyStringArrayAtLeft10 = ["ten", "twenty"] == 1; // -> false
const equalOperatorWithTenTwentyStringArrayAtLeft11 = ["ten", "twenty"] == "0"; // -> false
const equalOperatorWithTenTwentyStringArrayAtLeft12 =
  ["ten", "twenty"] == "000"; // -> false
const equalOperatorWithTenTwentyStringArrayAtLeft13 = ["ten", "twenty"] == "1"; // -> false
const equalOperatorWithTenTwentyStringArrayAtLeft14 =
  ["ten", "twenty"] == "twenty"; // -> false
const equalOperatorWithTenTwentyStringArrayAtLeft15 = ["ten", "twenty"] == []; // -> false
const equalOperatorWithTenTwentyStringArrayAtLeft16 = ["ten", "twenty"] == [0]; // -> false
const equalOperatorWithTenTwentyStringArrayAtLeft17 = ["ten", "twenty"] == [1]; // -> false
const equalOperatorWithTenTwentyStringArrayAtLeft18 = ["ten", "twenty"] == [20]; // -> false
const equalOperatorWithTenTwentyStringArrayAtLeft19 =
  ["ten", "twenty"] == [10, 20]; // -> true
const equalOperatorWithTenTwentyStringArrayAtLeft20 =
  ["ten", "twenty"] == ["twenty"]; // -> false
const equalOperatorWithTenTwentyStringArrayAtLeft21 =
  ["ten", "twenty"] == ["ten", "twenty"]; // -> false
const equalOperatorWithTenTwentyStringArrayAtLeft22 =
  ["ten", "twenty"] == function () {}; // -> false
const equalOperatorWithTenTwentyStringArrayAtLeft23 = ["ten", "twenty"] == {}; // -> false
const equalOperatorWithTenTwentyStringArrayAtLeft24 = ["ten", "twenty"] == 0n; // -> false
const equalOperatorWithTenTwentyStringArrayAtLeft25 = ["ten", "twenty"] == 1n; // -> false
const equalOperatorWithTenTwentyStringArrayAtLeft26 =
  ["ten", "twenty"] == BigInt(0); // -> false
const equalOperatorWithTenTwentyStringArrayAtLeft27 =
  ["ten", "twenty"] == BigInt(1); // -> false
const equalOperatorWithTenTwentyStringArrayAtLeft28 =
  ["ten", "twenty"] == Symbol(); // -> false

// == operator with function(){} at left side
// TL;DR: function is not equal to anything
const equalOperatorWithFunctionAtLeft1 = function () {} == false; // -> false
const equalOperatorWithFunctionAtLeft2 = function () {} == true; // -> false
const equalOperatorWithFunctionAtLeft3 = function () {} == 0; // -> false
const equalOperatorWithFunctionAtLeft4 = function () {} == ""; // -> false
const equalOperatorWithFunctionAtLeft5 = function () {} == null; // -> false
const equalOperatorWithFunctionAtLeft6 = function () {} == undefined; // -> false
const equalOperatorWithFunctionAtLeft7 = function () {} == NaN; // -> false
const equalOperatorWithFunctionAtLeft8 = function () {} == Infinity; // -> false
const equalOperatorWithFunctionAtLeft9 = function () {} == -Infinity; // -> false
const equalOperatorWithFunctionAtLeft10 = function () {} == 1; // -> false
const equalOperatorWithFunctionAtLeft11 = function () {} == "0"; // -> false
const equalOperatorWithFunctionAtLeft12 = function () {} == "000"; // -> false
const equalOperatorWithFunctionAtLeft13 = function () {} == "1"; // -> false
const equalOperatorWithFunctionAtLeft14 = function () {} == "twenty"; // -> false
const equalOperatorWithFunctionAtLeft15 = function () {} == []; // -> false
const equalOperatorWithFunctionAtLeft16 = function () {} == [0]; // -> false
const equalOperatorWithFunctionAtLeft17 = function () {} == [1]; // -> false
const equalOperatorWithFunctionAtLeft18 = function () {} == [20]; // -> false
const equalOperatorWithFunctionAtLeft19 = function () {} == [10, 20]; // -> false
const equalOperatorWithFunctionAtLeft20 = function () {} == ["twenty"]; // -> false
const equalOperatorWithFunctionAtLeft21 = function () {} == ["ten", "twenty"]; // -> false
const equalOperatorWithFunctionAtLeft22 = function () {} == function () {}; // -> false
const equalOperatorWithFunctionAtLeft23 = function () {} == {}; // -> false
const equalOperatorWithFunctionAtLeft24 = function () {} == 0n; // -> false
const equalOperatorWithFunctionAtLeft25 = function () {} == 1n; // -> false
const equalOperatorWithFunctionAtLeft26 = function () {} == BigInt(0); // -> false
const equalOperatorWithFunctionAtLeft27 = function () {} == BigInt(1); // -> false
const equalOperatorWithFunctionAtLeft28 = function () {} == Symbol(); // -> false

// == operator with {} at left side
// TL;DR: {} is not equal to anything
const equalOperatorWithEmptyObjectAtLeft1 = {} == false; // -> false
const equalOperatorWithEmptyObjectAtLeft2 = {} == true; // -> false
const equalOperatorWithEmptyObjectAtLeft3 = {} == 0; // -> false
const equalOperatorWithEmptyObjectAtLeft4 = {} == ""; // -> false
const equalOperatorWithEmptyObjectAtLeft5 = {} == null; // -> false
const equalOperatorWithEmptyObjectAtLeft6 = {} == undefined; // -> false
const equalOperatorWithEmptyObjectAtLeft7 = {} == NaN; // -> false
const equalOperatorWithEmptyObjectAtLeft8 = {} == Infinity; // -> false
const equalOperatorWithEmptyObjectAtLeft9 = {} == -Infinity; // -> false
const equalOperatorWithEmptyObjectAtLeft10 = {} == 1; // -> false
const equalOperatorWithEmptyObjectAtLeft11 = {} == "0"; // -> false
const equalOperatorWithEmptyObjectAtLeft12 = {} == "000"; // -> false
const equalOperatorWithEmptyObjectAtLeft13 = {} == "1"; // -> false
const equalOperatorWithEmptyObjectAtLeft14 = {} == "twenty"; // -> false
const equalOperatorWithEmptyObjectAtLeft15 = {} == []; // -> false
const equalOperatorWithEmptyObjectAtLeft16 = {} == [0]; // -> false
const equalOperatorWithEmptyObjectAtLeft17 = {} == [1]; // -> false
const equalOperatorWithEmptyObjectAtLeft18 = {} == [20]; // -> false
const equalOperatorWithEmptyObjectAtLeft19 = {} == [10, 20]; // -> false
const equalOperatorWithEmptyObjectAtLeft20 = {} == ["twenty"]; // -> false
const equalOperatorWithEmptyObjectAtLeft21 = {} == ["ten", "twenty"]; // -> false
const equalOperatorWithEmptyObjectAtLeft22 = {} == function () {}; // -> false
const equalOperatorWithEmptyObjectAtLeft23 = {} == {}; // -> false
const equalOperatorWithEmptyObjectAtLeft24 = {} == 0n; // -> false
const equalOperatorWithEmptyObjectAtLeft25 = {} == 1n; // -> false
const equalOperatorWithEmptyObjectAtLeft26 = {} == BigInt(0); // -> false
const equalOperatorWithEmptyObjectAtLeft27 = {} == BigInt(1); // -> false
const equalOperatorWithEmptyObjectAtLeft28 = {} == Symbol(); // -> false

// == operator with 0n at left side
// TL;DR: 0n is equal to false, 0, "", "0", "000", [], [0], 0n and BigInt(0)
const equalOperatorWithZeroBigIntAtLeft1 = 0n == false; // -> true
const equalOperatorWithZeroBigIntAtLeft2 = 0n == true; // -> false
const equalOperatorWithZeroBigIntAtLeft3 = 0n == 0; // -> true
const equalOperatorWithZeroBigIntAtLeft4 = 0n == ""; // -> true
const equalOperatorWithZeroBigIntAtLeft5 = 0n == null; // -> false
const equalOperatorWithZeroBigIntAtLeft6 = 0n == undefined; // -> false
const equalOperatorWithZeroBigIntAtLeft7 = 0n == NaN; // -> false
const equalOperatorWithZeroBigIntAtLeft8 = 0n == Infinity; // -> false
const equalOperatorWithZeroBigIntAtLeft9 = 0n == -Infinity; // -> false
const equalOperatorWithZeroBigIntAtLeft10 = 0n == 1; // -> false
const equalOperatorWithZeroBigIntAtLeft11 = 0n == "0"; // -> true
const equalOperatorWithZeroBigIntAtLeft12 = 0n == "000"; // -> true
const equalOperatorWithZeroBigIntAtLeft13 = 0n == "1"; // -> false
const equalOperatorWithZeroBigIntAtLeft14 = 0n == "twenty"; // -> false
const equalOperatorWithZeroBigIntAtLeft15 = 0n == []; // -> true
const equalOperatorWithZeroBigIntAtLeft16 = 0n == [0]; // -> true
const equalOperatorWithZeroBigIntAtLeft17 = 0n == [1]; // -> false
const equalOperatorWithZeroBigIntAtLeft18 = 0n == [20]; // -> false
const equalOperatorWithZeroBigIntAtLeft19 = 0n == [10, 20]; // -> false
const equalOperatorWithZeroBigIntAtLeft20 = 0n == ["twenty"]; // -> false
const equalOperatorWithZeroBigIntAtLeft21 = 0n == ["ten", "twenty"]; // -> false
const equalOperatorWithZeroBigIntAtLeft22 = 0n == function () {}; // -> false
const equalOperatorWithZeroBigIntAtLeft23 = 0n == {}; // -> false
const equalOperatorWithZeroBigIntAtLeft24 = 0n == 0n; // -> true
const equalOperatorWithZeroBigIntAtLeft25 = 0n == 1n; // -> false
const equalOperatorWithZeroBigIntAtLeft26 = 0n == BigInt(0); // -> true
const equalOperatorWithZeroBigIntAtLeft27 = 0n == BigInt(1); // -> false
const equalOperatorWithZeroBigIntAtLeft28 = 0n == Symbol(); // -> false

// == operator with 1n at left side
// TL;DR: 1n is equal to true, 1, "1", [1], 1n and BigInt(1)
const equalOperatorWithOneBigIntAtLeft1 = 1n == false; // -> false
const equalOperatorWithOneBigIntAtLeft2 = 1n == true; // -> true
const equalOperatorWithOneBigIntAtLeft3 = 1n == 0; // -> false
const equalOperatorWithOneBigIntAtLeft4 = 1n == ""; // -> false
const equalOperatorWithOneBigIntAtLeft5 = 1n == null; // -> false
const equalOperatorWithOneBigIntAtLeft6 = 1n == undefined; // -> false
const equalOperatorWithOneBigIntAtLeft7 = 1n == NaN; // -> false
const equalOperatorWithOneBigIntAtLeft8 = 1n == Infinity; // -> false
const equalOperatorWithOneBigIntAtLeft9 = 1n == -Infinity; // -> false
const equalOperatorWithOneBigIntAtLeft10 = 1n == 1; // -> true
const equalOperatorWithOneBigIntAtLeft11 = 1n == "0"; // -> false
const equalOperatorWithOneBigIntAtLeft12 = 1n == "000"; // -> false
const equalOperatorWithOneBigIntAtLeft13 = 1n == "1"; // -> true
const equalOperatorWithOneBigIntAtLeft14 = 1n == "twenty"; // -> false
const equalOperatorWithOneBigIntAtLeft15 = 1n == []; // -> false
const equalOperatorWithOneBigIntAtLeft16 = 1n == [0]; // -> false
const equalOperatorWithOneBigIntAtLeft17 = 1n == [1]; // -> true
const equalOperatorWithOneBigIntAtLeft18 = 1n == [20]; // -> false
const equalOperatorWithOneBigIntAtLeft19 = 1n == [10, 20]; // -> false
const equalOperatorWithOneBigIntAtLeft20 = 1n == ["twenty"]; // -> false
const equalOperatorWithOneBigIntAtLeft21 = 1n == ["ten", "twenty"]; // -> false
const equalOperatorWithOneBigIntAtLeft22 = 1n == function () {}; // -> false
const equalOperatorWithOneBigIntAtLeft23 = 1n == {}; // -> false
const equalOperatorWithOneBigIntAtLeft24 = 1n == 0n; // -> false
const equalOperatorWithOneBigIntAtLeft25 = 1n == 1n; // -> true
const equalOperatorWithOneBigIntAtLeft26 = 1n == BigInt(0); // -> false
const equalOperatorWithOneBigIntAtLeft27 = 1n == BigInt(1); // -> true
const equalOperatorWithOneBigIntAtLeft28 = 1n == Symbol(); // -> false

// == operator with BigInt(0) at left side
// TL;DR: BigInt(0) is equal to false, 0, "", "0", "000", [], [0], 0n and BigInt(0)
const equalOperatorWithBigInt0AtLeft1 = BigInt(0) == false; // -> true
const equalOperatorWithBigInt0AtLeft2 = BigInt(0) == true; // -> false
const equalOperatorWithBigInt0AtLeft3 = BigInt(0) == 0; // -> true
const equalOperatorWithBigInt0AtLeft4 = BigInt(0) == ""; // -> true
const equalOperatorWithBigInt0AtLeft5 = BigInt(0) == null; // -> false
const equalOperatorWithBigInt0AtLeft6 = BigInt(0) == undefined; // -> false
const equalOperatorWithBigInt0AtLeft7 = BigInt(0) == NaN; // -> false
const equalOperatorWithBigInt0AtLeft8 = BigInt(0) == Infinity; // -> false
const equalOperatorWithBigInt0AtLeft9 = BigInt(0) == -Infinity; // -> false
const equalOperatorWithBigInt0AtLeft10 = BigInt(0) == 1; // -> false
const equalOperatorWithBigInt0AtLeft11 = BigInt(0) == "0"; // -> true
const equalOperatorWithBigInt0AtLeft12 = BigInt(0) == "000"; // -> true
const equalOperatorWithBigInt0AtLeft13 = BigInt(0) == "1"; // -> false
const equalOperatorWithBigInt0AtLeft14 = BigInt(0) == "twenty"; // -> false
const equalOperatorWithBigInt0AtLeft15 = BigInt(0) == []; // -> true
const equalOperatorWithBigInt0AtLeft16 = BigInt(0) == [0]; // -> true
const equalOperatorWithBigInt0AtLeft17 = BigInt(0) == [1]; // -> false
const equalOperatorWithBigInt0AtLeft18 = BigInt(0) == [20]; // -> false
const equalOperatorWithBigInt0AtLeft19 = BigInt(0) == [10, 20]; // -> false
const equalOperatorWithBigInt0AtLeft20 = BigInt(0) == ["twenty"]; // -> false
const equalOperatorWithBigInt0AtLeft21 = BigInt(0) == ["ten", "twenty"]; // -> false
const equalOperatorWithBigInt0AtLeft22 = BigInt(0) == function () {}; // -> false
const equalOperatorWithBigInt0AtLeft23 = BigInt(0) == {}; // -> false
const equalOperatorWithBigInt0AtLeft24 = BigInt(0) == 0n; // -> true
const equalOperatorWithBigInt0AtLeft25 = BigInt(0) == 1n; // -> false
const equalOperatorWithBigInt0AtLeft26 = BigInt(0) == BigInt(0); // -> true
const equalOperatorWithBigInt0AtLeft27 = BigInt(0) == BigInt(1); // -> false
const equalOperatorWithBigInt0AtLeft28 = BigInt(0) == Symbol(); // -> false

// == operator with BigInt(1) at left side
// TL;DR: BigInt(1) is equal to true, 1, "1", [1], 1n and BigInt(1)
const equalOperatorWithBigInt1AtLeft1 = BigInt(1) == false; // -> false
const equalOperatorWithBigInt1AtLeft2 = BigInt(1) == true; // -> true
const equalOperatorWithBigInt1AtLeft3 = BigInt(1) == 0; // -> false
const equalOperatorWithBigInt1AtLeft4 = BigInt(1) == ""; // -> false
const equalOperatorWithBigInt1AtLeft5 = BigInt(1) == null; // -> false
const equalOperatorWithBigInt1AtLeft6 = BigInt(1) == undefined; // -> false
const equalOperatorWithBigInt1AtLeft7 = BigInt(1) == NaN; // -> false
const equalOperatorWithBigInt1AtLeft8 = BigInt(1) == Infinity; // -> false
const equalOperatorWithBigInt1AtLeft9 = BigInt(1) == -Infinity; // -> false
const equalOperatorWithBigInt1AtLeft10 = BigInt(1) == 1; // -> true
const equalOperatorWithBigInt1AtLeft11 = BigInt(1) == "0"; // -> false
const equalOperatorWithBigInt1AtLeft12 = BigInt(1) == "000"; // -> false
const equalOperatorWithBigInt1AtLeft13 = BigInt(1) == "1"; // -> true
const equalOperatorWithBigInt1AtLeft14 = BigInt(1) == "twenty"; // -> false
const equalOperatorWithBigInt1AtLeft15 = BigInt(1) == []; // -> false
const equalOperatorWithBigInt1AtLeft16 = BigInt(1) == [0]; // -> false
const equalOperatorWithBigInt1AtLeft17 = BigInt(1) == [1]; // -> true
const equalOperatorWithBigInt1AtLeft18 = BigInt(1) == [20]; // -> false
const equalOperatorWithBigInt1AtLeft19 = BigInt(1) == [10, 20]; // -> false
const equalOperatorWithBigInt1AtLeft20 = BigInt(1) == ["twenty"]; // -> false
const equalOperatorWithBigInt1AtLeft21 = BigInt(1) == ["ten", "twenty"]; // -> false
const equalOperatorWithBigInt1AtLeft22 = BigInt(1) == function () {}; // -> false
const equalOperatorWithBigInt1AtLeft23 = BigInt(1) == {}; // -> false
const equalOperatorWithBigInt1AtLeft24 = BigInt(1) == 0n; // -> false
const equalOperatorWithBigInt1AtLeft25 = BigInt(1) == 1n; // -> true
const equalOperatorWithBigInt1AtLeft26 = BigInt(1) == BigInt(0); // -> false
const equalOperatorWithBigInt1AtLeft27 = BigInt(1) == BigInt(1); // -> true
const equalOperatorWithBigInt1AtLeft28 = BigInt(1) == Symbol(); // -> false

// == operator with Symbol() at left side
// TL;DR: Symbol is not equal to anything
const equalOperatorWithSymbolAtLeft1 = Symbol() == false; // -> false
const equalOperatorWithSymbolAtLeft2 = Symbol() == true; // -> false
const equalOperatorWithSymbolAtLeft3 = Symbol() == 0; // -> false
const equalOperatorWithSymbolAtLeft4 = Symbol() == ""; // -> false
const equalOperatorWithSymbolAtLeft5 = Symbol() == null; // -> false
const equalOperatorWithSymbolAtLeft6 = Symbol() == undefined; // -> false
const equalOperatorWithSymbolAtLeft7 = Symbol() == NaN; // -> false
const equalOperatorWithSymbolAtLeft8 = Symbol() == Infinity; // -> false
const equalOperatorWithSymbolAtLeft9 = Symbol() == -Infinity; // -> false
const equalOperatorWithSymbolAtLeft10 = Symbol() == 1; // -> false
const equalOperatorWithSymbolAtLeft11 = Symbol() == "0"; // -> false
const equalOperatorWithSymbolAtLeft12 = Symbol() == "000"; // -> false
const equalOperatorWithSymbolAtLeft13 = Symbol() == "1"; // -> false
const equalOperatorWithSymbolAtLeft14 = Symbol() == "twenty"; // -> false
const equalOperatorWithSymbolAtLeft15 = Symbol() == []; // -> false
const equalOperatorWithSymbolAtLeft16 = Symbol() == [0]; // -> false
const equalOperatorWithSymbolAtLeft17 = Symbol() == [1]; // -> false
const equalOperatorWithSymbolAtLeft18 = Symbol() == [20]; // -> false
const equalOperatorWithSymbolAtLeft19 = Symbol() == [10, 20]; // -> false
const equalOperatorWithSymbolAtLeft20 = Symbol() == ["twenty"]; // -> false
const equalOperatorWithSymbolAtLeft21 = Symbol() == ["ten", "twenty"]; // -> false
const equalOperatorWithSymbolAtLeft22 = Symbol() == function () {}; // -> false
const equalOperatorWithSymbolAtLeft23 = Symbol() == {}; // -> false
const equalOperatorWithSymbolAtLeft24 = Symbol() == 0n; // -> false
const equalOperatorWithSymbolAtLeft25 = Symbol() == 1n; // -> false
const equalOperatorWithSymbolAtLeft26 = Symbol() == BigInt(0); // -> false
const equalOperatorWithSymbolAtLeft27 = Symbol() == BigInt(1); // -> false
const equalOperatorWithSymbolAtLeft28 = Symbol() == Symbol(); // -> false

// == operator with null at left side
// TL;DR: null is equal to null and undefined
const equalOperatorWithNullAtLeft1 = null == false; // -> true
const equalOperatorWithNullAtLeft2 = null == true; // -> false
const equalOperatorWithNullAtLeft3 = null == 0; // -> false
const equalOperatorWithNullAtLeft4 = null == ""; // -> false
const equalOperatorWithNullAtLeft5 = null == null; // -> true
const equalOperatorWithNullAtLeft6 = null == undefined; // -> true
const equalOperatorWithNullAtLeft7 = null == NaN; // -> false
const equalOperatorWithNullAtLeft8 = null == Infinity; // -> false
const equalOperatorWithNullAtLeft9 = null == -Infinity; // -> false
const equalOperatorWithNullAtLeft10 = null == 1; // -> false
const equalOperatorWithNullAtLeft11 = null == "0"; // -> false
const equalOperatorWithNullAtLeft12 = null == "000"; // -> false
const equalOperatorWithNullAtLeft13 = null == "1"; // -> false
const equalOperatorWithNullAtLeft14 = null == "twenty"; // -> false
const equalOperatorWithNullAtLeft15 = null == []; // -> false
const equalOperatorWithNullAtLeft16 = null == [0]; // -> false
const equalOperatorWithNullAtLeft17 = null == [1]; // -> false
const equalOperatorWithNullAtLeft18 = null == [20]; // -> false
const equalOperatorWithNullAtLeft19 = null == [10, 20]; // -> false
const equalOperatorWithNullAtLeft20 = null == ["twenty"]; // -> false
const equalOperatorWithNullAtLeft21 = null == ["ten", "twenty"]; // -> false
const equalOperatorWithNullAtLeft22 = null == function () {}; // -> false
const equalOperatorWithNullAtLeft23 = null == {}; // -> false
const equalOperatorWithNullAtLeft24 = null == 0n; // -> false
const equalOperatorWithNullAtLeft25 = null == 1n; // -> false
const equalOperatorWithNullAtLeft26 = null == BigInt(0); // -> false
const equalOperatorWithNullAtLeft27 = null == BigInt(1); // -> false
const equalOperatorWithNullAtLeft28 = null == Symbol(); // -> false

// == operator with undefined at left side
// TL;DR: undefined is equal to null and undefined
const equalOperatorWithUndefinedAtLeft1 = undefined == false; // -> false
const equalOperatorWithUndefinedAtLeft2 = undefined == true; // -> false
const equalOperatorWithUndefinedAtLeft3 = undefined == 0; // -> false
const equalOperatorWithUndefinedAtLeft4 = undefined == ""; // -> false
const equalOperatorWithUndefinedAtLeft5 = undefined == null; // -> true
const equalOperatorWithUndefinedAtLeft6 = undefined == undefined; // -> true
const equalOperatorWithUndefinedAtLeft7 = undefined == NaN; // -> false
const equalOperatorWithUndefinedAtLeft8 = undefined == Infinity; // -> false
const equalOperatorWithUndefinedAtLeft9 = undefined == -Infinity; // -> false
const equalOperatorWithUndefinedAtLeft10 = undefined == 1; // -> false
const equalOperatorWithUndefinedAtLeft11 = undefined == "0"; // -> false
const equalOperatorWithUndefinedAtLeft12 = undefined == "000"; // -> false
const equalOperatorWithUndefinedAtLeft13 = undefined == "1"; // -> false
const equalOperatorWithUndefinedAtLeft14 = undefined == "twenty"; // -> false
const equalOperatorWithUndefinedAtLeft15 = undefined == []; // -> false
const equalOperatorWithUndefinedAtLeft16 = undefined == [0]; // -> false
const equalOperatorWithUndefinedAtLeft17 = undefined == [1]; // -> false
const equalOperatorWithUndefinedAtLeft18 = undefined == [20]; // -> false
const equalOperatorWithUndefinedAtLeft19 = undefined == [10, 20]; // -> false
const equalOperatorWithUndefinedAtLeft20 = undefined == ["twenty"]; // -> false
const equalOperatorWithUndefinedAtLeft21 = undefined == ["ten", "twenty"]; // -> false
const equalOperatorWithUndefinedAtLeft22 = undefined == function () {}; // -> false
const equalOperatorWithUndefinedAtLeft23 = undefined == {}; // -> false
const equalOperatorWithUndefinedAtLeft24 = undefined == 0n; // -> false
const equalOperatorWithUndefinedAtLeft25 = undefined == 1n; // -> false
const equalOperatorWithUndefinedAtLeft26 = undefined == BigInt(0); // -> false
const equalOperatorWithUndefinedAtLeft27 = undefined == BigInt(1); // -> false
const equalOperatorWithUndefinedAtLeft28 = undefined == Symbol(); // -> false

// == operator with NaN at left side
// TL;DR: NaN is not equal to anything
const equalOperatorWithNaNAtLeft1 = NaN == false; // -> false
const equalOperatorWithNaNAtLeft2 = NaN == true; // -> false
const equalOperatorWithNaNAtLeft3 = NaN == 0; // -> false
const equalOperatorWithNaNAtLeft4 = NaN == ""; // -> false
const equalOperatorWithNaNAtLeft5 = NaN == null; // -> false
const equalOperatorWithNaNAtLeft6 = NaN == undefined; // -> false
const equalOperatorWithNaNAtLeft7 = NaN == NaN; // -> false
const equalOperatorWithNaNAtLeft8 = NaN == Infinity; // -> false
const equalOperatorWithNaNAtLeft9 = NaN == -Infinity; // -> false
const equalOperatorWithNaNAtLeft10 = NaN == 1; // -> false
const equalOperatorWithNaNAtLeft11 = NaN == "0"; // -> false
const equalOperatorWithNaNAtLeft12 = NaN == "000"; // -> false
const equalOperatorWithNaNAtLeft13 = NaN == "1"; // -> false
const equalOperatorWithNaNAtLeft14 = NaN == "twenty"; // -> false
const equalOperatorWithNaNAtLeft15 = NaN == []; // -> false
const equalOperatorWithNaNAtLeft16 = NaN == [0]; // -> false
const equalOperatorWithNaNAtLeft17 = NaN == [1]; // -> false
const equalOperatorWithNaNAtLeft18 = NaN == [20]; // -> false
const equalOperatorWithNaNAtLeft19 = NaN == [10, 20]; // -> false
const equalOperatorWithNaNAtLeft20 = NaN == ["twenty"]; // -> false
const equalOperatorWithNaNAtLeft21 = NaN == ["ten", "twenty"]; // -> false
const equalOperatorWithNaNAtLeft22 = NaN == function () {}; // -> false
const equalOperatorWithNaNAtLeft23 = NaN == {}; // -> false
const equalOperatorWithNaNAtLeft24 = NaN == 0n; // -> false
const equalOperatorWithNaNAtLeft25 = NaN == 1n; // -> false
const equalOperatorWithNaNAtLeft26 = NaN == BigInt(0); // -> false
const equalOperatorWithNaNAtLeft27 = NaN == BigInt(1); // -> false
const equalOperatorWithNaNAtLeft28 = NaN == Symbol(); // -> false

// == operator with Infinity at left side
// TL;DR: Infinity is equal to Infinity
const equalOperatorWithInfinityAtLeft1 = Infinity == false; // -> false
const equalOperatorWithInfinityAtLeft2 = Infinity == true; // -> false
const equalOperatorWithInfinityAtLeft3 = Infinity == 0; // -> false
const equalOperatorWithInfinityAtLeft4 = Infinity == ""; // -> false
const equalOperatorWithInfinityAtLeft5 = Infinity == null; // -> false
const equalOperatorWithInfinityAtLeft6 = Infinity == undefined; // -> false
const equalOperatorWithInfinityAtLeft7 = Infinity == NaN; // -> false
const equalOperatorWithInfinityAtLeft8 = Infinity == Infinity; // -> true
const equalOperatorWithInfinityAtLeft9 = Infinity == -Infinity; // -> false
const equalOperatorWithInfinityAtLeft10 = Infinity == 1; // -> false
const equalOperatorWithInfinityAtLeft11 = Infinity == "0"; // -> false
const equalOperatorWithInfinityAtLeft12 = Infinity == "000"; // -> false
const equalOperatorWithInfinityAtLeft13 = Infinity == "1"; // -> false
const equalOperatorWithInfinityAtLeft14 = Infinity == "twenty"; // -> false
const equalOperatorWithInfinityAtLeft15 = Infinity == []; // -> false
const equalOperatorWithInfinityAtLeft16 = Infinity == [0]; // -> false
const equalOperatorWithInfinityAtLeft17 = Infinity == [1]; // -> false
const equalOperatorWithInfinityAtLeft18 = Infinity == [20]; // -> false
const equalOperatorWithInfinityAtLeft19 = Infinity == [10, 20]; // -> false
const equalOperatorWithInfinityAtLeft20 = Infinity == ["twenty"]; // -> false
const equalOperatorWithInfinityAtLeft21 = Infinity == ["ten", "twenty"]; // -> false
const equalOperatorWithInfinityAtLeft22 = Infinity == function () {}; // -> false
const equalOperatorWithInfinityAtLeft23 = Infinity == {}; // -> false
const equalOperatorWithInfinityAtLeft24 = Infinity == 0n; // -> false
const equalOperatorWithInfinityAtLeft25 = Infinity == 1n; // -> false
const equalOperatorWithInfinityAtLeft26 = Infinity == BigInt(0); // -> false
const equalOperatorWithInfinityAtLeft27 = Infinity == BigInt(1); // -> false
const equalOperatorWithInfinityAtLeft28 = Infinity == Symbol(); // -> false

// == operator with -Infinity at left side
// TL;DR: -Infinity is equal to -Infinity
const equalOperatorWithNegativeInfinityAtLeft1 = -Infinity == false; // -> false
const equalOperatorWithNegativeInfinityAtLeft2 = -Infinity == true; // -> false
const equalOperatorWithNegativeInfinityAtLeft3 = -Infinity == 0; // -> false
const equalOperatorWithNegativeInfinityAtLeft4 = -Infinity == ""; // -> false
const equalOperatorWithNegativeInfinityAtLeft5 = -Infinity == null; // -> false
const equalOperatorWithNegativeInfinityAtLeft6 = -Infinity == undefined; // -> false
const equalOperatorWithNegativeInfinityAtLeft7 = -Infinity == NaN; // -> false
const equalOperatorWithNegativeInfinityAtLeft8 = -Infinity == Infinity; // -> false
const equalOperatorWithNegativeInfinityAtLeft9 = -Infinity == -Infinity; // -> true
const equalOperatorWithNegativeInfinityAtLeft10 = -Infinity == 1; // -> false
const equalOperatorWithNegativeInfinityAtLeft11 = -Infinity == "0"; // -> false
const equalOperatorWithNegativeInfinityAtLeft12 = -Infinity == "000"; // -> false
const equalOperatorWithNegativeInfinityAtLeft13 = -Infinity == "1"; // -> false
const equalOperatorWithNegativeInfinityAtLeft14 = -Infinity == "twenty"; // -> false
const equalOperatorWithNegativeInfinityAtLeft15 = -Infinity == []; // -> false
const equalOperatorWithNegativeInfinityAtLeft16 = -Infinity == [0]; // -> false
const equalOperatorWithNegativeInfinityAtLeft17 = -Infinity == [1]; // -> false
const equalOperatorWithNegativeInfinityAtLeft18 = -Infinity == [20]; // -> false
const equalOperatorWithNegativeInfinityAtLeft19 = -Infinity == [10, 20]; // -> false
const equalOperatorWithNegativeInfinityAtLeft20 = -Infinity == ["twenty"]; // -> false
const equalOperatorWithNegativeInfinityAtLeft21 =
  -Infinity == ["ten", "twenty"]; // -> false
const equalOperatorWithNegativeInfinityAtLeft22 = -Infinity == function () {}; // -> false
const equalOperatorWithNegativeInfinityAtLeft23 = -Infinity == {}; // -> false
const equalOperatorWithNegativeInfinityAtLeft24 = -Infinity == 0n; // -> false
const equalOperatorWithNegativeInfinityAtLeft25 = -Infinity == 1n; // -> false
const equalOperatorWithNegativeInfinityAtLeft26 = -Infinity == BigInt(0); // -> false
const equalOperatorWithNegativeInfinityAtLeft27 = -Infinity == BigInt(1); // -> false
const equalOperatorWithNegativeInfinityAtLeft28 = -Infinity == Symbol(); // -> false

// At this point we have seen that the == operator is not transitive, so we will not continue with the rest of the values
