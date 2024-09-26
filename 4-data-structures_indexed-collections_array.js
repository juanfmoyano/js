/*
	[Indexed collections]
	Indexed collections of data that are ordered by index value
	The index value is a number that represents the position of an element in the collection
	Indexed collections are zero-based, meaning the first element in the collection has an index of 0
	Indexed collections are mutable, meaning you can change the elements in the collection
	Indexed collections are iterable, meaning you can loop through the elements in the collection
	Indexed collections are useful when you want to work with a list of items
	IMPORTANT: ARRAY IS AN OBJECT IN JAVASCRIPT
	typeof [] -> 'object'
	JavaScript doesn't have a built-in array data type. Instead, it uses objects with numeric keys to represent arrays
	The Array object has methods for manipulating arrays in various ways (joining, reversing, sorting, etc.)
	Array object has a property for determining the array length and other properties for use with regular expressions
*/

// Creating an array
const array1 = new Array(); // -> []
const array2 = new Array(5); // -> [undefined, undefined, undefined, undefined, undefined]
const array3 = [];
const array4 = [1, 2, 3, 4, 5];
const array5 = Array(5); // -> [undefined, undefined, undefined, undefined, undefined]
const array6 = Array.of(1, 2, 3, 4, 5); // -> [1, 2, 3, 4, 5]
const array7 = Array.from("hello"); // -> ["h", "e", "l", "l", "o"]
const array8 = Array.from([1, 2, 3, 4, 5], (x) => x * 2); // -> [2, 4, 6, 8, 10]
const array9 = Array.from({ length: 5 }, (v, i) => i); // -> [0, 1, 2, 3, 4]
const array9Length = array8.length; // 5 - you can also use array8["length"]

// Accessing elements in an array
const array9FirstElement = array8[0]; // 0
const array9ThirdElement = array8[2]; // 2
const array9LastElement = array8[array8Length - 1]; // 4
const array10 = ["Apple", { name: "John" }, true, () => "hello", 5];
array10[3](); // 'hello'
array10.at(0); // 'Apple'
array10.at(-1); // 5 - it steps back from the end of the array
array10.at(-2)(); // 'hello'

// Inserting elements
const array11 = [1, 2, 3, 4, 5];
const pushResult = array11.push(6); // -> array11 is [1, 2, 3, 4, 5, 6] and pushResult is 6 - adds to the end of the array and returns the new length
const unshiftResult = array11.unshift(0); // -> array11 is [0, 1, 2, 3, 4, 5, 6] and unshiftResult is 7 - adds to the beginning of the array and returns the new length
const spliceResult = array11.splice(3, 0, 3.5); // -> array11 is [0, 1, 2, 3, 3.5, 4, 5, 6] and spliceResult is [] - adds to the middle of the array after index 3
array11.splice(3, 0, 3.25, 3.75); // -> [0, 1, 2, 3, 3.25, 3.75, 3.5, 4, 5, 6]
array11[10] = 7; // -> [0, 1, 2, 3, 3.25, 3.75, 3.5, 4, 5, 6, 7] - bad practice, remember to do not treat arrays like regular objects

// Understanding length - the array will break if we start treating it like a regular object, array length is always one more than the highest index
const array12 = [];
array12[4] = 5; // -> [undefined, undefined, undefined, undefined, 5]
array12.length; // 5

const array13 = ["first", "second", "third", "fourth", "fifth"];
array13.length = 3; // -> ['first', 'second', 'third']
array13.length = 5; // -> ['first', 'second', 'third', undefined, undefined]
array13.length = 0; // -> []
array13[1]; // -> undefined

// Understanding reference
const array14 = [1, 2, 3, 4, 5];
const array15 = array14;
array15[0] = 0; // -> array15 is [0, 2, 3, 4, 5] and array14 is [0, 2, 3, 4, 5]
array14 == array15; // true - both variables point to the same array
[1, 2, 3] == [1, 2, 3]; // false - two different arrays

// Removing elements
const array16 = [1, 2, 3, 4, 5];
const popResult = array16.pop(); // -> array16 is [1, 2, 3, 4] and popResult is 5 - removes the last element and returns it (can be undefined if the array is empty)
const shiftArray = array16.shift(); // -> array16 is [2, 3, 4] and shiftResult is 1 - removes the first element and returns it (can be undefined if the array is empty)
const spliceResult2 = array16.splice(1, 1); // -> array16 is [2, 4] and spliceResult2 is [3] - removes elements from the middle of the array and returns them
delete array16[1]; // -> [2, undefined] - bad practice, remember to do not treat arrays like regular objects

/*
	shift/unshift vs pop/push
	- shift is slower than pop: shift has to reindex all elements in the array
	- unshift is slower than push: unshift has to reindex all elements in the array
	- shift/unshift are used to add/remove elements from the beginning of the array
	- pop/push are used to add/remove elements from the end of the array
*/

// Iterating over an array
const array17 = [1, 2, 3, 4, 5];
for (let i = 0; i < array17.length; i++) {
  console.log(array17[i]);
}

