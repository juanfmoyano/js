/*
	[Built-in objects]
	Global objects or standard built-in objects should not be confused with the global object. 
		- The global object is really a namespace object 
		- A standard built-in object is an object that is built into the JavaScript language and is always available. 
			JavaScript has several standard built-in objects, such as Array, Math, JSON, Intl, and more.
			Other objects in the global scope are either created by the user or provided by the host application.
	
	Standard objects by category
	1. Value properties: these global properties return a simple value, they have no properties or methods
		- Infinity: a numeric value representing infinity
		- NaN: is a value representing Not-A-Number
		- undefined: represents the primitive value undefined
		- globalThis: contains the global this value, which is usually akin to the global object.
	
	2. Function properties: these global functions- functions which are called globally, rather than on an object- directly return their results to the caller.
		- eval(): evaluates JavaScript code represented as a string
		- uneval(): returns the source code of an object
		- isFinite(): determines whether the passed value is a finite number
		- isNaN(): determines whether a value is NaN or not
		- parseFloat(): parses an argument and returns a floating point number
		- parseInt(): parses a string argument and returns an integer of the specified radix
		- decodeURI(): decodes a Uniform Resource Identifier (URI) previously created by encodeURI or by a similar routine
		- decodeURIComponent(): decodes a Uniform Resource Identifier (URI) component previously created by encodeURIComponent or by a similar routine
		- encodeURI(): encodes a Uniform Resource Identifier (URI) by replacing each instance of certain characters by one, two, three, or four escape sequences representing the UTF-8 encoding of the character
		- encodeURIComponent(): encodes a Uniform Resource Identifier (URI) component by replacing each instance of certain characters by one, two, three, or four escape sequences representing the UTF-8 encoding of the character

	3. Fundamental objects: these are the basic objects upon which all other objects are based.
		- Object: creates an object wrapper
		- Function: creates a new function
		- Boolean: creates a new Boolean object
		- Symbol: creates a new symbol

	4. Error objects: these objects represent runtime errors that can occur in the course of running code.
		- Error: creates an error object
		- AggregateError: represents an error when several errors need to be wrapped in a single error
		- EvalError: creates an instance representing an error that occurs regarding the global function eval()
		- InternalError [non-standard]: creates an instance representing an error that occurs when an internal error in the JavaScript engine is thrown
		- RangeError: creates an instance representing an error that occurs when a numeric variable or parameter is outside of its valid range
		- ReferenceError: creates an instance representing an error that occurs when de-referencing an invalid reference
		- SyntaxError: creates an instance representing a syntax error
		- TypeError: creates an instance representing an error that occurs when a variable or parameter is not of a valid type
		- URIError: creates an instance representing an error that occurs when encodeURI() or decodeURI() are passed invalid parameters

	5. Numbers and dates: these objects work with numbers and dates.
		- Number: creates an object wrapper for a number value
		- BigInt: creates an object wrapper for a BigInt
		- Math: provides mathematical constants and functions
		- Date: creates a JavaScript Date instance to represent a single moment in time

	6. Text processing: these objects work with strings.
		- String: creates a new string object
		- RegExp: creates a regular expression object for matching text with a pattern

	7. Indexed collections: these objects work with arrays.
		- Array: creates an array of elements
		- Int8Array: creates a new Int8Array array
		- Uint8Array: creates a new Uint8Array array
		- Uint8ClampedArray: creates a new Uint8ClampedArray array
		- Int16Array: creates a new Int16Array array
		- Uint16Array: creates a new Uint16Array array
		- Int32Array: creates a new Int32Array array
		- Uint32Array: creates a new Uint32Array array
		- Float16Array: creates a new Float16Array array
		- Float32Array: creates a new Float32Array array
		- Float64Array: creates a new Float64Array array
		- BigInt64Array: creates a new BigInt64Array array
		- BigUint64Array: creates a new BigUint64Array array

	8. Keyed collections: these objects work with keys.
		- Map: creates a new Map object
		- Set: creates a new Set object
		- WeakMap: creates a new WeakMap object
		- WeakSet: creates a new WeakSet object
	
	9. Structure data: these objects work with structured data.
		- ArrayBuffer: creates a new, fixed-length raw binary data buffer
		- SharedArrayBuffer: creates a new SharedArrayBuffer object
		- Atomics: provides atomic operations as static methods
		- DataView: creates a new DataView object
		- JSON: parses a JSON string, constructing the JavaScript value or object described by the string
	
	10. Managing memory: these objects work with memory.
		- WeakRef: creates a WeakRef object
		- FinalizationRegistry: creates a new FinalizationRegistry object
	
	11. Control abstraction objects: these objects work with control abstraction.
		- Iterator: creates an object with a next() method
		- AsyncIterator: creates an object with a next() method that returns a promise
		- Promise: creates a new Promise object
		- Generator: creates a new Generator object
		- GeneratorFunction: creates a new GeneratorFunction object
		- AsyncFunction: creates a new AsyncFunction object
		- AsyncGenerator: creates a new AsyncGenerator object
		- AsyncGeneratorFunction: creates a new AsyncGeneratorFunction object

	12. Reflection: these objects work with reflection.
		- Reflect: the Reflect object provides the Reflect API
		- Proxy: creates a Proxy object

	13. Internationalization: these objects work with internationalization.
		- Intl: the Intl object is the namespace for the ECMAScript Internationalization API, which provides language sensitive string comparison, number formatting, and date and time formatting
		- Intl.Collator: creates a new Intl.Collator object
		- Intl.DateTimeFormat: creates a new Intl.DateTimeFormat object
		- Intl.DisplayNames: creates a new Intl.DisplayNames object
		- Intl.DurationFormat: creates a new Intl.DurationFormat object
		- Intl.ListFormat: creates a new Intl.ListFormat object
		- Intl.Locale: creates a new Intl.Locale object
		- Intl.NumberFormat: creates a new Intl.NumberFormat object
		- Intl.PluralRules: creates a new Intl.PluralRules object
		- Intl.RelativeTimeFormat: creates a new Intl.RelativeTimeFormat object
		- Intl.Segmenter: creates a new Intl.Segmenter object
*/

