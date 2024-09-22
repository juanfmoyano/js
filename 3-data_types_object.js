/*
	[Objects]
	Objects are used to store collections of data and more complex entities.
	They are used to store keyed collections of various data and more complex entities.
	An object can be created with figure brackets {…} with an optional list of properties.
	A property is a “key: value” pair, where key is a string (also called a “property name”), and value can be anything.
	An empty object is written as {}.
	Properties are accessed using the dot notation or bracket notation.
*/

let user1 = new Object(); // "object constructor" syntax
let user2 = {}; // "object literal" syntax

/* 
	[Literals and properties]
	- A property has a key (also known as “name” or “identifier”) before the colon ":" and a value to the right of it.
	- We can add, remove and read properties from an object at any time.
	- Properties can be multiwornd names, but then they must be quoted.
	- Accessing multiword properties can only be done using square brackets
	- Square brackets also provide a way to obtain the property name as the result of any expression.
	- We can use square brackets in an object literal. That’s called computed properties.
*/

let user3 = {
  // an object
  name: "John", // by key "name" store value "John"
  age: 30, // by key "age" store value 30
};

console.log({ name: user3.name, age: user3.age });
user3.isAdmin = true; // add a new property
console.log({ user3 });
// -> { name: 'John', age: 30, isAdmin: true }
delete user3.age; // remove the property
console.log({ user3 });
// -> { name: 'John', isAdmin: true }

let user4 = {
  name: "John",
  age: 30,
  "likes birds": false, // multiword property name must be quoted
};
console.log({ user4 });
// -> { name: 'John', age: 30, 'likes birds': true }

// user4.likes birds = true; [ERROR] SyntaxError: Unexpected identifier
user4["likes birds"] = true; // multiword property name must be quoted
delete user4["likes birds"];

const key = "like birds";
user4[key] = true;

let fruit = prompt("Which fruit to buy?", "apple");
let bag = {
  [fruit]: 5, // the name of the property is taken from the variable fruit, you can use any name you want like 'banana', 'orange', etc.
};
console.log({ bag });
// -> { apple: 5 }

let fruit2 = prompt("Which fruit to buy?", "banana");
let bag2 = {};

bag2[fruit] = 5; // Also works
console.log({ bag2 });
// -> { banana: 5 }

let fruit3 = "apple";
let bag3 = {
  [fruit3 + "Computers"]: 5,
};
console.log({ bag3 });
// -> { appleComputers: 5 }

/*
	[Property value shorthand]
	When creating an object, if a property name matches a variable name, you can omit the property value.
*/
const createUser = (name, age) => {
  return {
    name, // same as name: name
    age, // same as age: age
  };
};

/*
	[Property names limitations]
	Property names must be strings or symbols (usually strings).
	Any other value, including objects, will be converted to a string.
	A variable cannot have a name equal to one of the language-reserved 'keywords', but an object property can.
	There are no limitations on property names. 
*/

const obj = {
  for: 1,
  let: 2,
  return: 3,
};
console.log({ value: obj.for + obj.let + obj.return });
// -> { value: 6 }

const obj2 = {
  0: "test",
};
console.log({ value: obj2["0"] });
// -> { value: 'test' }
console.log({ value: obj2[0] });
// -> { value: 'test' }

const obj2A = {};
const objPropTest1 = {};
const objPropTest2 = {};
obj2A[objPropTest1] = "test1";
obj2A[objPropTest2] = "test2";
console.log({ obj2A });
// -> { '[object Object]': 'test2' }

/*
	[Property existence test, "in" operator]
	To check if a property with a given key exists in an object, you can use the in operator.
	Is possible to access any property, there will be no error if the property doesn't exist
	Reading a non-existing property just returns undefined.
	This operator exists because accessing a non-existing property just returns undefined, and we can differentiate between an existing property set to undefined and a non-existing property.
*/

const obj3 = {};
console.log({
  value: obj3.noSuchProperty,
  valueIsUndefined: obj3.noSuchProperty === undefined,
});
// -> { value: undefined, valueIsUndefined: true }

const obj4 = {
  name: "John",
};
console.log({ ageExists: "age" in obj4, nameExists: "name" in obj4 });
// -> { ageExists: false, nameExists: true }

const obj5 = {
  age: undefined,
};
console.log({
  ageDotNotation: obj5.age,
  ageExists: "age" in obj5,
  ageIsUndefined: obj5.age === undefined,
});
// -> { ageDotNotation: undefined, ageExists: true, ageIsUndefined: true }

/*
	[The for...in loop]
	The for...in loop is used to loop over an object's properties.
	This is a completely different thing from the for(;;) loop.
*/

const obj6 = {
  name: "John",
  age: 30,
  isAdmin: true,
};

for (let key in obj6) {
  // You can use any variable name instead of key
  console.log({ key, value: obj6[key] });
}
// -> { key: 'name', value: 'John' }
// -> { key: 'age', value: 30 }
// -> { key: 'isAdmin', value: true }

/*
	[Ordered like an object]
	The short answer is: “ordered in a special fashion”: integer properties are sorted, others appear in creation order.
	The "integer property" term here means a string can be converted to-and-from an integer without any change
*/

const obj7 = {};
obj7["49"] = "Germany";
obj7["41"] = "Switzerland";
obj7["44"] = "Great Britain";
obj7["1"] = "USA";

for (let code in obj7) {
  console.log({ code, country: obj7[code] });
}
// -> { code: '1', country: 'USA' }
// -> { code: '41', country: 'Switzerland' }
// -> { code: '44', country: 'Great Britain' }
// -> { code: '49', country: 'Germany' }

const obj8 = {
  "+49": "Germany",
  "+41": "Switzerland",
  "+44": "Great Britain",
  // ...,
  "+1": "USA",
};
for (let code in obj8) {
  console.log({ code, country: obj8[code] });
}
// -> { code: '+49', country: 'Germany' }
// -> { code: '+41', country: 'Switzerland' }
// -> { code: '+44', country: 'Great Britain' }
// -> { code: '+1', country: 'USA' }

const obj9 = {
  1: "Germany",
  2: "Switzerland",
  3: "Great Britain",
  // ...,
  4: "USA",
};
for (let code in obj9) {
  console.log({ code, country: obj9[code] });
}
// -> { code: '1', country: 'Germany' }
// -> { code: '2', country: 'Switzerland' }
// -> { code: '3', country: 'Great Britain' }
// -> { code: '4', country: 'USA' }
