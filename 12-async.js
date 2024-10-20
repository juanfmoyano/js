/*
	[Asynchronous Javascript]
   
	Asynchronous programming is a technique that enables your program to start a potentially long-running task and still be able to be responsive to other events while the task runs,
	rather tan having to wait until that task is finished. Once the task has finished, your program is presented with the result.

	Many functions provided by browsers, especially the most interesting ones, can potentially take a long time, and therefore, are asynchrounous. Example:
	- Making HTTP requests using fetch()
	- Accesing a user's camera or microphone using getUserMedia()
	- Asking a user to select a file using showOpenFilePicker()

	A JavaScript program is single-threaded, meaning that it has only one call stack and one memory heap. This means that it can only do one thing at a time.
	If it is waiting for our long-running synchronous task to finish, it can't do anything else. This is where asynchronous programming comes in.

	We need a way to:
	1. Start a long-running operation by calling a function.
	2. Have the function start the operation and return immediately, so that our program can still be responsive to other events.
	3. Have the function execute the operation in a way that does not block the main thread, for example starting a new thread. 
	4. Notify us with the result of the operation when it eventually completes. 

	Initially, the two customary approaches to working with asyncrhonous operations were:
	1. Events - actions ocurring on a web page
	2. Callbacks - functions stored somewhere, to be called back later on.

*/

/*
	[Event Handlers]
	Event handlers are really a form of asynchronous programming: you provide a function (the event handler) that will be called, not right away, but whenever the event happens.
	If "the event" is "the asynchronous operation has completed", then event handlers are a way to handle the result of an asynchronous operation.

	Some early asynchroous APIs used events in just this way. For example, the XMLHttpRequest API enables you to make HTTP requests to a remote server using JavaScript.
	Since this can take a long time, it's an asynchronous API, and you get notified about the progress and eventual completition of a request by attaching event listeners to the XMLHttpRequest object.

	Instead of the event being a user action, such as the user clicking a button, the event is a change in the state of some object.
	In the case of XMLHttpRequest, the events are things like "the request has been sent", "the response headers have been received", "the response body is being received", and "the request is complete".
*/

/*
<button id="xhr">Click to start request</button>
<button id="reload">Reload</button>

<pre readonly class="event-log"></pre>
*/

const log = document.querySelector(".event-log");

document.querySelector("#xhr").addEventListener("click", () => {
  log.textContent = "";

  const xhr = new XMLHttpRequest();

  xhr.addEventListener("loadend", () => {
    log.textContent = `${log.textContent}Finished with status: ${xhr.status}`;
  });

  xhr.open(
    "GET",
    "https://raw.githubusercontent.com/mdn/content/main/files/en-us/_wikihistory.json"
  );
  xhr.send();
  log.textContent = `${log.textContent}Started XHR request\n`;
});

document.querySelector("#reload").addEventListener("click", () => {
  log.textContent = "";
  document.location.reload();
});

/*
	[Callbacks]

	An event handler is a particular type of callback. A callback is just a function that's passed into another function, with the expectation that the callback will be called at the appropiate time.
	As we just saw, callbacks used to be the main way asynchronous functions were implemented in JavaScript.

	However, callback-based code can get hard to understand when the callback itself has to call functions that accepts a callback.
	This is a common situation if you need to perform some operation that breaks down into a series of asynchronous operations.

	Because we have to call callbacks inside callbacks, we get a deeply nested function which is much harder to read an debug.
	This is sometimes called "callback hell" or the "pyramid of doom" (because the indentantion makes the code look like a pyramid).
	It is also very hard to handle errors: often you have to handle errors at each level of the "pyramid", instead of having error handling once at the top level.
*/

function doStep1(init) {
  return init + 1;
}

function doStep2(init) {
  return init + 2;
}

function doStep3(init) {
  return init + 3;
}

function doOperation() {
  let result = 0;
  result = doStep1(result);
  result = doStep2(result);
  result = doStep3(result);
  console.log(`result: ${result}`);
}

doOperation();

function doStep1WithCallback(init, callback) {
  callback(init + 1);
}

function doStep2WithCallback(init, callback) {
  callback(init + 2);
}

