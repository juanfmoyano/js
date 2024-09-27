import { cloneDeep } from "lodash";

/*
  [Property flags]
  Objects properties, besides a value, have three special attributes (so-called “flags”):
  - writable – if true, the value can be changed, otherwise it’s read-only.
      On strict mode, if a non-configurable property has writable: false, there’s an error.
      On non-strict mode, the assignment is silently ignored.
  - enumerable – if true, then listed in loops, otherwise not listed (for..in, Object.keys, console.log, etc.).
  - configurable – if true, the property can be deleted and these attributes can be modified, otherwise not.
			Exception: we can change writable from true to false, but not back.

  To change the flags, we can use the method Object.defineProperty.
		When we create a property by simple assignment, all flags are true by default.
    When we create a property using Object.defineProperty, all flags are false and the value is undefined.
		When we update a property using Object.defineProperty, the flags are not changed, only the specified flags are updated.
*/

// 1. writable true, enumerable true, configurable true
const obj10 = {
  name: "John",
};
console.log(Object.getOwnPropertyDescriptor(obj10, "name"));
// -> { value: 'John', writable: true, enumerable: true, configurable: true }

// a. Can write
obj10.name = "Mike";
console.log({ name: obj10.name });
// -> { name: 'Mike' }

// b. Can enumerate
for (let key in obj10) {
  console.log({ key, value: obj10[key] });
}
// -> { key: 'name', value: 'Mike' }
console.log(Object.keys(obj10));
// -> [ 'name' ]

// c. Can configure
Object.defineProperty(obj10, "name", {
  writable: false,
  enumerable: false,
  configurable: false,
});
console.log(Object.getOwnPropertyDescriptor(obj10, "name"));
// -> { value: 'Mike', writable: false, enumerable: false, configurable: false }

// 2. writable false
const obj11 = {
  age: 30,
};
Object.defineProperty(obj11, "lastName", {
  value: "Doe",
  writable: false,
});
console.log(Object.getOwnPropertyDescriptor(obj11, "lastName"));
// -> { value: 'Doe', writable: false, enumerable: false, configurable: false }

obj11.lastName = "Smith"; // Error in strict mode, silently ignored in non-strict mode
console.log({ lastName: obj11.lastName });
// -> { lastName: 'Doe' }

// 3. enumerable false
const obj12 = {
  middleName: "John",
};
console.log(Object.getOwnPropertyDescriptor(obj12, "middleName"));
// -> { value: 'John', writable: true, enumerable: true, configurable: true } - by default enumerable is true and configurable too
Object.defineProperty(obj12, "middleName", {
  enumerable: false,
});
console.log(Object.getOwnPropertyDescriptor(obj12, "middleName"));
// -> { value: 'John', writable: true, enumerable: false, configurable: true }

for (let key in obj12) {
  console.log({ key, value: obj12[key] });
}
// -> nothing is printed
console.log(Object.keys(obj12));
// -> []

// 4. configurable false
const obj13 = {
  lastName: "Doe",
};
Object.defineProperty(obj13, "firstName", {
  value: "John",
  writable: true,
  enumerable: true,
  configurable: false,
});
console.log(Object.getOwnPropertyDescriptor(obj13, "firstName"));
// -> { value: 'John', writable: true, enumerable: true, configurable: false }

Object.defineProperty(obj13, "firstName", {
  enumerable: false,
  configurable: true,
});
// -> ERROR - TypeError: Cannot redefine property: firstName

Object.defineProperty(obj13, "firstName", {
  writable: false, // Allowed writable true to false
});
console.log(Object.getOwnPropertyDescriptor(obj13, "firstName"));
// -> { value: 'John', writable: false, enumerable: true, configurable: false }

delete obj13.firstName; // Error in strict mode, silently ignored in non-strict mode
console.log(obj13);
// -> { lastName: 'Doe', firstName: 'John' }

/*
	[Object.defineProperties]
	To define multiple properties at once, we can use Object.defineProperties.

	[Object.getOwnPropertyDescriptors]
	To get all property descriptors at once, we can use Object.getOwnPropertyDescriptors.

	[Clone]
	We can use both methods to clone an object with all properties.
	If you do only Object.assign, then the flags are not copied.
	If you use a for..in loop, doesn't copy the flags too, besides it ignores symbolic and non-enumerable properties.
	
*/
const obj14 = {};
Object.defineProperties(obj14, {
  name: {
    value: "John",
    writable: true,
  },
  age: {
    value: 30,
    writable: false,
  },
});