for (const element of array17) {
  console.log(element);
}

for (let key in array17) {
  console.log(array17[key]);
}
/* 
	for...in is a bad idea
		1. Iterates over ALL properties, not only the numeric ones (i.e. array-like objects, in the browser or other environments, may have additional properties)
		2. Is optimized for generic objects, not arrays, and thus is 10-100 times slower (it's still very fast). The speedup may only matter in bottlenecks, but still should aware of the difference
*/

for (const [index, element] of array17.entries()) {
  console.log(element, index);
}

array17.forEach((element, index) => {
  console.log(element, index);
});

// Searching for elements
const array18 = ["apple", "banana", "cherry", "date", "elderberry"];
const indexOfBanana = array18.indexOf("banana"); // indexOfBanana is 1 - accepts a 2nd argument for the starting index by default is 0, returns -1 if not found
const lastIndexOfDate = array18.lastIndexOf("date"); // lastIndexOfDate is 3 - accepts a 2nd argument for the backward index (it searchs backward) by default is last index, returns -1 if not found
const includesBanana = array18.includes("banana"); // includesBanana is true - returns true if the element is found in the array, false otherwise
const findDate = array18.find((element) => element === "date"); // findDate is 'date' - returns the first element that satisfies the condition (and does not continue searching), undefined otherwise
const findIndexDate = array18.findIndex((element) => element === "date"); // findIndexDate is 3 - returns the index of the first element that satisfies the condition (and does not continue searching), -1 otherwise
const someDate = array18.some((element) => element === "date"); // someDate is true - returns true if at least one element satisfies the condition (and does not continue searching), false otherwise
const everyDate = array18.every((element) => element === "date"); // everyDate is false - returns true if all elements satisfy the condition (and does not continue checking if one fails), false otherwise
const filterDate = array18.filter((element) => element === "date"); // filterDate is ['date'] - returns an array with all elements that satisfy the condition, an empty array otherwise

// Transforming the array
const array19 = ["John", "Jane", "Joe", "Jack", "Jill"];
const mapArray = array19.map((element) => element.toUpperCase()); // mapArray is ['JOHN', 'JANE', 'JOE', 'JACK', 'JILL'] - returns a new array with all elements transformed by the callback function
const reduceArray = array19.reduce(
  (accumulator, element) => accumulator + element,
  ""
); // reduceArray is 'JohnJaneJoeJackJill' - returns a single value that is the result of the callback function applied to all elements
const reduceRightArray = array19.reduceRight(
  (accumulator, element) => accumulator + element,
  ""
); // reduceRightArray is 'JillJackJoeJaneJohn' - same as reduce but starts from the end of the array
const joinArray = array19.join(", "); // joinArray is 'John, Jane, Joe, Jack, Jill' - returns a string with all elements joined by the separator
const sliceArray = array19.slice(1, 3); // sliceArray is ['Jane', 'Joe'] - returns a new array with elements from the start index (inclusive) to the end index (exclusive)
const concatArray = array19.concat(["Jim", "Jenny"]); // concatArray is ['John', 'Jane', 'Joe', 'Jack', 'Jill', 'Jim', 'Jenny'] - returns a new array with all elements from the original array and the new array
const reverseArray = array19.reverse(); // reverseArray is ['Jill', 'Jack', 'Joe', 'Jane', 'John'] - reverse mutates the original array and returns it
// -> array19 is now ['Jill', 'Jack', 'Joe', 'Jane', 'John'] since reverse mutates the original array
const sortArray = array19.sort(); // sortArray is ['Jack', 'Jane', 'Jill', 'Joe', 'John'] - mutates the original array and returns it sorted alphabetically
// -> array19 is now ['Jack', 'Jane', 'Jill', 'Joe', 'John'] since sort mutates the original array
const sortWithCompareFn = array19.sort((a, b) => a.length - b.length); // sortWithCompareFn is ['Joe', 'Jack', 'Jane', 'Jill', 'John'] - mutates the original array and returns it sorted by the length of the elements
// -> array19 is now ['Joe', 'Jack', 'Jane', 'Jill', 'John'] since sort mutates the original array

// thisArg in array methods
const array20 = [1, 2, 3, 4, 5];
this.value = 10;
const mapWithThisArg = array20.map(function (element) {
  return element + this.value;
}, this); // mapWithThisArg is [11, 12, 13, 14, 15] - the value of this is used as 'this' in the callback function

// Check if an object is an array
Array.isArray(array19); // true
Array.isArray({}); // false

// Multidimensional arrays
const array21 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
const firstElement = array21[0][0]; // 1
const secondElement = array21[0][1]; // 2
const lastElement = array21[array21.length - 1][array21[0].length - 1]; // 9

const flatArray21 = array21.flat(); // [1, 2, 3, 4, 5, 6, 7, 8, 9] - returns a new array with all sub-array elements concatenated
const flatMapArray21 = array21.flatMap((element) => element.map((x) => x * 2)); // [2, 4, 6, 8, 10, 12, 14, 16, 18] - returns a new array with all sub-array elements transformed by the callback function and then concatenated