function doStep3WithCallback(init, callback) {
  callback(init + 3);
}

function doOperationWithCallback() {
  doStep1WithCallback(0, (result1) => {
    doStep2WithCallback(result1, (result2) => {
      doStep3WithCallback(result2, (result3) => {
        console.log(`result: ${result3}`);
      });
    });
  });
}

doOperationWithCallback();

/*
	[setTimeout]
	The setTimeout() method of the Window interfaces sets a timer which executes a function or specified place of code once the timer expires.
	Returns timeoutID, a positive integer value, which identifies the timer created by the call to setTimeout(); this value can be passed to clearTimeout() to cancel the timeout.
	It is guaranteed that a timeoutID value will never be reused by a subsequent call to setTimeout() or setInterval() on the same window, while the timer is still active. 
	However, different objects use separate pools of IDs. 
	
	Syntax
	setTimeout(code)
	setTimeout(code, delay)

	setTimeout(functionRef)
	setTimeout(functionRef, delay)
	setTimeout(functionRef, delay, param1, param2, ..., paramN)

	Parameters
	- code: An alternative syntax allows you to include a string of code to be executed -> Not recommended for the same reasons that make using eval() a security risk
	- functionRef: A function to be executed after the timer expires
	- delay (optional): The time, in milliseconds, the timer should wait before the specified function or code is executed. If this parameter is omitted, a value of 0 is assumed
	- param1, param2, ..., paramN: Additional parameters which are passed through to the function specified by functionRef once the timer expires

	Late timeouts can be delayed by long tasks, e.g. a long loop or a heavy calculation. This is because the timeout is triggered after the task has been added to the event loop, and the event loop is blocked by the task.
	Browsers store the delay as a 32-bit signed integer internally. This causes an integer overflow when using delays larger than 2,147,483,647 ms (about 24.8 days).
	In example, using 2 ** 32 + 5000 or 0x1fffffffffff will result in the callback being called after 5000 ms, not 2 ** 32 + 5000 ms.
*/

setTimeout(() => {
  console.log("Hello, world!");
});

setTimeout(
  (name) => {
    console.log(`Hello, ${name}!`);
  },
  1000,
  "Alice"
);

setTimeout(
  function sayHi(from, to) {
    console.log(`${from} says hi to ${to}`);
  },
  3000,
  "Alice",
  "Bob"
);

console.log("This is logged first");
// -> This is logged first
// -> Hello, world!
// -> Hello, Alice!
// -> Alice says hi to Bob

let i = 1;
setTimeout(function run() {
  console.log(i);
  i++;
  setTimeout(run, 1000);
}, 1000);

/*
	[setInterval]
	The setInterval() method of the Window interface repeatedly calls a function or executes a code snippet, with a fixed time delay between each call.
	Returns intervalID, a positive integer value which identifies the timer created by the call to setInterval(); this value can be passed to clearInterval() to cancel the interval.
	Be aware that setInterval() and setTimeout() share the same pool of IDs, and that clearInterval() and clearTimeout() can technically be used interchangeably. However, for clarity, it is best to use clearInterval() to clear intervals and clearTimeout() to clear timeouts.
	
	Syntax
	setInterval(code)
	setInterval(code, delay)

	setInterval(functionRef)
	setInterval(functionRef, delay)
	setInterval(functionRef, delay, param1, param2, ..., paramN)

	Parameters
	- code: An alternative syntax allows you to include a string of code to be executed -> Not recommended for the same reasons that make using eval() a security risk
	- functionRef: A function to be executed every delay miliseconds. The first execution happens after delay miliseconds.
	- delay (optional): The time, in milliseconds, the timer should delay in between executions of the specificed function or code. Defaults to 0 if not specified.
	- param1, param2, ..., paramN: Additional parameters which are passed through to the function specified by functionRef once the timer expires
*/

let counter = 0;
const interval = setInterval(() => {
  console.log(`Interval ${counter}`);
  counter++;
  if (counter === 5) {
    clearInterval(interval);
  }
}, 0);
console.log("This is logged first");
// -> This is logged first
// -> Interval 0
// -> Interval 1
// -> Interval 2
// -> Interval 3
// -> Interval 4