console.log(Object.getOwnPropertyDescriptors(obj14));
// {
// 	name: { value: 'John', writable: true, enumerable: false, configurable: false },
// 	age: { value: 30, writable: false, enumerable: false, configurable: false }
// }

const obj14Clone = Object.defineProperties(
  {},
  Object.getOwnPropertyDescriptors(obj14)
);
console.log(Object.getOwnPropertyDescriptors(obj14Clone));
// {
// 	name: { value: 'John', writable: true, enumerable: false, configurable: false },
// 	age: { value: 30, writable: false, enumerable: false, configurable: false }
// }

// 5. Clone with Object.assign
const obj15 = {};
Object.defineProperties(obj15, {
  name: {
    value: "John",
    writable: false,
    enumerable: true,
  },
  age: {
    value: 30,
    writable: true,
    enumerable: true,
  },
});
console.log(obj15);
// { name: 'John', age: 30 }
console.log(Object.getOwnPropertyDescriptors(obj15));
// {
// 	name: { value: 'John', writable: true, enumerable: false, configurable: false },
// 	age: { value: 30, writable: true, enumerable: false, configurable: false }
// }

const obj15Clone = Object.assign({}, obj15);
console.log(Object.getOwnPropertyDescriptors(obj15Clone));
// {
// 	name: { value: 'John', writable: true, enumerable: true, configurable: true },
// 	age: { value: 30, writable: true, enumerable: true, configurable: true }
// }

const obj15Clone2 = {};
for (let key in obj15) {
  obj15Clone2[key] = obj15[key];
}
console.log(Object.getOwnPropertyDescriptors(obj15Clone2));
// {
// 	name: { value: 'John', writable: true, enumerable: true, configurable: true },
// 	age: { value: 30, writable: true, enumerable: true, configurable: true }
// }

const user = {};
Object.defineProperties(user, {
  name: {
    value: "Juanfri",
    writable: true,
    enumerable: true,
    configurable: false,
  },
  nicknames: {
    value: ["Juancito", "Juanfre", "Juancho"],
    writable: true,
    enumerable: true,
    configurable: false,
  },
  addresses: {
    value: {
      home: "Calle 123",
      work: "Calle 456",
    },
    writable: true,
    enumerable: true,
    configurable: false,
  },
});
const userClone1 = Object.assign({}, user);
const userClone2 = {};
for (let key in user) {
  userClone2[key] = user[key];
}
const userClone3 = Object.defineProperties(
  {},
  Object.getOwnPropertyDescriptors(user)
);
const userClone4 = { ...user };
const userStructuredClone = structuredClone(user);
user.name = "Juan";
user.nicknames = [];
user.addresses.home = "Calle 789";
console.log({
  user,
  userClone1,
  userClone2,
  userClone3,
  userClone4,
  userStructuredClone,
});
console.log({
  addressKeepReference: user.addresses === userClone1.addresses,
  addressKeepReference2: user.addresses === userClone2.addresses,
  addressKeepReference3: user.addresses === userClone3.addresses,
  addressKeepReference4: user.addresses === userClone4.addresses,
  addressKeepReferenceStructuredClone:
    user.addresses === userStructuredClone.addresses,
});
// -> user: { name: 'Juan', nicknames: [], addresses: { home: 'Calle 789', work: 'Calle 456' }
// -> userClone1: { name: 'Juanfri', nicknames: [ 'Juancito', 'Juanfre', 'Juancho' ], addresses: { home: 'Calle 789', work: 'Calle 456' } }
// ->	userClone2: { name: 'Juanfri', nicknames: [ 'Juancito', 'Juanfre', 'Juancho' ], addresses: { home: 'Calle 789', work: 'Calle 456' } }
// -> userClone3: { name: 'Juanfri', nicknames: [ 'Juancito', 'Juanfre', 'Juancho' ], addresses: { home: 'Calle 789', work: 'Calle 456' } }
// -> userClone4: { name: 'Juanfri', nicknames: [ 'Juancito', 'Juanfre', 'Juancho' ], addresses: { home: 'Calle 789', work: 'Calle 456' } }
// -> userStructuredClone: { name: 'Juanfri', nicknames: [ 'Juancito', 'Juanfre', 'Juancho' ], addresses: { home: 'Calle 123', work: 'Calle 456' } }
// -> { addressKeepReference: true, addressKeepReference2: true, addressKeepReference3: true, addressKeepReference4: true, addressKeepReferenceStructuredClone: false }