/*
	[Dates and times]
	JavaScript Date objects represent a single moment in time in a platform-independent format. Date objects contain a Number that represents milliseconds since 1 January 1970 UTC.
		- Date objects are created with the new Date() constructor.
		- There are four ways of instantiating a date:
			1. new Date(): creates a new Date object with the current date and time.
			2. new Date(milliseconds): creates a new Date object as specified by milliseconds since 1 January 1970 UTC.
			3. new Date(dateString): creates a new Date object as specified by dateString.
			4. new Date(year, monthIndex [, day [, hours [, minutes [, seconds [, milliseconds]]]]): creates a new Date object with a specified date and time.
		- Date objects have no literal syntax
		- Date objects are based on a time value that is the number of milliseconds since 1 January 1970 UTC.
		- Date objects have default methods that return the date and time in various formats.
		- Date objects can be compared.
		- Date objects can display the date and time in different formats.
		- Date objects can display the date and time in different time zones.
		- Date objects can be used to measure time.
		- Date objects can be used to work with dates and times.
		- IMPORTANT: inside the object Date is in UTC time, but when you display it, it will be converted to your local time.

	* UTC: Coordinated Universal Time (UTC) is the basis for civil time today, is the STANDARD. This 24-hour time standard is kept using highly precise atomic clocks combined with the Earth's rotation.
	* ISO: International Organization for Standardization (ISO) is an international standard-setting body composed of representatives from various national standards organizations.
	* Timezone: a region of the globe that observes a uniform standard time for legal, commercial, and social purposes. 
		Time zones tend to follow the boundaries of countries and their subdivisions instead of strictly following longitude because it is convenient for areas in close commercial or other communication to keep the same time.

	- GMT (Greenwich Mean Time): UTC+0
	- EST (Eastern Standard Time): UTC-5
		- EDT (Eastern Daylight Time): UTC-4 (during daylight saving time in the Eastern Time Zone)	 		
	- CST (Central Standard Time): UTC-6
	- MST (Mountain Standard Time): UTC-7
	- PST (Pacific Standard Time): UTC-8
		- PDT (Pacific Daylight Time): UTC-7 (during daylight saving time in the Pacific Time Zone)
	- BST (British Summer Time): UTC+1 (during daylight saving time in the UK)
	- CET (Central European Time): UTC+1
	- EET (Eastern European Time): UTC+2
	- IST (India Standard Time): UTC+5:30
	- JST (Japan Standard Time): UTC+9
	- AEST (Australian Eastern Standard Time): UTC+10

*/

