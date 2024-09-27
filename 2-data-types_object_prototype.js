/*
	JavaScript is an object-oriented programming language and prototype-based languages. It's essentially built around objects.
	In prototype-based languages, objects can be created without classes. Objects can inherit from other objects.

	OOP Languages can be split into two categories:
	- Class-based languages: Java, C++, C#, Python, Ruby, etc.
	- Prototype-based languages: JavaScript, Lua, Self, etc.

	* Prototype: For a given object o, the object from which o inherits properties is called the prototype of o.

	[Prototype] attribute
	- Every object has a prototype attribute. The prototype attribute points to another object. (a reference to its prototype object)
	- The object has its prototype as null, which means it has no inherited properties.

	* Own property: A property that belongs to an object and is not inherited from the prototype.
	* Inherited property: A property that belongs to an object's prototype chain.

	obj.hasOwnProperty(prop): Returns true if the object has its own property named prop, otherwise false. Doesn't matter if the property is enumerable or not.
*/

const array = [10, -5, 60]; // -> [[Prototype]] -> Array.prototype -> Object.prototype -> null
const object = { x: 10, y: 20 }; // -> [[Prototype]] -> Object.prototype -> null
// Note that this notation of [[Prototype]] is merely an imaginative idea, purely for expository purposes — in reality there is nothing such as [[Prototype]] in implementations of JavaScript.

/*
	Object.create(proto, [propertiesObject])
	- Creates a NEW object with the specified prototype object and properties. (introduced in ECMAScript 5)	
	- propertiesObject: is not an object mapping key to values, but an object with property descriptors. (not frequently used)
*/

const obj1 = { x: 10, y: 20 };
const obj2 = Object.create(obj1);
obj2.p = 100;
obj2.q = 200;
console.log({ obj2 }); // -> { p: 100, q: 200 }
console.log({ obj2X: obj2.x, obj2Y: obj2.y }); // -> { obj2X: 10, obj2Y: 20 }

const obj3 = Object.create(null); // -> [[Prototype]] -> null
obj3.x = 10;
obj3.y = 20;
console.log({ obj3 }); // -> { x: 10, y: 20 }

/*
	Prototype chains
	For a given object o, its prototype chain is simply a list of prototypes whose first item is the prototype of o, and any subsequent item is the prototype of the previous item, and the last item is simply null.
*/

const obj4 = { x: 10, y: 20 };
const obj5 = Object.create(obj4);
obj5.w = 100;
obj5.z = 200;
const obj6 = Object.create(obj5); // -> [[Prototype]] -> obj5 -> obj4 -> Object.prototype -> null
obj6.a = 1000;
obj6.b = 2000;

/*
	Prototype retrieval mechanism
	Whenever a property is accessed on a given object in JavaScript, if that property exists on the object, then it's used to resolve the property-access expression.

	Otherwise, the property is searched for on the prototype. If it exists there, the original property-access expression of the object is resolved with that value. Otherwise, searching moves to the next prototype down the chain, and then the next, and so on.

	This searching stops when the property is ultimately found on a prototype or when the null prototype is reached while traversing the prototype chain. When the null prototype is reached, that means that the property wasn't found anywhere, and likewise undefined is returned.

	Property shadowing: When a property is found on an object, it "shadows" any property of the same name on the prototype chain.
*/

console.log({
  obj6,
  obj6A: obj6.a,
  obj6B: obj6.b,
  obj6X: obj6.x,
  obj6Y: obj6.y,
  obj6W: obj6.w,
  obj6Z: obj6.z,
});
// -> { obj6: { a: 1000, b: 2000 }, obj6A: 1000, obj6B: 2000, obj6X: 10, obj6Y: 20, obj6W: 100, obj6Z: 200 }

obj6.x = 1;
obj6.y = 2;
obj6.w = 3;
obj6.z = 4;

console.log({
  obj6,
  obj6A: obj6.a,
  obj6B: obj6.b,
  obj6X: obj6.x,
  obj6Y: obj6.y,
  obj6W: obj6.w,
  obj6Z: obj6.z,
});
// -> { obj6: { a: 1000, b: 2000, x: 1, y: 2, w: 3, z: 4 }, obj6A: 1000, obj6B: 2000, obj6X: 1, obj6Y: 2, obj6W: 3, obj6Z: 4 }

