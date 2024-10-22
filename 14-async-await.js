/*
	[Async Function]
	The async funciton declaration creats a binding of a new async function to a given name.
	The await keyword is permitted within the function body, enabling asynchronous, promise-based behavior to be written in a cleaner style and avoiding the need to explicitly configure promise chains.
	You can also define async functions using the async function expression.

	Syntax
	async function name(param0, param1, ..., paramN) {
		statements
	}
	
	Parameters
	- name: The function name.
	- param0, param1, ..., paramN: The names of the parameters to be passed to the function.
	- statements: The statements comprising the body of the function. The await mechanism may be used.

	Description
	An async function declaration creates an AsyncFunction object. 
	Each time when an async function is called, it returns a new Promise which will be resolved 
		- with the value returned by the async function, 
		- or rejected with an exception uncaught within the async function.

	Async functions can contain zero or more await expressions. 
	Await expressions make promise-returning functions behave as though they're synchronous by SUSPENDING EXECUTION until the returned promise is fulfilled or rejected.
	The resolved value of the promise is treated as the return value of the await expression. 
	Use of async and await enables the use of ordinary try/catch blocks around asynchronous code.

	Note: the await keyword is only valid inside async functions with regular JavaScript code. If you attempt to use it outside, you'll get a SyntaxError
	Note: the purpose of async/await is to simplify the syntax necessary to consume promise-based APIs. The behavior of async/await is similar to combining generators and promises.

	Async functions always return a promise. If the return value of an async function is not explicitly a promise, it will be implicitly wrapped in a promise.

*/

async function foo() {
  return 1;
}

function foo() {
  return Promise.resolve(1);
}

// Note: even though the return value behaves as if it's wrapped in a Promise.resolve, they are note equivalent.
// - An async function will return a differente reference
// - Promise.resolve returns the same reference if the given value is a promise
// This can be a problem when you want to check the equality of two promises, as they will always be different.

const p = new Promise((res, rej) => {
  res(1);
});

async function asyncReturn() {
  return p;
}

function basicReturn() {
  return Promise.resolve(p);
}

console.log(p === basicReturn()); // true
console.log(p === asyncReturn()); // false

// The body of an async function can be thought of as being split by zero or more await expressions. Top-level code, up to and including the first await expression (if there is one), is run synchronously.
// In this way, an async function without an await expression will run synchrounously, and return a promise that resolves with the return value of the function.
// If there is an await expression inside the function body however, the async function will always complete asynchrounously.

async function foo() {
  await 1;
}

function foo() {
  return Promise.resolve(1).then(() => undefined);
}

// Code after each away expression can be thought of as existing in a .then callback.
// In this way a promise chain is progressively constructed with each reentran step through the function and the return value forms the final link in the chain.
// The promise chain with async-await is not built-up in one go, is constructer in stages as control is successively yielded from and returned to the async function.

async function foo() {
  const result1 = await new Promise((resolve) =>
    setTimeout(() => resolve("1"))
  );
  const result2 = await new Promise((resolve) =>
    setTimeout(() => resolve("2"))
  );
  console.log({ result1, result2 });
}
foo();
// -> { result1: '1', result2: '2' }

/*
1. The first line of the body of function foo is executed synchronously, with the await expression configured with the pending promise. 
	Progress through foo is then suspended and control is yielded back to the function that called foo.
2. Some time later, when the first promise has either been fulfilled or rejected, control moves back into foo. 
	The result of the first promise fulfillment (if it was not rejected) is returned from the await expression. 
	Here 1 is assigned to result1. Progress continues, and the second await expression is evaluated. Again, progress through foo is suspended and control is yielded.
3. Some time later, when the second promise has either been fulfilled or rejected, control re-enters foo. 
	The result of the second promise resolution is returned from the second await expression. Here 2 is assigned to result2. 
	Control moves to the return expression (if any). The default return value of undefined is returned as the resolution value of the current promise.
*/

function resolveWithoutTimeout() {
  console.log("starting without timeout");
  return new Promise((resolve) => {
    resolve("[Resolved value without timeout]");
    console.log("without timeout is done");
  });
}

function resolveSlow() {
  console.log("starting slow promise");
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("[Resolved value slow promise");
      console.log("slow promise is done");
    }, 10000);
  });
}

