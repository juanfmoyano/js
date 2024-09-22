/*
	[4. WeakSet]
	- WeakSet objects are collections of objects. An object in the WeakSet may only occur once; it is unique in the WeakSet's collection.
	- The main differences between WeakSet and Set are:
		- WeakSet can only contain objects, not primitive values.
		- WeakSet is not iterable, so there is no method to get all keys or values.
		- WeakSet does not have size property.
		- WeakSet does not have clear() method.
	- WeakSet has only the following methods:
		- add(value): Adds the value to the WeakSet.
		- has(value): Returns true if the value exists in the WeakSet, otherwise false.
		- delete(value): Removes the value from the WeakSet.
	- WeakSet is useful for storing a collection of objects that should be garbage collected when they are no longer used.

*/

let visitedSet = new WeakSet();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

visitedSet.add(john); // John visited us
visitedSet.add(pete); // Then Pete
visitedSet.add(john); // John again

// visitedSet has 2 users now

// check if John visited?
console.log(visitedSet.has(john)); // true

// check if Mary visited?
console.log(visitedSet.has(mary)); // false

john = null;

// visitedSet will be cleaned automatically