const myObjWithFn = {
  name: "John",
  sayHi() {
    console.log("Hi");
  },
  nested: {
    home: "Calle 123",
    work: "Calle 456",
    test: {
      one: [1, 2, 3],
      two: "two",
    },
  },
};

const myObjWithFnClone = structuredClone(myObjWithFn); // DataCloneError: Failed to execute 'structuredClone'
const myObjWithFnClone2 = lodash.cloneDeep(myObjWithFn);
myObjWithFn.sayHi = () => console.log("Hello");
myObjWithFn.nested.home = "Calle 1000000000";
myObjWithFn.nested.test.one = [4, 5, 6];
myObjWithFn.nested.test.two = "three";

// Best option: use lodash
console.log({
  myObjWithFn: JSON.stringify(myObjWithFn),
  myObjWithFnClone2: JSON.stringify(myObjWithFnClone2),
});
// myObjWithFn: {
// 	name: 'John',
// 	sayHi: [Function (anonymous)],
// 	nested: { home: 'Calle 1000000000', work: 'Calle 456', test: { one: [4, 5, 6], two: "three" } }
// },
// myObjWithFnClone2: {
// 	name: 'John',
// 	sayHi: [Function: sayHi],
// 	nested: { home: 'Calle 123', work: 'Calle 456', test: { one: [1, 2, 3], two: "two" } }
// }

/*
	There are also methods that limit access to the whole object:

	Object.preventExtensions:
		Prevents new properties from being added to the object.
		Existing properties can still be modified or deleted.
	Object.seal:
		Prevents new properties from being added and marks all existing properties as non-configurable.
		Existing properties can still be modified but cannot be deleted.
	Object.freeze:
		Prevents new properties from being added, marks all existing properties as non-configurable, and makes all existing properties read-only.
		Neither the properties nor the object itself can be modified in any way.
	
	And also there are tests for them:
	
	Object.isExtensible(obj): Returns false if adding properties is forbidden, otherwise true.
	Object.isSealed(obj): Returns true if adding/removing properties is forbidden, and all existing properties have configurable: false.
	Object.isFrozen(obj): Returns true if adding/removing/changing properties is forbidden, and all current properties are configurable: false, writable: false.

	These methods are rarely used in practice.
*/

// Extension
const obj16 = { name: "Alice" };
Object.preventExtensions(obj16);
console.log(Object.isExtensible(obj16)); // false

obj16.age = 25; // Error in strict mode, silently ignored in non-strict mode
console.log(obj16); // { name: "Alice" }

obj16.name = "Bob"; // Allowed
console.log(obj16); // { name: "Bob" }

delete obj16.name; // Allowed
console.log(obj16); // {}

Object.defineProperty(obj, "name", {
  value: "Charlie",
  writable: false,
  configurable: false,
}); // Allowed

// Seal
const obj17 = { name: "Alice" };
Object.seal(obj17);
console.log(Object.isSealed(obj17)); // true

obj17.age = 25; // Error in strict mode, silently ignored in non-strict mode
console.log(obj17); // { name: "Alice" }

obj17.name = "Bob"; // Allowed
console.log(obj17); // { name: "Bob" }

delete obj17.name; // Error in strict mode, silently ignored in non-strict mode
console.log(obj17); // { name: "Bob" }

// Freeze
const obj18 = { name: "Alice" };
Object.freeze(obj18);
console.log(Object.isFrozen(obj18)); // true

obj18.age = 25; // Error in strict mode, silently ignored in non-strict mode
console.log(obj18); // { name: "Alice" }

obj18.name = "Bob"; // Error in strict mode, silently ignored in non-strict mode
console.log(obj18); // { name: "Alice" }

delete obj18.name; // Error in strict mode, silently ignored in non-strict mode
console.log(obj18); // { name: "Alice" }