/*
	Property assignment mechanism

	Property assigment expressions also involve a search for the property's key on an object and, if not found, then on the prototype chain of object.
		- Data properties, that directly contain given data, are only meant to denote the traits of an object, and are therefore meant to be defined on instances directly, NOT on their prototypes.
		- In contrast to this, when we consider the behavior of instances (i.e. some kind of functions), they are typically defined on the prototype of those instances.
	A property assignment on an object would have no effect (in non-strict mode) or throw an error (in strict mode) if the property is a non-writable own/inherited data property or a setter-less own/inherited property.

/*
  Property assignment behavior based on property characteristics:

  | Own or inherited? 				| Data or accessor property? | Is writable? | Has setter? | Result                                                                 																											|
  |---------------------------|----------------------------|--------------|-------------|-----------------------------------------------------------------------------------------------------------------------------|
  | Own               				| Data                       | Yes          | —           | Set obj's own property prop to value.                                  																											|
  | Own               				| Data                       | No           | —           | Ignore the property assignment (in non-strict mode) or throw an error (in strict mode). 																		|
  | Own               				| Accessor                   | —            | Yes         | Invoke obj's own property prop's setter function with value as arg.    																											|
  | Own               				| Accessor                   | —            | No          | Ignore the property assignment (in non-strict mode) or throw an error (in strict mode). 																		|
  | Inherited         				| Data                       | Yes          | —           | Create obj's own property prop and set it to value.                    																											|
  | Inherited         				| Data                       | No           | —           | Ignore the property assignment (in non-strict mode) or throw an error (in strict mode). 																		|
  | Inherited         				| Accessor                   | —            | Yes         | Invoke obj's inherited property prop's setter function (defined on some object in obj's prototype chain) with value as arg. |
  | Inherited         				| Accessor                   | —            | No          | Ignore the property assignment (in non-strict mode) or throw an error (in strict mode). 																		|
  | None, i.e. does not exist | —                  				 | —            | No          | Create obj's own data property prop and set it to value.               																											|
	|---------------------------|----------------------------|--------------|-------------|-----------------------------------------------------------------------------------------------------------------------------|
*/

const obj7 = {};
Object.defineProperty(obj7, "x", { value: "old" }); // non-writable, non-configurable, non-enumerable
Object.defineProperty(obj7, "y", {
  get: function () {
    return "old";
  },
}); // non-writable, non-configurable, non-enumerable
obj7.x = "new";
console.log({ obj7X: obj7.x }); // -> { obj7X: 'old' }

obj7.y = "new";
console.log({ obj7Y: obj7.y }); // -> { obj7Y: 'old' }

const obj8 = {};
Object.defineProperty(obj8, "x", { value: "old" }); // non-writable, non-configurable, non-enumerable
Object.defineProperty(obj8, "y", {
  get: function () {
    return "old";
  },
  set: function (value) {
    console.log(`Setter called with ${value}`);
  },
}); // non-writable, non-configurable, non-enumerable
const obj9 = Object.create(obj8);
obj9.x = "new";
console.log({ obj9X: obj9.x }); // -> { obj9X: 'old' }
obj9.y = "new";
// Setter called with new
console.log({ obj9Y: obj9.y }); // -> { obj9Y: 'old' }
console.log({ obj9 }); // -> {}

/*
	[The prototype property]
	Given a function F, the expression new F() executes the internal [[Construct]] method on F that performs the following steps:
	1. A new empty object is created
	2. The prototype of this object is set to F.prototype
	3. The [[Call]] internal method of the function is executed with its this set to the object created in step 1.
	4. The object created in step 1 is returned.

	There is no standard way in JavaScript to retrieve the prototype of an object via a property on that object.
	There is a non-standard property called __proto__ that is supported by many browsers, but it is not part of the ECMAScript standard.

	F.prototype is just a convenient way to denote the prototype of any instance of the constructor F().
	F.prototype created for function F, is not the prototype of F itself, but rather the prototype of instances created by F.
*/