const timeZones = Intl.supportedValuesOf("timeZone");
const existenTimeZones = [
  "Africa/Abidjan",
  "Africa/Accra",
  "Africa/Addis_Ababa",
  "Africa/Algiers",
  "Africa/Asmera",
  "Africa/Bamako",
  "Africa/Bangui",
  "Africa/Banjul",
  "Africa/Bissau",
  "Africa/Blantyre",
  "Africa/Brazzaville",
  "Africa/Bujumbura",
  "Africa/Cairo",
  "Africa/Casablanca",
  "Africa/Ceuta",
  "Africa/Conakry",
  "Africa/Dakar",
  "Africa/Dar_es_Salaam",
  "Africa/Djibouti",
  "Africa/Douala",
  "Africa/El_Aaiun",
  "Africa/Freetown",
  "Africa/Gaborone",
  "Africa/Harare",
  "Africa/Johannesburg",
  "Africa/Juba",
  "Africa/Kampala",
  "Africa/Khartoum",
  "Africa/Kigali",
  "Africa/Kinshasa",
  "Africa/Lagos",
  "Africa/Libreville",
  "Africa/Lome",
  "Africa/Luanda",
  "Africa/Lubumbashi",
  "Africa/Lusaka",
  "Africa/Malabo",
  "Africa/Maputo",
  "Africa/Maseru",
  "Africa/Mbabane",
  "Africa/Mogadishu",
  "Africa/Monrovia",
  "Africa/Nairobi",
  "Africa/Ndjamena",
  "Africa/Niamey",
  "Africa/Nouakchott",
  "Africa/Ouagadougou",
  "Africa/Porto-Novo",
  "Africa/Sao_Tome",
  "Africa/Tripoli",
  "Africa/Tunis",
  "Africa/Windhoek",
  "America/Adak",
  "America/Anchorage",
  "America/Anguilla",
  "America/Antigua",
  "America/Araguaina",
  "America/Argentina/La_Rioja",
  "America/Argentina/Rio_Gallegos",
  "America/Argentina/Salta",
  "America/Argentina/San_Juan",
  "America/Argentina/San_Luis",
  "America/Argentina/Tucuman",
  "America/Argentina/Ushuaia",
  "America/Aruba",
  "America/Asuncion",
  "America/Bahia",
  "America/Bahia_Banderas",
  "America/Barbados",
  "America/Belem",
  "America/Belize",
  "America/Blanc-Sablon",
  "America/Boa_Vista",
  "America/Bogota",
  "America/Boise",
  "America/Buenos_Aires",
  "America/Cambridge_Bay",
  "America/Campo_Grande",
  "America/Cancun",
  "America/Caracas",
  "America/Catamarca",
  "America/Cayenne",
  "America/Cayman",
  "America/Chicago",
  "America/Chihuahua",
  "America/Ciudad_Juarez",
  "America/Coral_Harbour",
  "America/Cordoba",
  "America/Costa_Rica",
  "America/Creston",
  "America/Cuiaba",
  "America/Curacao",
  "America/Danmarkshavn",
  "America/Dawson",
  "America/Dawson_Creek",
  "America/Denver",
  "America/Detroit",
  "America/Dominica",
  "America/Edmonton",
  "America/Eirunepe",
  "America/El_Salvador",
  "America/Fort_Nelson",
  "America/Fortaleza",
  "America/Glace_Bay",
  "America/Godthab",
  "America/Goose_Bay",
  "America/Grand_Turk",
  "America/Grenada",
  "America/Guadeloupe",
  "America/Guatemala",
  "America/Guayaquil",
  "America/Guyana",
  "America/Halifax",
  "America/Havana",
  "America/Hermosillo",
  "America/Indiana/Knox",
  "America/Indiana/Marengo",
  "America/Indiana/Petersburg",
  "America/Indiana/Tell_City",
  "America/Indiana/Vevay",
  "America/Indiana/Vincennes",
  "America/Indiana/Winamac",
  "America/Indianapolis",
  "America/Inuvik",
  "America/Iqaluit",
  "America/Jamaica",
  "America/Jujuy",
  "America/Juneau",
  "America/Kentucky/Monticello",
  "America/Kralendijk",
  "America/La_Paz",
  "America/Lima",
  "America/Los_Angeles",
  "America/Louisville",
  "America/Lower_Princes",
  "America/Maceio",
  "America/Managua",
  "America/Manaus",
  "America/Marigot",
  "America/Martinique",
  "America/Matamoros",
  "America/Mazatlan",
  "America/Mendoza",
  "America/Menominee",
  "America/Merida",
  "America/Metlakatla",
  "America/Mexico_City",
  "America/Miquelon",
  "America/Moncton",
  "America/Monterrey",
  "America/Montevideo",
  "America/Montserrat",
  "America/Nassau",
  "America/New_York",
  "America/Nome",
  "America/Noronha",
  "America/North_Dakota/Beulah",
  "America/North_Dakota/Center",
  "America/North_Dakota/New_Salem",
  "America/Ojinaga",
  "America/Panama",
  "America/Paramaribo",
  "America/Phoenix",
  "America/Port-au-Prince",
  "America/Port_of_Spain",
  "America/Porto_Velho",
  "America/Puerto_Rico",
  "America/Punta_Arenas",
  "America/Rankin_Inlet",
  "America/Recife",
  "America/Regina",
  "America/Resolute",
  "America/Rio_Branco",
  "America/Santarem",
  "America/Santiago",
  "America/Santo_Domingo",
  "America/Sao_Paulo",
  "America/Scoresbysund",
  "America/Sitka",
  "America/St_Barthelemy",
  "America/St_Johns",
  "America/St_Kitts",
  "America/St_Lucia",
  "America/St_Thomas",
  "America/St_Vincent",
  "America/Swift_Current",
  "America/Tegucigalpa",
  "America/Thule",
  "America/Tijuana",
  "America/Toronto",
  "America/Tortola",
  "America/Vancouver",
  "America/Whitehorse",
  "America/Winnipeg",
  "America/Yakutat",
  "Antarctica/Casey",
  "Antarctica/Davis",
  "Antarctica/DumontDUrville",
  "Antarctica/Macquarie",
  "Antarctica/Mawson",
  "Antarctica/McMurdo",
  "Antarctica/Palmer",
  "Antarctica/Rothera",
  "Antarctica/Syowa",
  "Antarctica/Troll",
  "Antarctica/Vostok",
  "Arctic/Longyearbyen",
  "Asia/Aden",
  "Asia/Almaty",
  "Asia/Amman",
  "Asia/Anadyr",
  "Asia/Aqtau",
  "Asia/Aqtobe",
  "Asia/Ashgabat",
  "Asia/Atyrau",
  "Asia/Baghdad",
  "Asia/Bahrain",
  "Asia/Baku",
  "Asia/Bangkok",
  "Asia/Barnaul",
  "Asia/Beirut",
  "Asia/Bishkek",
  "Asia/Brunei",
  "Asia/Calcutta",
  "Asia/Chita",
  "Asia/Choibalsan",
  "Asia/Colombo",
  "Asia/Damascus",
  "Asia/Dhaka",
  "Asia/Dili",
  "Asia/Dubai",
  "Asia/Dushanbe",
  "Asia/Famagusta",
  "Asia/Gaza",
  "Asia/Hebron",
  "Asia/Hong_Kong",
  "Asia/Hovd",
  "Asia/Irkutsk",
  "Asia/Jakarta",
  "Asia/Jayapura",
  "Asia/Jerusalem",
  "Asia/Kabul",
  "Asia/Kamchatka",
  "Asia/Karachi",
  "Asia/Katmandu",
  "Asia/Khandyga",
  "Asia/Krasnoyarsk",
  "Asia/Kuala_Lumpur",
  "Asia/Kuching",
  "Asia/Kuwait",
  "Asia/Macau",
  "Asia/Magadan",
  "Asia/Makassar",
  "Asia/Manila",
  "Asia/Muscat",
  "Asia/Nicosia",
  "Asia/Novokuznetsk",
  "Asia/Novosibirsk",
  "Asia/Omsk",
  "Asia/Oral",
  "Asia/Phnom_Penh",
  "Asia/Pontianak",
  "Asia/Pyongyang",
  "Asia/Qatar",
  "Asia/Qostanay",
  "Asia/Qyzylorda",
  "Asia/Rangoon",
  "Asia/Riyadh",
  "Asia/Saigon",
  "Asia/Sakhalin",
  "Asia/Samarkand",
  "Asia/Seoul",
  "Asia/Shanghai",
  "Asia/Singapore",
  "Asia/Srednekolymsk",
  "Asia/Taipei",
  "Asia/Tashkent",
  "Asia/Tbilisi",
  "Asia/Tehran",
  "Asia/Thimphu",
  "Asia/Tokyo",
  "Asia/Tomsk",
  "Asia/Ulaanbaatar",
  "Asia/Urumqi",
  "Asia/Ust-Nera",
  "Asia/Vientiane",
  "Asia/Vladivostok",
  "Asia/Yakutsk",
  "Asia/Yekaterinburg",
  "Asia/Yerevan",
  "Atlantic/Azores",
  "Atlantic/Bermuda",
  "Atlantic/Canary",
  "Atlantic/Cape_Verde",
  "Atlantic/Faeroe",
  "Atlantic/Madeira",
  "Atlantic/Reykjavik",
  "Atlantic/South_Georgia",
  "Atlantic/St_Helena",
  "Atlantic/Stanley",
  "Australia/Adelaide",
  "Australia/Brisbane",
  "Australia/Broken_Hill",
  "Australia/Darwin",
  "Australia/Eucla",
  "Australia/Hobart",
  "Australia/Lindeman",
  "Australia/Lord_Howe",
  "Australia/Melbourne",
  "Australia/Perth",
  "Australia/Sydney",
  "Europe/Amsterdam",
  "Europe/Andorra",
  "Europe/Astrakhan",
  "Europe/Athens",
  "Europe/Belgrade",
  "Europe/Berlin",
  "Europe/Bratislava",
  "Europe/Brussels",
  "Europe/Bucharest",
  "Europe/Budapest",
  "Europe/Busingen",
  "Europe/Chisinau",
  "Europe/Copenhagen",
  "Europe/Dublin",
  "Europe/Gibraltar",
  "Europe/Guernsey",
  "Europe/Helsinki",
  "Europe/Isle_of_Man",
  "Europe/Istanbul",
  "Europe/Jersey",
  "Europe/Kaliningrad",
  "Europe/Kiev",
  "Europe/Kirov",
  "Europe/Lisbon",
  "Europe/Ljubljana",
  "Europe/London",
  "Europe/Luxembourg",
  "Europe/Madrid",
  "Europe/Malta",
  "Europe/Mariehamn",
  "Europe/Minsk",
  "Europe/Monaco",
  "Europe/Moscow",
  "Europe/Oslo",
  "Europe/Paris",
  "Europe/Podgorica",
  "Europe/Prague",
  "Europe/Riga",
  "Europe/Rome",
  "Europe/Samara",
  "Europe/San_Marino",
  "Europe/Sarajevo",
  "Europe/Saratov",
  "Europe/Simferopol",
  "Europe/Skopje",
  "Europe/Sofia",
  "Europe/Stockholm",
  "Europe/Tallinn",
  "Europe/Tirane",
  "Europe/Ulyanovsk",
  "Europe/Vaduz",
  "Europe/Vatican",
  "Europe/Vienna",
  "Europe/Vilnius",
  "Europe/Volgograd",
  "Europe/Warsaw",
  "Europe/Zagreb",
  "Europe/Zurich",
  "Indian/Antananarivo",
  "Indian/Chagos",
  "Indian/Christmas",
  "Indian/Cocos",
  "Indian/Comoro",
  "Indian/Kerguelen",
  "Indian/Mahe",
  "Indian/Maldives",
  "Indian/Mauritius",
  "Indian/Mayotte",
  "Indian/Reunion",
  "Pacific/Apia",
  "Pacific/Auckland",
  "Pacific/Bougainville",
  "Pacific/Chatham",
  "Pacific/Easter",
  "Pacific/Efate",
  "Pacific/Enderbury",
  "Pacific/Fakaofo",
  "Pacific/Fiji",
  "Pacific/Funafuti",
  "Pacific/Galapagos",
  "Pacific/Gambier",
  "Pacific/Guadalcanal",
  "Pacific/Guam",
  "Pacific/Honolulu",
  "Pacific/Kiritimati",
  "Pacific/Kosrae",
  "Pacific/Kwajalein",
  "Pacific/Majuro",
  "Pacific/Marquesas",
  "Pacific/Midway",
  "Pacific/Nauru",
  "Pacific/Niue",
  "Pacific/Norfolk",
  "Pacific/Noumea",
  "Pacific/Pago_Pago",
  "Pacific/Palau",
  "Pacific/Pitcairn",
  "Pacific/Ponape",
  "Pacific/Port_Moresby",
  "Pacific/Rarotonga",
  "Pacific/Saipan",
  "Pacific/Tahiti",
  "Pacific/Tarawa",
  "Pacific/Tongatapu",
  "Pacific/Truk",
  "Pacific/Wake",
  "Pacific/Wallis",
];

