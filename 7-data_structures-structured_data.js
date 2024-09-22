/* 
	Javasacript Object Notation (JSON)
	Is a standard text-based format for representing structured data based on JavaScript object syntax
	Useful when you want to transmit data across a network
	JSON is a language-independent data format. It was derived from JavaScript, but many modern programming languages include code to generate and parse JSON-format data
	JSON is a subset of the JavaScript language
	JSON is not a JavaScript object. It is a string that represents a JavaScript object
	JSON is lightweight and easy to read and write
	JSON is easy for machines to parse and generate
	JSON is language independent
	JSON is "self-describing" and easy to understand
	JSON supports two data structures:
		- A collection of key/value pairs
		- An ordered list of values
	JSON Syntax Rules:
		- Data is in name/value pairs
		- Data is separated by commas
		- Curly braces hold objects
		- Square brackets hold arrays
	JSON Data Types:
		- String: A string of text
		- Number: A number
		- Object: An object
		- Array: An array
		- Boolean: true or false
		- Null: null
	JSON Objects:
		- JSON objects are written inside curly braces
		- Object properties are written as name/value pairs
		- Properties are separated by commas
		- The name is always a string enclosed in double quotes
		- The value can be a string, number, object, array, boolean, or null
	JSON Arrays:
		- JSON arrays are written inside square brackets
		- Array values are written as a comma-separated list
		- Array values can be strings, numbers, objects, arrays, booleans, or null

	Other notes:
	- JSON is purely a string with a specified format. It contains only properties, no methods
	- JSON requires double quotes to be used around strings and property names, single quotes are not valid
	- Even a single misplaced comma or colon can cause a JSON file to go wrong, and not work
	- JSON can actually take the form of any data type that is valid for inclusion inside JSON, not just arrays or objects. So for example, a single string or number would be a valid JSON object
	- Unlike JavaScript code in which objet properties may be unquoted, in JSON, only quoted strings may be used as properties
	- Trailling commas are not allowed in JSON

	parse(): Parse a JSON string, constructing the JavaScript value or object described by the string
	stringify(): Convert a JavaScript object to a JSON string
*/

// import json file
const data = require("./data.json");
const homeTown = data.homeTown; // "Metro City"
const active = data.active; // true
const secondPowerOfFirstMember = data.members[0].powers[1]; // Turning tiny
const parsedFirstMemberPowers = JSON.parse(data.members[0].powers); // ["Radiation resistance", "Turning tiny", "Radiation blast"]
const stringifiedFirstMemberPowers = JSON.stringify(parsedFirstMemberPowers); // '["Radiation resistance","Turning tiny","Radiation blast"]'
