/*
	[Keyed Collections]
	Keyed collections were introduced with ES6 as an alternative to arrays and objects, which are the only data structures available in JS to that point.
	1. Map
	2. Set
	3. WeakMap
	4. WeakSet
*/

/*
	[1. Map]
	A Map object is a simple key/value map and can iterate its elements in insertion order.
	Objects have been used to map strings to values
	Objects allow you to set keys to values, retrieve those values, delete keys, and detect wheter something is stored at a key.

	[Methods]
		new Map() – creates the map.
		map.set(key, value) – stores the value by the key.
		map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
		map.has(key) – returns true if the key exists, false otherwise.
		map.delete(key) – removes the element (the key/value pair) by the key.
		map.clear() – removes everything from the map.
		map.size – returns the current element count.
		Iterating over Map:
			map.keys() – returns an iterable for keys,
			map.values() – returns an iterable for values,
			map.entries() – returns an iterable for entries [key, value], it’s used by default in for..of.
			map.forEach(func) – allows to run a function for every element of the map.
	
	[Differences between Map and Object]
	1. Accidental Keys
		- A Map does not contain any keys by default. It only contains what is explicitly put into it.
		- An Object has a prototype, so there are default keys in the map that could collide with your keys if you're not careful. Note: Object.create(null) can be used to create an object without a prototype.
	2. Security
		- A Map is safe to use with user-provided keys and values.
		- Setting user-provided key-value pairs on an Object may allow an attacker to override the object's prototype, which can lead to object injection attacks. Like the accidental keys issue, this can be also mitigated by using a null - prototype object.
	3. Key Types
		- A Map's keys can be any value, including functions, objects, or any primitive.
		- An Object's keys are always strings or symbols.
	4. Key Order
		- They keys in Map are ordered in a simple, straightforward way: they are ordered in the order they were added to the Map (entries, keys and values methods).
		- Although the keys of an ordinary Object are ordered now, this was not always the case, and the order is complex. As a result, it's best not to rely on it.
	5. Size
		- The number of items in a Map is easily retrieved from its size property.
		- Determining the number of items in an Object is more roundabout and less efficient. A common way to do it: Object.keys(obj).length, but this requires the entire object to be read in memory.
	6. Iteration
		- A map is an iterable, so it can be directly iterated
		- Object does not implement an iteraion protocol, and so objects are not directly itrable using the JavaScript for...of statement (by default).
			- An object can implement the iteration protocol, or you can get an iterable for an object using Object.keys or Object.entries
			- The for...in statement allows you to iterate over the enumerable properties of an object
	7. Performance
		- Maps perform better in scenarios involving frequent addition and removal of key-value pairs.
		- Objects perform better in scenarios involving high-volume read operations, not so for frequent additions and removals of key-value pairs.
	8. Memory Usage
		- Maps consume more memory than objects for small numbers of key-value pairs.
		- Objects consume more memory than maps for large numbers of key-value pairs.
	9. Use Cases
		- Maps are useful when you need to store key-value pairs in a collection and need keys that are not strings.
		- Objects are useful when you need to store key-value pairs in a collection and need keys that are strings.
	10. Serialization and parsing
		- Maps are not directly serializable to JSON, but they can be converted to and from arrays using the spread operator.
			- Using JSON.stringify() with its replacer argument, and using JSON.parse() with its reviver argument
		- Objects are directly serializable to JSON.
			- JSON.stringify(obj) will serialize an object to a JSON string.
			- JSON.parse(str) will parse a JSON string to an object.

	[How Map compares keys]
	To test keys for equivalence, Map uses the algorithm SameValueZero. 
	It is roughly the same as strict equality ===, but the difference is that NaN is considered equal to NaN. So NaN can be used as the key as well.
	This algorithm can’t be changed or customized.
*/

// Simple map with different key types
const map1 = new Map();
map1.set("key1", "value1");
map1.set(1, "number1");
map1.set(true, "boolean1");

map1.get("key1"); // -> 'value1'
map1.get(1); // -> 'number1'
map1.get(true); // -> 'boolean1'
map1.size; // -> 3

map1.has("key1"); // -> true
map1.has("key2"); // -> false
map1.has(1); // -> true
map1.has(2); // -> false
map1.has(true); // -> true
map1.has(false); // -> false

map1.delete("key1"); // -> true and removes 'key1'
map1.has("key1"); // -> false

map1.clear();

// Map with object as keys
const map2 = new Map();
const obj1 = {
  name: "John",
  age: 30,
};
const obj2 = {
  name: "Joe",
  age: 40,
};
const obj3 = {
  name: "Jane",
  age: 20,
};
map2.set(obj1, "obj1");
map2.set(obj2, "obj2");
map2.set(obj3, "obj3");

map2.get(obj1); // -> 'obj1'
map2.get(obj2); // -> 'obj2'

// Trying to create an object with object keys
const objWithObjectKeys = {};
objWithObjectKeys[obj1] = "test1";
objWithObjectKeys[obj2] = "test2";
console.log({ objWithObjectKeys });
// -> { '[object Object]': 'test2' }

