// Numbers - arithmetic
// PEMDAS: Parentheses, Exponents, Multiplication, Division, Addition, Subtraction from left to right
const number1 = 5;
const number2 = 12.3;
const number3 = Infinity;
const number4 = -Infinity;
const number5 = NaN;
const operation1 = 100 + 4 * 11; // 144
const operation2 = (100 + 4) * 11; // 1144
const operation3 = 4 - 10 + 1; // -5
const operation4 = 315 / 5; // 63
const operation5 = 316 / 5; // 63.2
const operation6 = 100 % 10; // 0
const operation7 = 112 % 10; // 2
const operation8 = 2 ** 3; // 8

console.log({
  number1,
  number2,
  number3,
  number4,
  number5,
  operation1,
  operation2,
  operation3,
  operation4,
  operation5,
  operation6,
  operation7,
  operation8,
});

// Strings
const string1 = "My string";
const string2 = "My string";
const string3 = `My string`;
const string4 = "First line\nSecond line";
const string5 = "";
const string6 = 'New line char "\\n".';
const string7 = 'My string is an "example".';
const string8 = `My string with a calculated value = ${5 + 5}.`;
const string9 = string1 + string2 + "concatenated strings";
console.log({
  string1,
  string2,
  string3,
  string4,
  string5,
  string6,
  string7,
  string8,
  string9,
});
/*
{
	string1: 'My string',
	string2: 'My string',
	string3: 'My string',
	string4: 'First line
Second line',
	string5: '',
	string6: 'New line char "\n".',
	string7: 'My string is an "example".',
	string8: 'My string with a calculated value = 10.',
	string9: 'My stringMy stringconcatenated strings'
}
*/

// Typeof
console.log(typeof 4.5); // 'number'
console.log(typeof "x"); // 'string'

// Booleans
const boolean1 = true;
const boolean2 = false;
console.log({ boolean1, boolean2 });
// Boolean comparisons
const boolean3 = 3 > 2; // true, 3 is indeed greater than 2
const boolean4 = 3 < 2; // false, 3 is not less than 2
const boolean5 = 4 >= 4; // true, 4 is equal to 4, so it is greater than or equal to 4
const boolean6 = 4 <= 4; // true, 4 is equal to 4, so it is less than or equal to 4

console.log({ boolean3, boolean4, boolean5, boolean6 });

const boolean7 = "Aword" < "Zword"; // true, "A" comes before "Z" lexicographically
const boolean8 = "Granate" > "Rubi"; // false, "G" comes before "R" lexicographically
const boolean9 = "Perla" <= "Amatista"; // false, "P" comes after "A" lexicographically
const boolean10 = "Perla" >= "Amatista"; // true, "P" comes after "A" lexicographically
const boolean11 = "Perla" == "Amatista"; // false, "Perla" is not equal to "Amatista"
const boolean12 = "Perla" != "Amatista"; // true, "Perla" is not equal to "Amatista"
const boolean13 = "Perla" === "Amatista"; // false, "Perla" and "Amatista" are not strictly equal
const boolean14 = "Perla" !== "Amatista"; // true, "Perla" and "Amatista" are not strictly equal

console.log({
  boolean7,
  boolean8,
  boolean9,
  boolean10,
  boolean11,
  boolean12,
  boolean13,
  boolean14,
});

const boolean15 = NaN === NaN; // false, NaN is not equal to NaN by definition
const boolean16 = NaN == NaN; // false, NaN is not equal to NaN by definition
const boolean17 = NaN != NaN; // true, NaN is not equal to itself
const boolean18 = NaN !== NaN; // true, NaN is not identical to itself
const boolean19 = NaN < NaN; // false, NaN is not considered less than any value, including itself
const boolean20 = NaN > NaN; // false, NaN is not considered greater than any value, including itself
const boolean21 = NaN <= NaN; // false, NaN is not considered less than or equal to any value
const boolean22 = NaN >= NaN; // false, NaN is not considered greater than or equal to any value
console.log({
  boolean15,
  boolean16,
  boolean17,
  boolean18,
  boolean19,
  boolean20,
  boolean21,
  boolean22,
});

