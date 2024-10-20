/*
	[Promises]

	A promise is a means of symplifying the task of writing complex asynchronous code.
	In technical terms, a promise is an object that represents the success or failure of a given operation, usually an asynchronous operation (promises aren't meant for sync tasks, but they can be used for handling them).

	A promise is in one of these states:
	- Pending: initial state, neither fulfilled nor rejected.
	- Fulfilled: meaning that the operation completed successfully.
	- Rejected: meaning that the operation failed.
	Once a promise is fulfilled or rejected, it is immutable (i.e. it can never change again).
	A promise in the 'pending' state is sometimes also referred to as 'unsettled'.
	A promise in the 'rejected' or 'fulfilled' state is said to be 'settled'.

	* Benefits of using promises
	- Mitigate the extra levels of indentation introduced by callback-based code.
	- Error handling is a lot more concise and mantainable than error-handling in callbacks. Promises aare built upon the conventional try/catch structure.
	- The syntax relates to English language very closely, making it easier to understand.
	- By far the biggest benefit is the usage of async/await to make asynchrounous code look like if it were synchronous.

	JavaScript introduces the Promise object, which represents the eventual completion (or failure) of an asynchronous operation, and its resulting value.

	Constructor
	The Promise() constructor creates Promise objects. It is primarily used to wrap callback-based APIs that do not support promises
	Promise() can only be constructed with new, attempting to call it without new will throw an error.

	Parameters
	executor: A function that is passed with the arguments resolve and reject. 
	The executor function is executed immediately by the Promise implementation, passing resolve and reject functions 
	(the executor is called before the Promise constructor even returns the created object). 
	The resolve and reject functions, when called, resolve or reject the promise, respectively.
	Any errors thrown in the executor will automatically reject the promise and the return value will be neglected.
	The executor normally initiates some asynchronous work, and then, once that completes, either calls the resolve function to resolve the promise or else rejects it if an error occurred.
	The executor function is EXECUTED IMMEDIATELY by the internal engine as soon as the Promise() constructor is called.
	Since the executor is called immediately, and not queued up on any task queues, it has a synchronous nature -> Long procedure inside executor funcion will delay the promise from being resolved.

	Return value
	The value of a promise is basically a means of representing the outcome of the underlying async operation that it performs.
	A promise's value is set by passing an argument to the resolve() or the reject() function that is passed to the executor function.
	It's not strictly required to provide an argument to resolve() or reject(); it's just that when we do provide one, the promise is resolved or reject with the value, otherwise returns undefined.
	If the methods resolve() or reject() are not called, the promise will remain in the pending state forever.

	Instance methods
	- Promise.prototype.catch(onRejected)
	- Promise.prototype.then(onFulfilled, onRejected)
	- Promise.prototype.finally(onFinally)

	* then() method
	The then() method of a Promise interface is used to execute a function when a promise is resolved or rejected.
	The name 'then' is quite selft-explanatory in what the method serves to do; "perform that async operation and then, once it completes, do this."
	then() accepts two arguments: the first is a callback function for the success case (promise fulfilled), and the second is a callback function for the failure case (promise rejected).
	The then() method returns A NEW PROMISE
	Calling a then() empty of arguments is valid, but it will simply return the same promise object.
	promise.then(onFulfilled, onRejected)
		- Invoking .then() on a promise object, we simply specify that a given function shall be invoked when the promise settles.
		- If a promise is unsettled and we invoke then(), there's no point of executing the callback sent to then(), but we can't also just ignore it.
		- The only way out is to STORE the given callback within the promise and fire it as soon as the promise is settled  -> it's queued up internally in the promise.

	* catch() method
	The catch() method returns a Promise and deals with rejected cases only. It behaves the same as calling promise.then(undefined, onRejected).
	When the promise is rejected, the catch() method triggers the onRejected callback function.
	When the promise is fulfilled, the catch() method is ignored.
	The catch() method is a shorthand for handling only the rejection cases of the promise.
	The catch() method is equivalent to then(undefined, onRejected).
	The catch() method returns A NEW PROMISE


	* finally() method
	The finally() method returns a Promise. When the promise is settled, i.e. either fulfilled or rejected, the specified callback function is executed.
	This provides a way for code to be run whether the promise was fulfilled successfully or rejected once the Promise has been dealt with.
	The finally() method is very useful when you need to clean up after the promise is settled, regardless of its outcome.
	The finally() method returns A NEW PROMISE

	[Callbacks stored in the promise]
	Every promise object internally mantains who callbacks queues:
		- one holding all the functions to fire on its resolution - let's call it successCallbackQueue
		- other holding all the functions to fire on its rejection - let's call it failureCallbackQueue
	Initially both are empty lists.

	With the invocation of then() while a promise is still unsettled, however, these lists fill up; 
	the given callback arguments line up into their respective queues one after another. 
	With the eventual settlement of the promise, these queues once again get emptied.
		- When the resolve() parameter of the executor is called, it first checks for any callbacks present in successCallbackQueue; dequeuing and executing them if they exist. 
			Then, as we know, it sets [[PromiseState]] to 'fulfilled' and [[PromiseValue]] to its argument.
		- On the other hand, reject() first checks for any callbacks present in failureCallbackQueue; dequeuing and executing them if they exist; 
			and then sets [[PromiseState]] to 'rejected' and [[PromiseValue]] to its argument.
*/