const date = new Date(); // -> 2024-09-22T14:02:18.443Z
const date2 = Date(); //-> 'Sun Sep 22 2024 11:02:18 GMT-0300 (hora estándar de Argentina)' - is like doing new Date().toString()
const date3 = new Date().toString(); // -> 'Sun Sep 22 2024 11:02:18 GMT-0300 (hora estándar de Argentina)'
const date4 = new Date().toDateString(); // -> 'Sun Sep 22 2024'
const date5 = new Date().toTimeString(); // -> '11:02:18 GMT-0300 (hora estándar de Argentina)'
const date6 = new Date().toLocaleString(); // -> '22/9/2024 11:02:18'
const date7 = new Date().toLocaleDateString(); // -> '22/9/2024'
const date8 = new Date().toLocaleTimeString(); // -> '11:02:18'
const date9 = new Date().toISOString(); // -> '2024-09-22T14:02:18.443Z'
const date10 = new Date().toUTCString(); // -> 'Sun, 22 Sep 2024 14:02:18 GMT'
const date11 = new Date().toJSON(); // -> '2024-09-22T14:02:18.443Z'
const date12 = new Date().valueOf(); // -> 1701177738443
const date13 = new Date().getTime(); // -> 1701177738443
const date14 = new Date().getMilliseconds(); // -> 443
const date15 = new Date().getSeconds(); // -> 18
const date16 = new Date().getMinutes(); // -> 2
const date17 = new Date().getHours(); // -> 11
const date18 = new Date().getDate(); // -> 22
const date19 = new Date().getDay(); // -> 0
const date20 = new Date().getMonth(); // -> 8
const date21 = new Date().getFullYear(); // -> 2024
const date22 = new Date().getUTCDate(); // -> 22
const date23 = new Date().getUTCDay(); // -> 0
const date24 = new Date().getUTCMonth(); // -> 8
const date25 = new Date().getUTCFullYear(); // -> 2024
const date26 = new Date().getUTCMinutes(); // -> 2
const date27 = new Date().getUTCHours(); // -> 14
const date28 = new Date().getUTCSeconds(); // -> 18
const date29 = new Date().getUTCMilliseconds(); // -> 443
const date30 = Date.now(); // -> 1701177738443
const date31 = Date.parse("2024-09-22T14:02:18.443Z"); // -> 1701177738443
const date32 = Date.UTC(2024, 8, 22, 14, 2, 18, 443); // -> 1701177738443
const date33 = new Date(1701177738443); // -> 2024-09-22T14:02:18.443Z
const date34 = new Date("2024-09-22T14:02:18.443Z"); // -> 2024-09-22T14:02:18.443Z