// Iterating over a Map
const map3 = new Map([
  ["key2", "value2"],
  ["key3", "value3"],
  ["key1", "value1"],
]);
for (const key of map3.keys()) {
  console.log({ key });
}
// -> { key: 'key2' }
// -> { key: 'key3' }
// -> { key: 'key1' }

for (const value of map3.values()) {
  console.log({ value });
}
// -> { value: 'value2' }
// -> { value: 'value3' }
// -> { value: 'value1' }

for (const [key, value] of map3.entries()) {
  console.log({ key, value });
}
// -> { key: 'key2', value: 'value2' }
// -> { key: 'key3', value: 'value3' }
// -> { key: 'key1', value: 'value1' }

for (const [key, value] of map3) {
  console.log({ key, value });
}
// -> { key: 'key2', value: 'value2' }
// -> { key: 'key3', value: 'value3' }
// -> { key: 'key1', value: 'value1' }

map3.forEach((value, key, map) => {
  console.log({ key, value, map });
});
// -> { key: 'key2', value: 'value2', map: Map { 'key2' => 'value2', 'key3' => 'value3', 'key1' => 'value1' } }
// -> { key: 'key3', value: 'value3', map: Map { 'key2' => 'value2', 'key3' => 'value3', 'key1' => 'value1' } }
// -> { key: 'key1', value: 'value1', map: Map { 'key2' => 'value2', 'key3' => 'value3', 'key1' => 'value1' } }

// Create a Map from an Object
const obj4 = {
  key1: "value1",
  key2: "value2",
  key3: "value3",
};
const map4 = new Map(Object.entries(obj4));

// Create an Object from a Map
const obj5 = Object.fromEntries(map4);

// Map serialization
const map5 = new Map([
  ["key1", "value1"],
  ["key2", "value2"],
  ["key3", "value3"],
]);
const map6 = [
  new Map([
    [
      "a",
      {
        b: {
          c: new Map([["d", "text"]]),
        },
      },
    ],
  ]),
];

function replacer(key, value) {
  if (value instanceof Map) {
    return {
      dataType: "Map",
      value: Array.from(value.entries()), // or with spread: value: [...value]
    };
  } else {
    return value;
  }
}

function reviver(key, value) {
  if (typeof value === "object" && value !== null) {
    if (value.dataType === "Map") {
      return new Map(value.value);
    }
  }
  return value;
}

const str1 = JSON.stringify(map5, replacer);
const newValue1 = JSON.parse(str1, reviver);
console.log({ map5, str1, newValue1 });

const str2 = JSON.stringify(map6, replacer);
const newValue2 = JSON.parse(str2, reviver);
console.log({ map6, str2, newValue2 });

// Cloning maps
const map7 = new Map([
  [1, "value1"],
  [2, "value2"],
  [3, "value3"],
]);
const map8 = new Map(map7);
const value1FromMap7 = map7.get(1);
const value1FromMap8 = map8.get(1);
const comparingMaps = map7 === map8; // -> false
const comparingValues = value1FromMap7 === value1FromMap8; // -> true

// Merging maps: the last key-value pair will be retained
const map9 = new Map([
  [1, "value1"],
  [2, "valueThatWillBeLosted"],
]);
const map10 = new Map([
  [2, "valueThatWillBeRetained"],
  [3, "value3"],
]);
const mergedMap = new Map([...map9, ...map10]);
console.log({ mergedMap });
// -> Map { 1 => 'value1', 2 => 'valueThatWillBeRetained', 3 => 'value3' }

// Accidental keys example
// a. Using Map
const map11 = new Map();
map11.set("key1", "value1");
map11.set("key2", "value2");
console.log(map11.has("key1")); // true
console.log(map11.has("toString")); // false, 'toString' is not an accidental key in Map

// b. Using Object
const obj6 = {
  key1: "value1",
  key2: "value2",
};
console.log(obj6.hasOwnProperty("key1")); // true
console.log(obj6.hasOwnProperty("toString")); // false, but 'toString' exists in the prototype chain

// c. Using Object.create(null) to avoid prototype keys
const obj7 = Object.create(null);
obj7.key1 = "value1";
obj7.key2 = "value2";
console.log(obj7.hasOwnProperty("key1")); // TypeError: obj7.hasOwnProperty is not a function
console.log("toString" in obj7); // false, 'toString' does not exist in the object

// Security example
// a. Using Map
const map12 = new Map();
map12.set("userKey", "userValue");
map12.set({}, "objectKey");
map12.set(function () {}, "functionKey");

console.log({ userKey: map12.get("userKey") }); // 'userValue'
console.log({ objectKey: map12.get({}) }); // undefined, different object reference
console.log({ functionKey: map12.get(function () {}) }); // undefined, different function reference

// b. Using Object
const obj8 = {
  userKey: "userValue",
};
obj8["__proto__"] = { isAdmin: true };
console.log({ isAdmin: obj8.isAdmin }); // true, prototype pollution

// c. Mitigating with Object.create(null)
const obj9 = Object.create(null);
obj9.userKey = "userValue";
obj9["__proto__"] = { isAdmin: true };
console.log({ isAdmin: obj9.isAdmin }); // undefined, no prototype pollution