function F() {
  this.name = "example";
}

F.prototype.sayHello = function () {
  console.log("Hello, " + this.name);
};

const instance = new F();
console.log(instance.name); // -> example
instance.sayHello(); // -> Hello, example

// Check the prototype of the instance
console.log(Object.getPrototypeOf(instance) === F.prototype); // -> true

// Using the non-standard __proto__ property (not recommended)
console.log(instance.__proto__ === F.prototype); // -> true

/*
	Let's see the benefits of using Point.prototype to define setTo():

	1. We aren't creating a new setTo() function for each new Point instance. The function is defined once and saved under Point.prototype.
	2. We aren't creating a new setTo() property for every single Point instance. The property is defined exactly once on the object Point.prototype and from there ultimately finds its way in the resolution of setTo as accessed on any Point instance.
	3. We aren't filling up the global scope in any way — all Point-related functionality is nicely within the Point function object.

	Overall, this means that using the prototype to define instance methods is memory-wise much more efficient than using the constructor's body, and also much better in terms of readability and maintainability.
*/

function Point(x, y) {
  this.x = x;
  this.y = y;
}

Point.prototype.setTo = function (x, y) {
  this.x = x;
  this.y = y;
};

const p1 = new Point(0, 0);
console.log({ p1X: p1.x, p1Y: p1.y }); // -> { p1X: 0, p1Y: 0 }
p1.setTo(10, 20);
console.log({ p1X: p1.x, p1Y: p1.y }); // -> { p1X: 10, p1Y: 20 }

/*
	Using accesor properties
	1. Avoid redundant data storage: If you have a property that can be derived from other properties, you can use an accessor property to avoid storing redundant data, and instead compute the value on the fly.
	2. Simplified interface: Accessor properties can be used to simplify the interface of an object, by combining multiple properties into a single one.
	3. Encapsulation: Accessor properties can be used to hide the internal state of an object, and only expose a way to access and modify it.
	4. Computed properties: Accessor properties can be used to create computed properties, which are properties that are not stored but computed on the fly.

	On the example:
	Moreover, the point of giving discount as an accessor property and not as two separate methods (let's say getDiscount() and setDiscount()) is to keep the interface simple. 
	The word 'discount' is a noun and nouns go well as properties of a class in OOP, not as methods.
*/

function Item(sellingPrice, actualPrice) {
  this.sellingPrice = sellingPrice;
  this.actualPrice = actualPrice;
}

Item.prototype.getDiscountPercentage = function () {
  const discountAmount = this.actualPrice - this.sellingPrice;
  return (discountAmount * 100) / this.actualPrice;
};

Item.prototype.setDiscountPercentage = function (perc) {
  const percentageMultiplier = 1 - perc / 100;
  this.sellingPrice = this.actualPrice * percentageMultiplier;
};

const item = new Item(100, 200);
console.log(item.sellingPrice); // -> 100
console.log(item.actualPrice); // -> 200
console.log(item.getDiscountPercentage()); // -> 50
item.setDiscountPercentage(30);
console.log(item.sellingPrice); // -> 140

function ItemWithAccessorProperties(sellingPrice, actualPrice) {
  this.sellingPrice = sellingPrice;
  this.actualPrice = actualPrice;

  Object.defineProperty(this, "discountPercentage", {
    get: function () {
      const discountAmount = this.actualPrice - this.sellingPrice;
      return (discountAmount * 100) / this.actualPrice;
    },
    set: function (perc) {
      const percentageMultiplier = 1 - perc / 100;
      this.sellingPrice = this.actualPrice * percentageMultiplier;
    },
    configurable: true,
    enumerable: true,
  });
}

// Usage
var itemWithAccessorProperties = new ItemWithAccessorProperties(100, 200);
console.log(itemWithAccessorProperties.sellingPrice); // -> 100
console.log(itemWithAccessorProperties.actualPrice); // -> 200
console.log(itemWithAccessorProperties.discountPercentage); // -> 50
itemWithAccessorProperties.discountPercentage = 30;
console.log(itemWithAccessorProperties.sellingPrice); // -> 140

