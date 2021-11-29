## DAY 01 | PREREQUISITES - ES6 & Node.JS | ES6 Template Literals

Template literals (aka backticks) are a practical way to combine Strings and dynamic values together without the need to concatenate:

```js
const path = "posts";
const host = "http://localhost:3001";

// Old way of String concatenation and use of dynamic values in a String:
const URL = host + "/" + path;

// Using template literals:
const URL = `${host}/${path}`;

console.log( URL ); //=> "http://localhost:3001/posts";

// Another example:
const first = "John";
const last  = "Doe";
const hello = `HELLO MR. ${first.toUpperCase()} ${last.toUpperCase()}!`;

console.log( hello );
//=> "HELLO MR. JOHN DOE"
```

REFERENCES | FURTHER READING 

Template literals (Template strings) (MDN)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals

Template Literals (ES6) - Beau teaches JavaScript
https://www.youtube.com/watch?v=kj8HU-_P2NU

TAGGED TEMPLATES:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#Tagged_templates