const timerPromise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Timer 1 resolved");
  }, 1000);
});

timerPromise1.then((value) => {
  console.log(value);
});
// -> Timer 1 resolved

new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Timer 2 resolved");
  }, 2000);
}).then((value) => {
  console.log(value);
});
// -> Timer 2 resolved

console.log("1");
const promiseWithoutResolve = new Promise(function (resolve, reject) {
  console.log("2"); // Promise is neither resolved nor rejected
}).then((value) => {
  console.log(value); // This will never be executed
});
console.log("3");

// -> 1
// -> 2 - Executor function of the promise is executed immediately
// -> 3

const promiseExample = new Promise((resolve, reject) => {
  resolve("Hello!");
});

promiseExample.then((value) => {
  console.log(value);
});

console.log("Bye!");
// -> Bye!
// -> Hello!

/*
	[Promises chaining]
	Chaining refers to the notion of subsequently calling then() on the promise returned by the preceding then() method.

	There are basically three possible outcomes of firing the callback passed to then():
	1. returning a non-promise value
	2. throwing an exception
	3. returning a promise
*/

/*
	1. [Returning a non-promise value]
	When the callback passed to then() returns a non-promise value, the promise returned by then() is resolved with that value. 
	The returned promise is fulfilled with that value, even if the callback function returns undefined.
*/

const pChain1 = new Promise(function (resolve, reject) {
  resolve("Data1");
});

const pChain1Handler = pChain1.then(function (data) {
  return "Data2";
});

console.log({ pChain1, pChain1Handler });
// -> { pChain1: Promise [[PromiseStatus]]: "fulfilled", [[PromiseValue]]: "Data1", pChain1Handler: Promise [[PromiseStatus]]: "fulfilled", [[PromiseValue]]: "Data2" }

/*
	2. [Throwing an exception]
	When the callback passed to then() throws an exception, the promise returned by then() is rejected with the thrown exception.
	To catch the error you can:
	- Use a second argument to then() to catch the error
	- Use catch() to catch the error
	The difference between the two is that the second argument to then() will also catch errors in the callback passed to then(), while catch() will only catch errors in the promise chain.
	Also, the second argument to then() will not catch errors in the promise chain, only in the callback passed to then().
*/

const pChain2 = new Promise(function (resolve, reject) {
  resolve("OK");
});

const pChain2Handler = pChain2.then(function (data) {
  throw new Error("Error in handler");
});

pChain2Handler.catch((error) => {
  console.error(error);
});

console.log({ pChain2, pChain2Handler });
// -> Error: Error in handler
// -> { pChain2: Promise [[PromiseStatus]]: "fulfilled", [[PromiseValue]]: "OK", pChain2Handler: Promise [[PromiseStatus]]: "rejected", [[PromiseValue]]: Error: Error in handler }

const pChain3 = new Promise(function (resolve, reject) {
  reject("Sorry");
});

const pChain3Handler = pChain3.then(null, function (error) {
  throw new Error("Sorry again");
});

console.log({ pChain3, pChain3Handler });
// -> { pChain3: Promise [[PromiseStatus]]: "rejected", [[PromiseValue]]: "Sorry", pChain3Handler: Promise [[PromiseStatus]]: "rejected", [[PromiseValue]]: Error: Sorry again }

/*
	3. [Returning a promise]
	When the callback passed to then() returns a promise, the promise returned by then() will be:
	- Pending if the returned promise is pending
	- Fulfilled with the value of the returned promise if the returned promise is fulfilled
	- Rejected with the reason of the returned promise if the returned promise is rejected
	Basically, the promise returned by then() will follow the state of the promise returned by the callback.
*/

