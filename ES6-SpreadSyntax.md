## DAY 01 | PREREQUISITES - ES6 & Node.JS | ES6 Spread Operator

With the introduction of the Spread operator, we can spread out the values of Arrays, Strings or Objects in various places, which make this syntax an extremely useful tool for JavaScript programmers. The examples in this section will lay out the simplicity and power of the spread syntax.

Firstly, the spread operator can operate on Strings, which results in a new Array containing all the string characters:

```js
const favorite = "JavaScript";

const favoriteArray = [...favorite];

console.log( favoriteArray ); 
//=> ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]
```

It can also work on Array values, allowing use to easily unpack the values of an Array:

```js
const letters = [ "B", "C", "D" ];

const copied = [ ...letters ];
console.log( copied );
//=> [ "B", "C", "D" ] 
```

Keep in mind, that `copied` and `letters` are now two different arrays with their own copy of the letter values, acting independently.

We can also place the spread operator at different spots in the new array:

```js
const letters = [ "B", "C", "D" ];

const moreLetters = [ "A", ...letters, "E" ];
console.log( moreLetters );
//=> [ "A", "B", "C", "D", "E" ] 
```

We can even swap values without intermediary variables:

```js
let a = "FIRST";
let b = "SECOND";
[ a, b ] = [ b, a ];
console.log( a, b );
//=> "SECOND", "FIRST" 
```

Spread operator, works equally well with Object properties:

```js
const obj = { a: "FIRST", b: "SECOND" }

const clone = { ...obj }

console.log( clone );
//=> { a: "FIRST", b: "SECOND" }
```

Make sure to note, that the second object `clone` contains a shallow copy of object `obj` and behaves as an independent entity.

We can also insert additional properties to the new object and override property values from the original object as seen in the next example:

```js
const company = {
    name: "Acme Inc.",
    address: "Tokyo, Japan",
    founded: 2015
}

const subsidiary = {
    ...company,
    name: "Acme Logistics",
    founded: 2020,
    IPO: true
}

console.log( subsidiary );
//=> { name: "Acme Logistics", address: "Tokyo, Japan", founded: 2020, IPO: true }
```

As you can see in the previous example, a new object has been created, called `subsidiary`, that contains all the property key/value pairs from `company` object, along with a new property named `IPO` and two original properties that have been overriden with new values: `founded` and `name`.

Take note, that the order in which the property names are placed matters!

```js
const obj = { a: 1, b: 2, c: 3 }
const clone = { a: 10, ...obj, b: 20 }

console.log( clone );
//=> { a: 1, b: 20, c: 3 } 
```

As you can see in the previous example, the property `a: 10` is replaced with the value from the original object, since it comes after the declaration.

REFERENCES | FURTHER READING 

Spread syntax (MDN)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax

The JavaScript Spread Operator
https://flaviocopes.com/javascript-spread-operator/

Spread Operator Does Not Deep Copy Properties
https://bambielli.com/til/2017-01-29-spread-operator-deep-copy/

The Spread Operator: Deep and Shallow Copies.
https://medium.com/@kevinlai76/the-spread-operator-deep-and-shallow-copies-d193ac9b58bf