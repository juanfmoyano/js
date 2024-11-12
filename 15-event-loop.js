/*
	[Event Loop]

	JavaScript is single-threaded, meaning that two bits of script cannot run at the same time; they have to run one after another.

	These components allow us to do asynchronous operations in JavaScript (this is important since JavaScript is single-threaded):
	[JavaScript Runtime]
	1. JavaScript Engine: 
		1.1. Call Stack (since is single-threaded, there is only one call stack): 
			- The call stack is a data structure that keeps track of function calls. When a function is called, it is added to the top of the stack. 
			When the function returns, it is removed from the top of the stack.
			- The Call Stack manages the execution of our program. When we invoke a function, a new execution context gets created which gets pushed onto the Call Stack.
			The top-most function in the call stack is evaluated, which could in turn invoke another function and so on.
			An execution context is popped off the Call Stack when the function completed its execution.
			- JavaScript is only able to handle ONE task at a time; if one task is taking too long to pop off, no other tasks can get handled. Examples of long tasks:
				- Network requests with fetch
				- Reading files with fs
				- Geolocation 
				- Timeouts and intervals
				- Heavy computations
				....
			This means that longer running tasks can block any other tasks from executing, essentially freezing our program.
		1.2. Memory Heap: 
			- The memory heap is a region in memory where objects are stored. It is used for dynamic memory allocation.
	2. Web APIs: 
		- Web APIs are provided by the browser (or Node.js) and allow JavaScript to perform tasks like making HTTP requests, setting timers, or manipulating the DOM. 
		These APIs run in the background and are not part of the JavaScript engine.
		- Web APIs provide a set of interfaces to interact with features that the browser leverages. This includes functionality that we frequently use when building JavaScript, such as:
			- Fetch API: fetch
			- Timers API: setTimeout, setInterval, ...
			- Console API: console.log, console.error, console.warn, ...
			- Geolocation API: GeoLocation, GeoLocationPosition, ...
			- Web Storage API: localStorage, sessionStorage, ...
			- File API: Blob, File, FileList
			- Performance API: Performance, PerformanceMeasure, ...
			- HTML DOM: HTMLElement, HTMLLIElement, HTMLDivElement, ...
			- URL API: URL, ...
			... 
			https://developer.mozilla.org/en-US/docs/Web/API
		- The browser is a very powerful platform, with a lot of features. Some of these features are 'required' like the Rendering Engine or the Networking Stack, but others are optional
		and provides a way to interact with the browser and the environment in which the JavaScript code is running (sensors, cameras, microphone, etc.)
		- Web APIs essentially act as a bridge between the JavaScript runtime and the browser features, allowing us to access information and use features beyond JavaScript's own capabilities.

	[Why is this important to blocking or non-blocking code?]
	Some Web APIs allow us to initiate async tasks, and offload longer-running tasks to the browser, freeing up the JavaScript runtime to continue executing other tasks.
	Invoking a method exposed by such an API is really just to offload the longer-running task to the browser environment, and set up handlers to handle the eventual completition of the task.
	After initiating the async task (without waiting for the result), the execution context can quickly get popped off the Call Stack: it's non-blocking!
	Web APIs that expose async capabilities either use: callback-based or promise-based approaches. 

	3. Task Queue (also called Callback Queue): 
		- The task queue is a queue of tasks (callbacks) that are ready to be executed. 
		When the call stack is empty, the event loop picks the next task from the task queue and pushes it to the call stack.
		- The Task Queue holds Web API callbacks and event handlers waiting to be executed at some point in the future
	4. Microtask Queue: 
		- The microtask queue is similar to the task queue but has higher priority. Microtasks are usually related to promises. 
		After executing a task, the event loop checks the microtask queue and executes all microtasks before moving to the next task in the task queue.
		Microtasks can load other microtasks, which will be executed before the next task in the task queue.
	5. Event Loop: 
		- The event loop is responsible for coordinating the execution of code, collecting and processing events, and executing queued tasks and microtasks. 
		It continuously checks the call stack and the task and microtask queues to determine what to execute next.
		- Whenever the Call Stack is empty, first the Microtask Queue is checked, and if there are any tasks, they are moved onto the Call Stack (it has priority)
		- Whenever the Call Stack is empty (meaning that there are no currently running tasks), and Microtask Queue is empty, it takes the first available task from the Task Queue and moves onto the Call Stack, where the callbacks are executed

*/

console.log("One");
console.log("Two");

function logThree() {
  console.log("Three");
}

function logThreeAndFour() {
  logThree();
  console.log("Four");
}