const pChain4 = new Promise(function (resolve, reject) {
  resolve("OK");
});

const pChain4Handler = pChain4.then(function (data) {
  return new Promise((resolve, reject) => {
    resolve("OK2");
  });
});

console.log({ pChain4, pChain4Handler });
// -> { pChain4: Promise [[PromiseStatus]]: "fulfilled", [[PromiseValue]]: "OK", pChain4Handler: Promise [[PromiseStatus]]: "fulfilled", [[PromiseValue]]: "OK2" }

// Examples
// --------------------------------------------------------------
var p = new Promise(function () {
  return "OK";
});

var p2 = p.then(function (data) {
  return data;
});

var p3 = p2.then(function (data) {
  return data + " Bye";
});
console.log({ p, p2, p3 });
// All promises will be pending forever, because the executor function doesn't call resolve() or reject(), their values will be undefined
// -> { p: Promise [[PromiseStatus]]: "pending", [[PromiseValue]]: undefined, p2: Promise [[PromiseStatus]]: "pending", [[PromiseValue]]: undefined, p3: Promise [[PromiseStatus]]: "pending", [[PromiseValue]]: undefined }

// --------------------------------------------------------------
var p = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("OK");
  }, 2000);
});

var p2 = p.then().then(function (data) {
  console.log(data);
});

console.log({ p, p2 });
// -> OK
// -> { p: Promise [[PromiseStatus]]: "fulfilled", [[PromiseValue]]: "OK", p2: Promise [[PromiseStatus]]: "fulfilled", [[PromiseValue]]: undefined }

// --------------------------------------------------------------
var p = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("OK");
  }, 2000);
}).then();

var p2 = p.then(function (data) {
  return data + " Good";
});
console.log({ p, p2 });
// -> { p: Promise [[PromiseStatus]]: "fulfilled", [[PromiseValue]]: "OK", p2: Promise [[PromiseStatus]]: "fulfilled", [[PromiseValue]]: "OK Good" }

// --------------------------------------------------------------
var p = new Promise(function (resolve, reject) {
  throw "Sorry";
}).then(
  (data) => console.log(data), // This will never be executed
  (data) => data // This returns a new promise that will be fulfilled with the value of the rejected promise
);
console.log({ p });
// -> { p: Promise [[PromiseStatus]]: "fulfilled", [[PromiseValue]]: "Sorry" }

// --------------------------------------------------------------
var p = new Promise(function (resolve, reject) {
  resolve("OK");
});

var p2 = p.then(function (data) {
  return new Promise(function (resolve, reject) {
    resolve(`data is ${data}`);
  });
});

p2.then(function (data) {
  console.log(data);
});
console.log({ p, p2 });
// -> { p: Promise [[PromiseStatus]]: "fulfilled", [[PromiseValue]]: "OK", p2: Promise [[PromiseStatus]]: "fulfilled", [[PromiseValue]]: "data is OK" }
// -> data is OK

// --------------------------------------------------------------
var p = new Promise(function (resolve, reject) {
  reject("Sorry");
});

var p2 = p.then(
  (data) => {
    console.log({ data });
  },
  (error) => {
    console.log({ error });
  }
);
console.log({ p, p2 });
// -> { error: 'Sorry' }
// -> { p: Promise [[PromiseStatus]]: "rejected", [[PromiseValue]]: "Sorry", p2: Promise [[PromiseStatus]]: "fulfilled", [[PromiseValue]]: undefined }

// --------------------------------------------------------------
var p = new Promise(function (resolve, reject) {
  reject("Sorry");
});

var p2 = p.then(
  (data) => data,
  (error) => {
    throw new Error("Sorry again");
  }
);

p2.catch(function (error) {
  console.log(error);
});
console.log({ p, p2 });
// -> Error: Sorry again
// -> { p: Promise [[PromiseStatus]]: "rejected", [[PromiseValue]]: "Sorry", p2: Promise [[PromiseStatus]]: "rejected", [[PromiseValue]]: Error: Sorry again }

// --------------------------------------------------------------
var p = new Promise(function (resolve, reject) {
  reject("Sorry");
})
  .then((value) => {
    console.log("This will never be executed", { value });
  })
  .catch((error) => {
    console.log({ error });
  }).finally(() => {
		console.log('Finally');
	});
console.log({ p });
// -> { error: 'Sorry' }
// -> Finally
// -> { p: Promise [[PromiseStatus]]: "fulfilled", [[PromiseValue]]: undefined }

