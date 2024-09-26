/*
	[3. WeakMap]
	- WeakMap is a collection of key/value pairs in which the keys are weakly referenced.
	- The keys must be objects and the values can be arbitrary values.
	- The keys of WeakMap are weakly referenced, which means that they can be garbage collected if there are no other references to them.
	- WeakMap is not iterable, so there is no method to get all keys or values.
	- WeakMap has the following methods:
		- set(key, value): Adds a new key/value pair to the WeakMap.
		- get(key): Returns the value associated with the key.
		- has(key): Returns true if the key exists in the WeakMap, otherwise false.
		- delete(key): Removes the key/value pair from the WeakMap.
		- clear(): Removes all key/value pairs from the WeakMap.
	- WeakMap is useful for storing private data associated with an object. 

	Use case: private data
	If we're working with an object that "belongs" to another code (even third-party libraries), and we want to store some data on it, we can use WeakMap to store the private data. 
	This way, we can ensure that the private data is not accessible from outside the object and it should only exists while the object is alive.

	Use case: caching
	WeakMap can be used for caching data that is associated with an object.

*/

// Explaining reference and garbage collection
let john = { name: "John" };
john = null; // The object is no longer referenced and can be garbage collected

let john2 = { name: "John" };
const array2 = [john2];
john2 = null; // The object is still referenced by the array and cannot be garbage collected
console.log(array2[0]); // { name: "John" }

let john3 = { name: "John" };
let map3 = new Map();
map3.set(john3, "some value");
john3 = null; // The object is still referenced by the map and cannot be garbage collected
console.log(map3.get(john3)); // this won't work because john3 is null
for (const [key, value] of map3.entries()) {
  // this will work
  console.log({ key, value });
}
// -> { key: { name: 'John' }, value: 'some value' }

// How WeakMap works
let john4 = { name: "John" };
let weakMap4 = new WeakMap();
weakMap4.set(john4, "some value");
john4 = null; // The object is no longer referenced and can be garbage collected, john4 is removed from memory
// WeakMap does not have a method to get all keys or values

// Use case: private data
const map5 = new Map();
const weakMap5 = new WeakMap();

const countVisits = (user) => {
  let count = map5.get(user) || 0;
  map5.set(user, count + 1);
};
let user5 = { name: "John" };
countVisits(user5);
user5 = null; // Now, john object should be garbage collected, but remains in memory, as it’s a key in visitsCountMap.

const countVisitsWeak = (user) => {
  let count = weakMap5.get(user) || 0;
  weakMap5.set(user, count + 1);
};

let user6 = { name: "John" };
countVisitsWeak(user6);
user6 = null; // Now, john object should be garbage collected, as it’s a key in visitsCountWeakMap.

// Use case: caching
// With Map -------------------------------------------------------------------------------------------------------------------------------------------------
// 📁 cache.js
let cache = new Map();

// calculate and remember the result
function process(obj) {
  if (!cache.has(obj)) {
    let result = /* calculations of the result for */ obj;

    cache.set(obj, result);
    return result;
  }

  return cache.get(obj);
}

// Now we use process() in another file:

// 📁 main.js
let obj = {
  /* let's say we have an object */
};

let result1 = process(obj); // calculated

// ...later, from another place of the code...
let result2 = process(obj); // remembered result taken from cache

// ...later, when the object is not needed any more:
obj = null;

console.log(cache.size); // 1 (Ouch! The object is still in cache, taking memory!)

// With WeakMap -------------------------------------------------------------------------------------------------------------------------------------------------

// 📁 cache.js
let cache2 = new WeakMap();

// calculate and remember the result
function process(obj) {
  if (!cache2.has(obj)) {
    let result = /* calculate the result for */ obj;

    cache2.set(obj, result);
    return result;
  }

  return cache2.get(obj);
}

// 📁 main.js
let obj2 = {
  /* some object */
};

let result3 = process(obj2);
let result4 = process(obj2);

// ...later, when the object is not needed any more:
obj2 = null;

// Can't get cache.size, as it's a WeakMap,
// but it's 0 or soon be 0
// When obj gets garbage collected, cached data will be removed as well