function resolveFast() {
  console.log("starting fast promise");
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("[Resolved value fast promise");
      console.log("fast promise is done");
    }, 5000);
  });
}

async function sequentialStart() {
	console.time("sequentialStart");
	console.log("== sequentialStart starts ==");

	const withoutTimeout = resolveWithoutTimeout();
	console.log("Instantiated without timeout");

	const slow = resolveSlow();
	console.log("Instantiated slow");

	const fast = resolveFast();
	console.log("Instantiated fast");

	console.log("Awaiting without timeout");
	console.log(await withoutTimeout);

	console.log("Awaiting slow");
	console.log(await slow);

	console.log("Awaiting fast");
	console.log(await fast);

	console.timeEnd("sequentialStart");
	console.log("== sequentialStart done ==");
}

async function sequentialAwait() {
	console.time("sequentialAwait");
  console.log("== sequentialAwait starts ==");

  const withoutTimeout = await resolveWithoutTimeout();
  console.log(withoutTimeout);

  const slow = await resolveSlow();
  console.log(slow);

  const fast = await resolveFast();
  console.log(fast);

	console.timeEnd("sequentialAwait");
  console.log("== sequentialAwait done ==");
}

async function concurrent1() {
	console.time("concurrent1");
  console.log("== concurrent1 starts ==");

  const results = await Promise.all([resolveWithoutTimeout(), resolveSlow(), resolveFast()]);
  console.log({ results });

	console.timeEnd("concurrent1");
  console.log("== concurrent1 done ==");
}

async function concurrent2() {
	console.time("concurrent2");
  console.log("== concurrent2 starts ==");

  await Promise.all([
		(async () => console.log(await resolveWithoutTimeout()))(),
    (async () => console.log(await resolveSlow()))(),
    (async () => console.log(await resolveFast()))(),
  ]);
	console.timeEnd("concurrent2");
  console.log("== concurrent2 done ==");
}

sequentialStart(); // Timers: 10379ms - 10494ms - 10289ms - 10980ms - 10583ms
// -> == sequentialStart starts ==
// -> starting without timeout
// -> without timeout is done
// -> Instantiated without timeout
// -> starting slow promise
// -> Instantiated slow
// -> starting fast promise
// -> Instantiated fast
// -> Awaiting without timeout
// -> [Resolved value without timeout]
// -> Awaiting slow
// -> fast promise is done
// -> slow promise is done
// -> [Resolved value slow promise]
// -> Awaiting fast
// -> [Resolved value fast promise]
// -> == sequentialStart done ==

sequentialAwait(); // Timers: 16973ms - 16092ms - 16361ms - 16930ms - 16859ms
// -> == sequentialAwait starts ==
// -> starting without timeout
// -> without timeout is done
// -> [Resolved value without timeout]
// -> starting slow promise
// -> slow promise is done
// -> [Resolved value slow promise]
// -> starting fast promise
// -> fast promise is done
// -> [Resolved value fast promise]
// -> == sequentialAwait done ==

concurrent1(); // Timers: 10517ms - 10373ms - 10414ms - 10768ms - 10957ms
// -> == concurrent1 starts ==
// -> starting without timeout
// -> without timeout is done
// -> starting slow promise
// -> starting fast promise
// -> fast promise is done
// -> slow promise is done
// -> { results: [ '[Resolved value without timeout]', '[Resolved value slow promise', '[Resolved value fast promise' ] }
// -> == concurrent1 done ==

concurrent2(); // Timers: 10280ms - 10517ms - 10646ms - 10014ms - 10789ms
// -> == concurrent2 starts ==
// -> starting without timeout
// -> without timeout is done
// -> starting slow promise
// -> starting fast promise
// -> [Resolved value without timeout]
// -> fast promise is done
// -> [Resolved value fast promise]
// -> slow promise is done
// -> [Resolved value slow promise]
// -> == concurrent2 done ==

// The problem with sequentialStart is that if promise fast rejects before promise slow is fulfilled, then an unhandled promise rejectio error will be raised, regardless of whether the caller has configured a catch clause.
// The problem with sequentialAwait is that the promises are resolved sequentially, which is not the most efficient way to resolve them.
// The problem with concurrent1 is that the promises are resolved concurrently, but the results are not processed until all promises are resolved.

