## DAY 01 | PREREQUISITES - ES6 & Node.JS | ES6 Object & Array Destructuring

According to MDN, "the destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables."

Let's unpack some values to make this more clear. First, we're going to unpack some Array values and then move on to Object properties:

```js
const years = [ 2015, 2016, 2017, 2018 ];
const [ ES6, ES7, ES8, ES9 ] = years;

console.log( ES6, ES7, ES8, ES9 );
//=> 2015, 2016, 2017, 2019
```

Keep in mind, that the Array values are copied to the variables, keeping the original Array intact.

In the previous example, all the values of the years array are 'unpacked' into 4 distinct variables. The values are assigned to the variables, in the order that they appear in both the variable declaration and the array structure: ES5 variable will hold the first array value, 2015, ES7 will hold 2016, and so forth.

Values are unpacked, up to the point where available variables are found in the declaration part of the destructuring part:

```js
const [ ES6, ES7 ] = [ 2015, 2016, 2017, 2018 ];

//=> ES6 === 2015
//=> ES7 === 2016
```

In case, the variables declared are more than the available Array values, the rest of the variables are filled with the value `undefined`:

```js
const [ ES6, ES7, ES8, ES9 ] = [ 2015, 2016 ];

console.log( ES6, ES7, ES8, ES9 );
//=> 2015, 2016, undefined, undefined
```

We can also set some default values for the unavailable Array entries:

```js
const [ ES6, ES7, ES8=2017, ES9=2018 ] = [ 2015, 2016 ];

console.log( ES6, ES7, ES8, ES9 );
//=> 2015, 2016, 2017, 2018
```

We can also unpack Array values coming from a function's return statement:

```js
function getECMAScript(){
    return [ 2015, 2016, 2017, 2018 ];
}    

const [ ES6, ES7 ] = getECMAScript();
console.log( ES6, ES7 );
//=> 2015, 2016
```

The code below shows how you can omit certain Array values during destructuring:

```js
const [ a, ,c ] = [ "A", "B", "C" ]; 
console.log( a, c );
//=> "A", "C"
```

Let's move on to Objects, and unpack some property values into their respective variables:

```js
const Company = {
    name: "Apple",
    city: "San Francisco",
    state: "California"
}

// Old way of unpacking Object property values into variables:
const name = Company.name;
const city = Company.city;
const state = Company.state

// Using Object destructuring:
const { city, name, state } = Company;
console.log( city, name, state );
//=> "San Francisco", "Apple", "California"
```

The order in which the property names are declared makes no difference when unpacking property values from an Object, as you might have noticed in the previous example.

We can also unpack specific property values into variables with names different than the property names, as follows:

```js
const Company = {
    name: "Apple",
    city: "San Francisco",
    state: "California"
}

const { name: company, city:base } = Company;
console.log( company, base );
//=> "Apple", "San Francisco"
```

EXERCISE: Complete the code below, in order to get the result that you see at the last (commented) line:

```js
const [ state, getState ] = useState( "Initial" );

// COMPLETE THE FUNCTION:
function useState(){

}

console.log( state, getState );
//=> "Initial", function(){ alert(state); }
getState(); //=> Should  alert "Initial";
```

SOLUTION: ES6-Destructuring-Solution.js

```js
const [ state, getState ] = useState( "Initial" );

// COMPLETE THE FUNCTION:
function useState( value ){
    return [ value, function(){ alert(state) } ];
}

console.log( state, getState );
//=> "Initial", function(){ alert(state); }
```

REFERENCES | FURTHER READING

Destructuring assignment (MDN)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

Destructuring assignment - JavaScript.info
https://javascript.info/destructuring-assignment

Destructuring - JavaScript for impatient programmers
https://exploringjs.com/impatient-js/ch_destructuring.html