const boolean23 = NaN === 0; // false, NaN is not strictly equal to 0
const boolean24 = NaN == 0; // false, NaN is not equal to 0
const boolean25 = NaN != 0; // true, NaN is not equal to 0
const boolean26 = NaN !== 0; // true, NaN is not strictly equal to 0
const boolean27 = NaN < 0; // false, NaN is not considered less than 0
const boolean28 = NaN > 0; // false, NaN is not considered greater than 0
const boolean29 = NaN <= 0; // false, NaN is not considered less than or equal to 0
const boolean30 = NaN >= 0; // false, NaN is not considered greater than or equal to 0

console.log({
  boolean23,
  boolean24,
  boolean25,
  boolean26,
  boolean27,
  boolean28,
  boolean29,
  boolean30,
});

// Logic operators
const logic1 = true && false; // false, AND operator
const logic2 = true && true; // true, AND operator
const logic3 = false || true; // true, OR operator
const logic4 = false || false; // true, OR operator
const logic5 = !true; // false, NOT operator
const logic6 = !false; // true, NOT operator
const logic7 = false && 1 + 1 === 2; // false, but the right side is not evaluated
const logic8 = true || 1 + 1 === 2; // true, but the right side is not evaluated
console.log({ logic1, logic2, logic3, logic4, logic5, logic6, logic7, logic8 });

// Ternary
const ternary1 = 5 > 4 ? "true" : "false"; // 'true'
const ternary2 = true ? 1 : 2; // 1
const ternary3 = false ? 1 : 2; // 2
console.log({ ternary1, ternary2, ternary3 });

// Null
const null1 = null;
console.log({ null1 });

// Undefined
const undefined1 = undefined;
console.log({ undefined1 });

// Type conversions
const typeConversion1 = 8 * null; // 0
const typeConversion2 = "5" - 1; // 4
const typeConversion3 = "5" + 1; // '51'
const typeConversion4 = "five" * 2; // NaN
const typeConversion5 = false == 0; // true
const typeConversion6 = true == 1; // true
const typeConversion7 = true === 1; // false
const typeConversion8 = false === 0; // false
const typeConversion9 = "1" == 1; // true
const typeConversion10 = "1" === 1; // false
const typeConversion11 = "1" != 1; // false
const typeConversion12 = "1" !== 1; // true
const typeConversion13 = "1" > 1; // false
const typeConversion14 = "1" < 1; // false
const typeConversion15 = "1" >= 1; // true
const typeConversion16 = "1" <= 1; // true
const typeConversion17 = null === undefined; // false
const typeConversion18 = null == undefined; // true
const typeConversion19 = null == 0; // false
const typeConversion20 = null === 0; // false
const typeConversion21 = null != 0; // true
const typeConversion22 = null !== 0; // true
const typeConversion23 = "" === false; // false
const typeConversion24 = "" == false; // true
const typeConversion25 = "" != false; // false
const typeConversion26 = "" !== false; // true
const typeConversion27 = "" > false; // false
const typeConversion28 = "" < false; // false
const typeConversion29 = "" >= false; // true
const typeConversion30 = "" <= false; // true
const typeConversion31 = null || "usuario"; // 'usuario'
const typeConversion32 = null && "usuario"; // null
const typeConversion33 = null ?? "usuario"; // 'usuario'
const typeConversion34 = 0 || 100; // 100
const typeConversion35 = 0 ?? 100; // 0
const typeConversion36 = 0 && 100; // 0
const typeConversion37 = null ?? 100; // 100
console.log({
  typeConversion1,
  typeConversion2,
  typeConversion3,
  typeConversion4,
  typeConversion5,
  typeConversion6,
  typeConversion7,
  typeConversion8,
  typeConversion9,
  typeConversion10,
  typeConversion11,
  typeConversion12,
  typeConversion13,
  typeConversion14,
  typeConversion15,
  typeConversion16,
  typeConversion17,
  typeConversion18,
  typeConversion19,
  typeConversion20,
  typeConversion21,
  typeConversion22,
  typeConversion23,
  typeConversion24,
  typeConversion25,
  typeConversion26,
  typeConversion27,
  typeConversion28,
  typeConversion29,
  typeConversion30,
  typeConversion31,
  typeConversion32,
  typeConversion33,
  typeConversion34,
  typeConversion35,
  typeConversion36,
  typeConversion37,
});

