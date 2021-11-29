## DAY 01 | PREREQUISITES - ES6 & Node.JS | ES6 Arrow Functions

Arrow functions (or more accurately Arrow function expressions) are a different way to declare functions in JavaScript. The main driving force behind this new syntax was the need for shorter functions and a different behavior regarding the binding of the `this` keyword.

The main syntax is as follows:

```js
// Standard way of declaring functions (ES5):
function ordinaryFunction( msg ){
    alert( msg );
}

// Standard way of using function expressions (ES5):
const ordinaryFunction = function( msg ){
    alert( msg );
}

// Arrow function expression (ES6):
const arrowFunction = ( msg )=>{
    alert( msg );
}
```

In the previous example, we replaced the `function` keyword with the `Fat arrow` =>, which we placed right after the parentheses.

Arrow functions can be used as anonymous functions:

```js
setTimeout(()=>{

    console.log("1 sec passed!");

}, 1000 );
```

...as values assigned to variables:

```js
const alertHurray = ()=> { alert("Hurray!"); }
```

...or as object property values and thus be used as object methods:

```js
const message = {

    show: ()=> {
        alert("Hurray!");
        
    }

}
mesage.show();
```

Along with the main syntax, we get the following syntactic variations when using Arrow functions:

```js
const justOneParam = ( arg )=>{ 

    alert(arg); 

}

// When using just one parameter, we can omit the parentheses:
const justOneParam = arg =>{ 

    alert(arg); 

}
```

When just one statement is present in the function body, we can omit the curly braces and get an implicit return:

```js
var getRandom = ()=>{

    return Math.random();

}

// No need for curly braces and a return statement here:
var getRandom = ()=> Math.random()
```

Make sure to understand that in the previous code we DO get an implicitly (automatically) returned value: Math.random().

Along with the special new syntax, arrow functions differ in the following ways:

- There is no `arguments` object available in the function body
- The methods call(), apply() and bind() have no effect on Arrow functions
- Arrow functions cannot be used as constructors using the `new` keyword 
- The `this` keyword binding does not change inside arrow functions

What follows, are some examples that clarify this last point, which is of great importance, especially when working with objects and event handlers.

The `this` keyword in JavaScript, binds to a specific value depending on the execution context, in other words, the way in which the function was called. Some examples, to clarify the above statement:

```js
function getThis(){
    return this;
}

const obj = {
    getThisMethod: getThis
}

getThis();              // this === Window Object
// This is equivalent to:
window.getThis();       // this === Window Object

obj.getThisMethod();    // this === obj Object
```

Another example, where the binding of `this` changes to a specific object is when encountered in Event handlers. It implicitly binds to the Element Object attached to the Event Listener:

```js
document.body.addEventListener( "click", function(){
    console.log( this ); // this === document.body
});
```

In contrast to the default behavior of the `this` binding (which is set according to the execution context as we saw in the code above) Arrow functions bypass the dynamic binding of `this` and instead leave `this` pointing to whatever object it was bound to, outside the arrow function body. Take a look at the next examples to better understand this concept:

```js
console.log( this );    // this === Window Object

const obj = {

    getThis: function(){
        console.log( this );    // JS will bind `this` to the obj Object
    },

    getThisFromArrow: ()=>{
        console.log( this );    // JS will leave `this` intact, pointing to Window Object
    }
}

obj.getThis();  // JS will bind `this` to the object
obj.getThisFromArrow(); // JS will NOT bind `this` to the object
```

One last example to make this even more clear:

```js
console.log( this ); // this === Window Object

document.body.addEventListener( "click", function(){
    console.log( this );    // this === document.body
});

document.body.addEventListener( "click", ()=>{
    console.log( this );    // this === Window Object
});
```

In other words, Arrow functions do not have their own `this`, but instead use the same `this` from the surrounding code.

QUICK EXERCISE: Update the code below, in order for the filtering to work:

```js
const evenNumbers = [1,2,3,4,5,6,7,8].filter( num => { num % 2 === 0 });
console.log( evenNumbers ); // evenNumbers is empty!
```

[CODE](ES6/ES6-ArrowFunctions-Exercise.js)

SOLUTION:

```js
// We just need to remove the curly braces from the arrow function body, in order for the implicit return to take action:
const evenNumbers = [1,2,3,4,5,6,7,8].filter( num => num % 2 === 0 );
console.log( evenNumbers ); 
```

[CODE](ES6/ES6-ArrowFunctions-Solution.js)

REFERENCES | FURTHER READING

Arrow function expressions (MDN)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

ES6 In Depth: Arrow functions
https://hacks.mozilla.org/2015/06/es6-in-depth-arrow-functions/

ES6 Arrow Functions: Fat and Concise Syntax in JavaScript
https://www.sitepoint.com/es6-arrow-functions-new-fat-concise-syntax-javascript/

When (and why) you should use ES6 arrow functions — and when you shouldn’t
https://www.freecodecamp.org/news/when-and-why-you-should-use-es6-arrow-functions-and-when-you-shouldnt-3d851d7f0b26/