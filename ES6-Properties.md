## DAY 01 | PREREQUISITES - ES6 & Node.JS | ES6 Shorthand Property Names & Computed Properties

When working with Objects in JavaScript, you definitely want to use two language features, that will make your life easier.

Shorthand Property names, allows you to add or update an Object properties using a shorter syntax as follows:

```js
const username = "AdaLovelace";
const email = "hacker@ftw.net";

// Standard way of adding properties:
var user = {
    username: username,
    email: email
}
//=> user === { username: "AdaLovelace", email: "hacker@ftw.net" }

// Same outcome, using the shorthand syntax:
var user = {
    username,
    email
}

console.log( user );
```

Computed property names, make it possible, to use expressions that once evaluated will be used as Object propety names. Take a look at the example below:

```js
const partA = "java";
const partB = "script";

var languages = {
    partA + partB: "Awesome",                       //<-- We cannot do this :(
    Math.random(): "Just a random property name!"   //<-- Neither can we do this :(
} 

// Wait! We can!
var languages = {
    [partA + partB]: "Awesome",                       
    [Math.random()]: "Just a random property name!"   
} 

console.log( languages );
//=> {javascript: "Awesome", 0.15783571941219687: "Just a random property name!"}
``` 

EXERCISE: Fill in the code, in the appropriate sections, in order for the form input to be displayed in the web page (#formdata section).
[STARTING CODE](ES6-Properties-exercise.html)

```html
<form>
    <input type="text" name="first" placeholder="First name">
    <input type="text" name="surname" placeholder="Surname">
    <label>
    Accept terms:
    <input name="terms" type="checkbox">
    </label>
    <button>Submit</button>
</form>  

<!-- Whenever some input data changes, this is where we want the data to be displayed -->
<div id="formdata"></div>    
```

```js
let formInput = {
    first: "",
    surname: "",
    terms: false
}

document.querySelector("form").addEventListener("change", function(e){

    console.log( e.target );      // <- Element that triggered the change event
    console.log( e.target.type ); // <- Type: e.g. "text", "checkbox", etc.
    console.log( e.target.name ); // <- name property value, e.g. "first", etc.

    // YOUR CODE HERE >> You must call renderFormData( ... )

    // << YOUR CODE HERE

});

function renderFormData( key, value ){

    formInput = {
        // YOUR CODE HERE >>

        // << YOUR CODE HERE
    }

    document.querySelector("#formdata").innerHTML = `
        <p>First name: ${formInput.first}</p>
        <p>Surname: ${formInput.surname}</p>
        <p>Terms accepted: ${formInput.terms}</p>
    `  
}

renderFormData();
```

SOLUTION: ES6-Properties-solution.html

```html
<form>
    <input type="text" name="first" placeholder="First name">
    <input type="text" name="surname" placeholder="Surname">
    <label>
    Accept terms:
    <input name="terms" type="checkbox">
    </label>
    <button>Submit</button>
</form>  
<div id="formdata"></div>    
```

```js
let formInput = {
    first: "",
    surname: "",
    terms: false
}

document.querySelector("form").addEventListener("change", function(e){

    /* CODE HERE... */
    // You must call renderFormData( ... ) in here... 
    if ( e.target.type === "checkbox" ){
        renderFormData( e.target.name, e.target.checked );
    } else {
        renderFormData( e.target.name, e.target.value );
    }

});

function renderFormData( key, value ){

    formInput = {
        ...formInput,
        [key]: value
    }

    document.querySelector("#formdata").innerHTML = `
        <p>First name: ${formInput.first}</p>
        <p>Surname: ${formInput.surname}</p>
        <p>Terms accepted: ${formInput.terms}</p>
    `  
}

renderFormData();
```

REFERENCES | FURTHER READING 

Shorthand Notation (MDN)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#Property_definitions

Computed Property Names (MDN)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#Computed_property_names