// Binding: generic word to represent all types of storing a value
// 1. Let: block scope -> "tentacles" or "links" (enlaces in spanish), they grab the value, they are not "boxes" that contain the value
// 2. Var: function scope -> "variables", how the "tentacles" or "links" were declared before 2015
// 3. Constant: constants, they point to the same value while it exists
// Environment: the collection of bindings and their values that exist at a given time

let caught = 5 * 5;
let ten = 10;
console.log({ ten, caught, multiplyTen: ten * ten });
// { ten: 10, caught: 25, multiplyTen: 100 }

let mood = "light";
console.log({ mood });
//{ mood: 'light' }
mood = "dark";
console.log({ mood });
// { mood: 'dark' }

let luigisDebt = 140;
console.log({ luigisDebt });
// { luigisDebt: 140 }
luigisDebt = luigisDebt - 35;
console.log({ luigisDebt });
// { luigisDebt: 105 }

let noValue;
console.log({ noValue });
// { noValue: undefined }

let one = 1;
let two = 2;
console.log({ sumOneTwo: one + two });
// { sumOneTwo: 3 }

var name = "Ayda";
const greeting = "Hello";
console.log({ result3: greeting + name });
// { result3: 'HelloAyda' }

// [Binding names]
const $myName = "$myName";
const _myName = "_myName";
const fuzzylittleturtle = 'fuzzylittleturtle';
const fuzzy_little_turtle = 'fuzzy_little_turtle';
const FuzzyLittleTurtle = 'FuzzyLittleTurtle';
const fuzzyLittleTurtle = 'fuzzyLittleTurtle';
const FUZZY_LITTLE_TURTLE = 'FUZZY_LITTLE_TURTLE';
// const if = 'test'; --> Not allowed, SyntaxError
/* Keywords
1. break
2. case
3. catch
4. class
5. const
6. continue
7. debugger
8. default
9. delete
10. do
11. else
12. enum
13. export
14. extends
15. false
16. finally
17. for
18. function
19. if
20. implements
21. import
22. in
23. instanceof
24. interface
25. let
26. new
27. package
28. private
29. protected
30. public
31. return
32. static
33. super
34. switch
35. this
36. throw
37. true
38. try
39. typeof
40. var
41. void
42. while
43. with
44. yield
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

// [WHILE loop]: The condition is checked before the code block is executed. If the condition is false initially, the loop will not execute at all.
console.log("[WHILE]");
let whileNumber = 0;
while (whileNumber <= 12) {
  console.log(whileNumber);
  whileNumber += 2;
}
console.log({ whileNumber });
// 0 2 4 6 8 10 12 { whileNumber: 14 }

let whileResult = 1;
let whileCounter = 0;
while (whileCounter < 10) {
  whileResult = whileResult * 2;
  whileCounter = whileCounter + 1;
}
console.log({ whileResult, whileCounter });
// { whileResult: 1024, whileCounter: 10 }

// [DO WHILE loop]: The code block is executed at least once, and the condition is checked after the code block has been executed. Even if the condition is false initially, the loop runs one time before the condition is evaluated.
console.log("[DO WHILE]");
let doWhileCounter = 3;
do {
  console.log(doWhileCounter);
  doWhileCounter++;
} while (doWhileCounter < 3);
// 3, because it runs at least once even though doWhileCounter is not less than 3

// [FOR loop]: A slightly shorter and more comprehensive form to the kind of while loops seen before
console.log("[FOR]");
for (let forNumber = 0; forNumber <= 12; forNumber = forNumber + 2) {
  console.log(forNumber);
}
// 0 2 4 6 8 10 12

let forResult = 1;
for (let forCounter = 0; forCounter < 10; forCounter = forCounter + 1) {
  console.log(forCounter);
  forResult = forResult * 2;
}
console.log({ forResult });
// 0 1 2 3 4 5 6 7 8 9 { forResult: 1024 }

// [FOR loop break]: the break statement has the effect of immediately jumping out of the enclosing loop. If there is no enclosing loop, it has no effect.
for (let current = 15; ; current = current + 1) {
  if (current % 7 == 0) {
    console.log(current);
    break;
  } else {
    console.log(`${current} is not divisible by 7.\n`);
  }
}
// 15 is not divisible by 7.
// 16 is not divisible by 7.
// 17 is not divisible by 7.
// 18 is not divisible by 7.
// 19 is not divisible by 7.
// 20 is not divisible by 7.
// 21

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
// 16 is not divisible by 7.
// 17 is not divisible by 7.
// 18 is not divisible by 7.
// 19 is not divisible by 7.
// 21

// Observations:
// 1. The for construct does not have a part that checks for the end of the loop.
// 2. The loop will never stop unless the break statement inside is executed
// 3. If you were to remove the break statement or you you write an end condition that always produce true, the loop will never stop -> infinite loop
// 4. While the break statement immediately exits the loop, the continue statement immediately returns to the condition of the loop. This enables us to skip specific iterations of the loop without exiting the entire loop.

// [Bindings succinctly]
let counter = 1;
console.log({ counter });
// { counter: 1 }
counter = counter + 1;
console.log({ counter });
// { counter: 2 }
counter += 1;
console.log({ counter });
// { counter: 3 }
counter++;
console.log({ counter });
// { counter: 4 }

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

weather = 'cloudy';
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
weather = 'sunny';
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