/*
	[Prototypal inheritance]
	We can use prototype mechanism to emulate class-subclass inheritance
	1. Create a constructor function for the subclass
	2. Set the prototype of the subclass to an instance of the superclass
	3. Set the constructor property of the subclass to the subclass itself

*/

function Animal(name) {
  this.name = name;
}

Animal.prototype.sayName = function () {
  console.log("I'm an animal, my name is " + this.name);
};

Animal.prototype.eat = function () {
  console.log("I'm eating");
};

function Bird(name, canFly) {
  Animal.call(this, name); // Call the superclass constructor, passing the subclass instance as this, and the arguments to the superclass constructor. Inheritance of properties.
  this.canFly = canFly;
}

Bird.prototype = Object.create(Animal.prototype); // Set the prototype of Bird to an instance of Animal for prototypal inheritance (inherites methods from Animal)
Bird.prototype.constructor = Bird; // Needed to set the constructor property of Bird to Bird itself because it was overwritten by the previous line. Otherwise, the constructor property would point to Animal and the prototype chain would be broken.

Bird.prototype.sing = function () {
  console.log("I'm singing");
};

const bird1 = new Bird("Nightingale", true);
bird1.sayName(); // -> I'm an animal, my name is Nightingale
bird1.eat(); // -> I'm eating
bird1.sing(); // -> I'm singing
console.log({ canFly: bird1.canFly }); // -> true
console.log({ name: bird1.name }); // -> Nightingale

/*
	[Retrieving the prototype of an object]
	1. Object.getPrototypeOf(obj): Returns the prototype of obj.
	2. obj.__proto__: Returns the prototype of obj. (non-standard)
	3. F.prototype: Returns the prototype of instances created by F if the object is an instance of a constructor F.
*/

const o1 = [1, 2, 3];
const o2 = { x: 0 };
const o3 = 10;
function T() {
  this.param = 10;

  this.log = function () {
    console.log("Hello");
  };
}
console.log(o1.__proto__); // -> [Array: null prototype] { at: ƒ, concat: ƒ, ... }
console.log(o1.__proto__ === Array.prototype); // -> true
console.log(o2.__proto__); // -> { __defineGetter__: ƒ, __defineSetter__: ƒ, ... }
console.log(o2.__proto__ === Object.prototype); // -> true
console.log(o3.__proto__); // -> { 0, toExponential: ƒ, ... }
console.log(o3.__proto__ === Number.prototype); // -> true
console.log(T.prototype); // -> { }
console.log(T.__proto__); // -> ƒ () { [native code] }
console.log(T.__proto__ === T.prototype); // -> false

console.log(Object.getPrototypeOf(o1)); // -> [Array: null prototype] { at: ƒ, concat: ƒ, ... }
console.log(Object.getPrototypeOf(o2)); // -> { __defineGetter__: ƒ, __defineSetter__: ƒ, ... }
console.log(Object.getPrototypeOf(o3)); // -> { 0, toExponential: ƒ, ... }
console.log(Object.getPrototypeOf('10')); // -> String { '', anchor: ƒ, at: ƒ, ... }
const o4 = {};
console.log(Object.getPrototypeOf(Object.create(o4))); // => {}
console.log(Object.getPrototypeOf(T)); // -> ƒ () { [native code] }
console.log(Object.getPrototypeOf(T) === T.prototype); // -> false

/*
	[Setting the prototype of an object]
	1. Object.setPrototypeOf(obj, prototype): Sets the prototype of obj to prototype.
	2. obj.__proto__ = prototype: Sets the prototype of obj to prototype. (non-standard)
*/

const o5 = { x: 10, y: 20 };
const o6 = { z: 30 };
o6.__proto__ = o5;
console.log({ o6X: o6.x, o6Y: o6.y, o6Z: o6.z }); // -> { o6X: 10, o6Y: 20, o6Z: 30 }

const o7 = { p: 100, q: 200 };
const o8 = { r: 300, s: 400 };
Object.setPrototypeOf(o8, o7);
console.log({ o8P: o8.p, o8Q: o8.q, o8R: o8.r, o8S: o8.s }); // -> { o8P: 100, o8Q: 200, o8R: 300, o8S: 400 }
