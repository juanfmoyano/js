/*
	[2. Set]
	A Set is a special type collection – “set of values” (without keys), where each value may occur only once.
	
	[Methods]
		new Set([iterable]) – creates the set, and if an iterable object is provided (usually an array), copies values from it into the set.
		set.add(value) – adds a value, returns the set itself.
		set.has(value) – returns true if the value exists in the set, otherwise false.
		set.delete(value) – removes the value, returns true if value existed at the moment of the call, otherwise false.
		set.clear() – removes everything from the set.
		set.size – is the elements count.
		Iteating over Set:
			set.keys() – returns an iterable object for values,
			set.values() – same as set.keys, for compatibility with Map,
			set.entries() – returns an iterable object for entries [value, value], exists for compatibility with Map.
			set.forEach(func, thisArg) – calls func(value, value, set) for each value in the set. Here, thisArg is the optional context object.
	
	[Set composition]
		- A.difference(B) – returns the set difference, i.e. a set that contains elements of A that are not in B.
		- A.intersection(B) – returns the set intersection, i.e. a set that contains elements that exist in both A and B.
		- A.symmetricDifference(B) – returns the set symmetric difference, i.e. a set that contains elements that exist in either A or B, but not in both.
		- A.union(B) – returns the set union, i.e. a set that contains all elements of A and all elements of B.
		- A.isDisjointFrom(B) – returns true if A has no elements in common with B.
		- A.isSubsetOf(B) – returns true if A is a subset of B.
		- A.isSupersetOf(B) – returns true if A is a superset of B.

	[Differences between Set and Array]
	1. Uniqueness
		- Set: Ensures all elements are unique, duplicate values are automatically removed
		- Array: Allows duplicate values, you need to manually remove them
	2. Order
		- Set: Keeps the order of elements, but does not have indexes
		- Array: Keeps the order of elements and has indexes
	3. Performance:
		- Set: Faster in case of searching for an element, removing an element, and checking for the presence of an element
		- Array: Faster in case of accessing elements by index, iterating over elements, and manipulating elements
	4. Iteration:
		- Set: can be directly iterated using for...of loop and have keys, values, and entries methods
		- Array: can also be iterated using for...of loop and have keys, values, and entries methods
	5. Size: 
		- Set: has a size property
		- Array: has a length property
	6. Use cases:
		- Set: When you need to store unique values and perform set operations like union, intersection, difference, and subset
		- Array: When you need to store values with indexes and perform operations like sorting, filtering, and mapping
	7. Methods:
		- Set: has add, delete, has, clear, and forEach methods
		- Array: has push, pop, shift, unshift, splice, slice, map, filter, reduce, and forEach methods

	[How Set compares values]
	To test values equality, Set uses the algorithm SameValueZero. 
	It is roughly the same as strict equality ===, but the difference is that NaN is considered equal to NaN. So NaN can be used as the key as well.
	This algorithm can’t be changed or customized.
*/

const set1 = new Set();
set1.add(1);
set1.add("some text");
set1.add("foo");

set1.has(1); // true
set1.delete("foo"); // true and removes 'foo'
set1.size; // 2

set1.clear();

// Iterating over Set
const set2 = new Set(["foo", "bar", "baz"]);
for (const value of set2) {
  console.log(value);
}
// -> foo
// -> bar
// -> baz

for (const value of set2.keys()) {
  console.log(value);
}
// -> foo
// -> bar
// -> baz

for (const value of set2.values()) {
  console.log(value);
}
// -> foo
// -> bar
// -> baz

for (const [value, valueAgain] of set2.entries()) {
  console.log(value, valueAgain);
}
// -> foo foo
// -> bar bar
// -> baz baz

set2.forEach((value, valueAgain, set) => {
  console.log({ value, valueAgain, set });
});
// -> { value: 'foo', valueAgain: 'foo', set: Set { 'foo', 'bar', 'baz' } }
// -> { value: 'bar', valueAgain: 'bar', set: Set { 'foo', 'bar', 'baz' } }
// -> { value: 'baz', valueAgain: 'baz', set: Set { 'foo', 'bar', 'baz' } }

// Set composition
const setA = new Set([1, 2, 3]);
const setB = new Set([2, 3, 4]);
const setC = new Set([3, 4]);
const setD = new Set([1, 2, 3, 4, 5]);
const setE = new Set([5, 6]);

const difference = setA.difference(setB); // Set { 1 }
const intersection = setA.intersection(setB); // Set { 2, 3 }
const symmetricDifference = setA.symmetricDifference(setB); // Set { 1, 4 }
const union = setA.union(setB); // Set { 1, 2, 3, 4 }
const isDisjointFrom1 = setA.isDisjointFrom(setC); // false, A and C have common elements (3)
const isDisjointFrom2 = setA.isDisjointFrom(setE); // true, A and E have no common elements
const isSubsetOf1 = setA.isSubsetOf(setB); // false, A is not a subset of B (A has 1, B has 4)
const isSubsetOf2 = setC.isSubsetOf(setD); // true, C is a subset of D (C has 3, 4 and D has 3, 4)
const isSupersetOf1 = setA.isSupersetOf(setB); // false (A has 1, B has 4)
const isSupersetOf2 = setD.isSupersetOf(setC); // true (D has 3, 4 and C has 3, 4)

// Relation to arrays
const array1 = [1, 2, 3, 4, 5];
const set3 = new Set(arr1); // -> Set { 1, 2, 3, 4, 5 }
set3.has(1); // true

const array2 = Array.from(set3); // -> [1, 2, 3, 4, 5]
const array3 = [...set3]; // -> [1, 2, 3, 4, 5]