// Additional type conversion special cases
const typeConversion38 = "0" == false; // true, because "0" is coerced to a number, which becomes 0, and 0 == false
const typeConversion39 = "0" === false; // false, strict comparison (different types: string and boolean)
const typeConversion40 = [] == false; // true, an empty array is coerced to an empty string, which becomes 0, and 0 == false
// const typeConversion41 = [] === false;  false, strict comparison (array and boolean) -> This condition will always return false since Javascript compares objects by reference, not value
const typeConversion42 = [] == 0; // true, the empty array is coerced to an empty string, which becomes 0
const typeConversion43 = [null] == 0; // true, [null] is coerced to an empty string, which becomes 0
const typeConversion44 = [undefined] == 0; // true, [undefined] is coerced to an empty string, which becomes 0
const typeConversion45 = [1, 2] == "1,2"; // true, the array is coerced to the string "1,2", which matches the other side
const typeConversion46 = [1] == 1; // true, [1] is coerced to "1", which is then coerced to the number 1
const typeConversion47 = {} == {}; // false, objects are only equal if they reference the same instance
const typeConversion48 = {} == "[object Object]"; // false, {} is not coerced into its string representation in this case
const typeConversion49 = null + 1; // 1, null is coerced to 0 in arithmetic operations
const typeConversion50 = undefined + 1; // NaN, undefined cannot be coerced into a number for arithmetic
const typeConversion51 = false + true; // 1, false is 0 and true is 1 in arithmetic
const typeConversion52 = true + "5"; // 'true5', true is coerced to a string "true" and concatenated with "5"
const typeConversion53 = 5 + undefined; // NaN, undefined cannot be coerced to a number in addition
const typeConversion54 = "5" - "2"; // 3, both strings are coerced to numbers for arithmetic subtraction
const typeConversion55 = "5" - ""; // 5, "" is coerced to 0 in arithmetic
const typeConversion56 = "5" * "2"; // 10, both strings are coerced to numbers for multiplication
const typeConversion57 = "5" / "2"; // 2.5, both strings are coerced to numbers for division
const typeConversion58 = "5" * "five"; // NaN, "five" cannot be coerced into a number
const typeConversion59 = null == 0; // false, null is only loosely equal to undefined, not to 0
const typeConversion60 = undefined == 0; // false, undefined is not loosely equal to any number, including 0
const typeConversion61 = undefined == null; // true, undefined is loosely equal to null

console.log({
  typeConversion38,
  typeConversion39,
  typeConversion40,
  typeConversion42,
  typeConversion43,
  typeConversion44,
  typeConversion45,
  typeConversion46,
  typeConversion47,
  typeConversion48,
  typeConversion49,
  typeConversion50,
  typeConversion51,
  typeConversion52,
  typeConversion53,
  typeConversion54,
  typeConversion55,
  typeConversion56,
  typeConversion57,
  typeConversion58,
  typeConversion59,
  typeConversion60,
  typeConversion61,
});

// Ternary special cases
// const typeConversion62 = null || undefined ?? "fallback"; // should be undefined, || has higher precedence than ??, but SyntaxError?
const typeConversion63 = (null || undefined) ?? "fallback"; // 'fallback', parentheses force evaluation of || first, then ?? takes over
// const typeConversion64 = null ?? undefined || "fallback"; // should be "fallback", ?? has higher precedence than ||, but SyntaxError?
const typeConversion65 = (null ?? undefined) || "fallback"; // 'fallback', parentheses force evaluation of ?? first, then || takes over
const typeConversion66 = (0 && "not used") || "fallback"; // "fallback", 0 is falsy, so && short-circuits and || returns "fallback"
const typeConversion67 = 0 || (false && "not used"); // false, || has higher precedence, 0 is falsy, so || evaluates to false
// const typeConversion68 = 1 && null ?? "used"; // should be"used", && has higher precedence than ??, so null is evaluated, leading to the fallback, but SyntaxError?
const typeConversion69 = (1 && null) ?? "used"; // "used", parentheses force evaluation of && first, then ?? returns the fallback
const typeConversion70 = 1 || (null && "not used"); // 1, || has higher precedence than &&, so 1 short-circuits the evaluation

console.log({
  typeConversion63,
  typeConversion65,
  typeConversion66,
  typeConversion67,
  typeConversion69,
  typeConversion70,
});