logThreeAndFour();

// [Call Stack]: [console.log('One')]
// -> 'One'
// [Call Stack]: []
// [Call Stack]: [console.log('Two')]
// -> 'Two'
// [Call Stack]: []
// [Call Stack]: [logThreeAndFour()]
// [Call Stack]: [logThreeAndFour(), logThree()]
// [Call Stack]: [logThreeAndFour(), logThree(), console.log('Three')]
// -> 'Three'
// [Call Stack]: [logThreeAndFour(), logThree()]
// [Call Stack]: [logThreeAndFour()]
// [Call Stack]: [logThreeAndFour(), console.log('Four')]
// -> 'Four'
// [Call Stack]: [logThreeAndFour()]
// [Call Stack]: []

function longRunningTask() {
  let count = 0;
  for (let i = 0; i < 1000000000; i++) {
    count++;
  }
  console.log("Long task done");
}

function importantTask() {
  console.log("Important");
}

longRunningTask();
importantTask();

// [Call Stack]: [longRunningTask()] - it will take a while until JavaScript can continue the rest of our program
// [Call Stack]: [longRunningTask(), console.log('Long task done')]
// -> 'Long task done'
// [Call Stack]: [longRunningTask()]
// [Call Stack]: []
// [Call Stack]: [importantTask()]
// [Call Stack]: [importantTask(), console.log('Important')]
// -> 'Important'
// [Call Stack]: [importantTask()]
// [Call Stack]: []

// ------- Callback-based approach of Web APIs -------
navigator.geolocation.getCurrentPosition(
  (position) => {
    console.log(position);
  },
  (error) => {
    console.log(error);
  }, 
	{
		enableHighAccuracy: true,
	}
);

// [Call Stack]: [getCurrentPosition()] - it just register both callbacks and initiates the task
// [Call Stack]: [] - behind the scenes, the browser starts some kind of process that eventually shows the user popup, so we "don't know" when the user will interacet with popup
// --- The call stack is empty, so it can continue processing other tasks
// The user provides the location - the successCallback cannot be added to the Call Stack, since it could potentially disrupt an already running task, which would lead to unpredictable behavior and conflicts
// [Task Queue]: [(position) => console.log(position)]
// [Call Stack]: [(position) => console.log(position)] [Task Queue]: []
// [Call Stack]: [(position) => console.log(position), console.log(position)]
// -> GeoLocationPosition: { coords: { accuracy: 12.7, altitude: null, altitudeAccuracy: null, heading: null, latitude: 37.8199109, longitude: -122.4785598, speed: null }}
// [Call Stack]: [(position) => console.log(position)] 
// [Call Stack]: []

setTimeout(() => {
	console.log("2000ms");
}, 2000);

setTimeout(() => {
	console.log("1000ms");
}, 1000);

console.log('End of script');
// [Call Stack]: [setTimeout(() => console.log("2000ms"), 2000)] - register the callback and initiates the task, the browser will handle the timeout
// [Call Stack]: []
// [Call Stack]: [setTimeout(() => console.log("1000ms"), 1000)] - register the callback and initiates the task, the browser will handle the timeout
// [Call Stack]: [console.log('End of script')]
// -> 'End of script'
// [Call Stack]: []
// [Task Queue]: [() => console.log("1000ms")]
// [Call Stack]: [() => console.log("1000ms")] [Task Queue]: []
// [Call Stack]: [() => console.log("1000ms"), console.log("1000ms")]
// -> '1000ms'
// [Call Stack]: [() => console.log("1000ms")]
// [Call Stack]: []
// [Task Queue]: [() => console.log("2000ms")]
// [Call Stack]: [() => console.log("2000ms")] [Task Queue]: []
// [Call Stack]: [() => console.log("2000ms"), console.log("2000ms")]
// -> '2000ms'
// [Call Stack]: [() => console.log("2000ms")]
// [Call Stack]: []
// That's why the delay we specify might not be the exact time of delay of the execution, the callback will have to wait for the Call Stack to be empty

// ------- Promise-based approach (then, catch, finally, function body execution following await, microtasks, mutation observer callbacks) -------
fetch('https://dog.ceo/api..').then(res => console.log(res))
console.log('End of script');