// --------------------------------------------------------------
var p = new Promise(function (resolve, reject) {
	resolve("OK");
}).then(function (data) {
	return new Promise(function (resolve, reject) {
		reject("Sorry");
	});
}).catch(function (error) {
	console.log({ error });
});
console.log({ p });
// -> { error: 'Sorry' }
// -> { p: Promise [[PromiseStatus]]: "fulfilled", [[PromiseValue]]: undefined }

// --------------------------------------------------------------
var p = new Promise(function (resolve, reject) {
	reject('Error')
}).then(null, (error) => {
	console.log({ error });
})
console.log({ p });
// -> { error: 'Error' }
// -> { p: Promise [[PromiseStatus]]: "fulfilled", [[PromiseValue]]: undefined }

// --------------------------------------------------------------
var p = new Promise(function (resolve, reject) {
	reject('Error')
}).then(null, (error) => {
	console.log({ error });
}).catch((error) => {
	console.log('This will never be executed, since the error is already caught in then parameter function and is not propagated to the catch method');
})
console.log({ p });
// -> { error: 'Error' }
// -> { p: Promise [[PromiseStatus]]: "fulfilled", [[PromiseValue]]: undefined }

/*
	[Promises static methods]
	1. Promise.all(iterable): returns a single Promise that resolves when all of the promises in the iterable argument have resolved or when the iterable argument contains no promises.
	2. Promise.allSettled(iterable): returns a promise that resolves after all of the given promises have either resolved or rejected, with an array of objects that each describes the outcome of each promise.
	3. Promise.any(iterable): returns a promise that resolves as soon as one of the promises in the iterable resolves, or rejects if all of the promises in the iterable reject.
	4. Promise.race(iterable): returns a promise that resolves or rejects as soon as one of the promises in the iterable resolves or rejects, with the value or reason from that promise.
*/

// 1. Promise.all(iterable)
// --------------------------------------------------------------
var p1 = new Promise(function (resolve, reject) {
	setTimeout(function () {
		resolve("OK1");
	}, 1000);
});

var p2 = new Promise(function (resolve, reject) {
	setTimeout(function () {
		resolve("OK2");
	}, 2000);
});

Promise.all([p1, p2]).then(function (values) {
	console.log(values);
});
// -> [ 'OK1', 'OK2' ]

// --------------------------------------------------------------
var p1 = new Promise(function (resolve, reject) {
	setTimeout(function () {
		resolve("OK1");
	}, 1000);
});

var p2 = new Promise(function (resolve, reject) {
	setTimeout(function () {
		reject("Sorry");
	}, 2000);
});

var p3 = new Promise(function (resolve, reject) {
	setTimeout(function () {
		reject("Sorry 2");
	}, 3000);
});

Promise.all([p1, p2, p3]).then(function (values) {
	console.log(values);
}).catch(function (error) {
	console.log(error);
});
// -> Sorry - The first promise that rejects will be the value of the catch method

// 2. Promise.allSettled(iterable)
// --------------------------------------------------------------
var p1 = new Promise(function (resolve, reject) {
	setTimeout(function () {
		resolve("OK1");
	}, 1000);
});

var p2 = new Promise(function (resolve, reject) {
	setTimeout(function () {
		reject("Sorry");
	}, 2000);
});

Promise.allSettled([p1, p2]).then(function (values) {
	console.log(values);
});

// -> [ { status: 'fulfilled', value: 'OK1' }, { status: 'rejected', reason: 'Sorry' } ]

// 3. Promise.any(iterable)
// --------------------------------------------------------------
var p1 = new Promise(function (resolve, reject) {
	setTimeout(function () {
		resolve("OK1");
	}, 1000);
});

var p2 = new Promise(function (resolve, reject) {
	setTimeout(function () {
		reject("Sorry");
	}, 2000);
});

Promise.any([p1, p2]).then(function (value) {
	console.log(value);
}).catch(function (error) {
	console.log(error);
});
// -> OK1

// 4. Promise.race(iterable)
// --------------------------------------------------------------
var p1 = new Promise(function (resolve, reject) {
	setTimeout(function () {
		resolve("OK1");
	}, 4000);
});

var p2 = new Promise(function (resolve, reject) {
	setTimeout(function () {
		resolve("OK2");
	}, 2000);
});

Promise.race([p1, p2]).then(function (value) {
	console.log(value);
});
// -> OK2

