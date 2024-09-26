
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