// [Call Stack]: [fetch()] - creates the Promise object with default values (pending state, undefined result and without promise reactions) and initiates the network background request handled by the browser
// [Call Stack]: []
// [Call Stack]: [then()] - creates a promise reaction record and adds it to the promise's promise reactions
// [Call Stack]: [] [Promise Reactions inside promise object]: [res => console.log(res)]
// [Call Stack]: [console.log('End of script')]
// -> 'End of script'
// [Call Stack]: []
// The server returns some data, the promise state is fulfilled, the promise result is the Response object with the data and the promise reaction is pushed to the Microtask Queue
// [Microtask Queue]: [res => console.log(res)]
// [Call Stack]: [res => console.log(res)] [Microtask Queue]: []
// [Call Stack]: [res => console.log(res), console.log(res)]
// -> Response { status: 200, statusText: "", type: "basic", url: "https://dog.ceo/api.." }
// [Call Stack]: [res => console.log(res)]
// [Call Stack]: []

function fetchWithRetry() {
	fetch('https://invalidurl').then(res => console.log(res)).catch(err => fetchWithRetry());
}
fetchWithRetry()

function infiniteMicroTasks(){
	queueMicrotask(() => {
		infiniteMicroTasks()
	})
}
infiniteMicroTasks();

// [Call Stack]: [fetchWithRetry()]
// [Call Stack]: []
// [Call Stack]: [then()]
// [Call Stack]: []
// [Microtask Queue]: [err => fetchWithRetry()]
// [Call Stack]: [err => fetchWithRetry()] [Microtask Queue]: []
// [Call Stack]: [err => fetchWithRetry(), fetchWithRetry()]
// [Call Stack]: [err => fetchWithRetry()]
// [Call Stack]: []
// [Call Stack]: [then()]
// [Call Stack]: []
// [Microtask Queue]: [err => fetchWithRetry()]
// .... Infinite loop of microtasks preventing the Task Queue from being processed

Promise.resolve().then(() => console.log(1));

setTimeout(() => console.log(2), 10);

queueMicrotask(() => {
	console.log(3);
	queueMicrotask(() => console.log(4));
})

console.log(5);

// [Call Stack]: [Promise.resolve()]
// [Call Stack]: []
// [Call Stack]: [then()]
// [Call Stack]: [] [Microtask Queue]: [() => console.log(1)]
// [CallStack]: [setTimeout()]
// [Call Stack]: []
// [Call Stack]: [queueMicrotask()]
// [Call Stack]: [] [Microtask Queue]: [() => console.log(1), () => {console.log(3); queueMicrotask(() => console.log(4))}]
// [Call Stack]: [console.log(5)]
// -> 5
// [Call Stack]: []
// timeout of 10ms ended
// [Task Queue]: [() => console.log(2)]
// [Call Stack]: [() => console.log(1)] [Microtask Queue]: [() => {console.log(3); queueMicrotask(() => console.log(4))}]
// [Call Stack]: [() => console.log(1), console.log(1)]
// -> 1
// [Call Stack]: [() => console.log(1)]
// [Call Stack]: []
// [Call Stack]: [() => {console.log(3); queueMicrotask(() => console.log(4))}] [Microtask Queue]: []
// [Call Stack]: [() => {console.log(3); queueMicrotask(() => console.log(4))}, console.log(3)]
// -> 3
// [Call Stack]: [() => {console.log(3); queueMicrotask(() => console.log(4))}]
// [Call Stack]: [() => {console.log(3); queueMicrotask(() => console.log(4))}, queueMicrotask(() => console.log(4))]
// [Call Stack]: [() => {console.log(3); queueMicrotask(() => console.log(4))}] [Microtask Queue]: [() => console.log(4)]
// [Call Stack]: []
// [Call Stack]: [() => console.log(4)] [Microtask Queue]: []
// [Call Stack]: [() => console.log(4), console.log(4)]
// -> 4
// [Call Stack]: [() => console.log(4)]
// [Call Stack]: []
// [Call Stack]: [() => console.log(2)] [Task Queue]: []
// [Call Stack]: [() => console.log(2), console.log(2)]
// -> 2
// [Call Stack]: [() => console.log(2)]
// [Call Stack]: []

// Promisification - it is util to convert callback-based APIs to promise-based APIs
function getCurrentPosition(){
	return new Promise((resolve, reject) => {
		navigator.geolocation.getCurrentPosition(resolve, reject, { enableHighAccuracy: true });
	});
}

async function getCurrentPosition(){
	try {
		const position = await getCurrentPosition();
		console.log(position);
	} catch(error){
		console.log(error);
	}
}

function delay(ms){
	return new Promise(resolve => setTimeout(resolve, ms));
}

async function doStuff(){
	// Perform tasks
	await delay(5000);
	// Perform the rest after 5s
}