// Time zones
const date35 = new Date().toLocaleString("en-US", { timeZone: "America/New_York" }); // -> '9/22/2024, 10:02:18 AM'
const date36 = new Date().toLocaleString("en-US", { timeZone: "America/Los_Angeles" }); // -> '9/22/2024, 7:02:18 AM'
const date37 = new Date().toLocaleString("en-US", { timeZone: "Europe/London" }); // -> '22/9/2024, 4:02:18 PM'
const date38 = new Date().toLocaleString("en-US", { timeZone: "Europe/Madrid" }); // -> '22/9/2024, 5:02:18 PM'

// Convert to UTC
const date39 = new Date().toUTCString(); // -> 'Sun, 22 Sep 2024 14:02:18 GMT'

// Convert to ISO
const date40 = new Date().toISOString(); // -> '2024-09-22T14:02:18.443Z'

// Create an specifi date in a specific timezone - Example Math 5th, 2023 at 14:05:23 at America/Los_Angeles
const year = 2023;
const month = 4; // May (months are 0-indexed in JavaScript)
const day = 5;
const hour = 14;
const minute = 5;
const second = 23;

const utcDate = new Date(Date.UTC(year, month, day, hour, minute, second));

const options = {
  timeZone: 'America/Los_Angeles',
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hour12: false
};

const formatter = new Intl.DateTimeFormat('en-US', options);
const losAngelesDate = formatter.format(utcDate); // -> '05/05/2023, 07:05:23'

// Get the time zone of the user
const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
console.log(userTimeZone); // -> 'America/Buenos_Aires'
