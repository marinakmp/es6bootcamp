## DAY 01 | PREREQUISITES - ES6 & Node.JS | ES6 Modules

JavaScript Modules (introduced in ES6), are a way to split a JavaScript application into separate modules (think files), with their own private scope, and be able to export (make public) specific elements (variables, functions, etc.) from a module in order for them to be imported and accessed by other modules and ensure re-usability.

Let's start with an example to make things easier to understand:

lib.js (Each .js file is considered a JS Module)

```js
const secret = "Open sesame."; 

// Using the export keyword to make the show function 'exportable':
export function show( msg ){
    alert( msg );
}
export function hello( name ){
    alert( "Hello " + name + "!" );
}
```

main.js

```js
// Importing show and hello functions from lib.js Module:
import { show, hello } from './lib.js';

show( "Imported!" );

hello( "ES6 Modules" );
```

The lib.js Module is using what is known as `Named exports` to export two functions that must be imported with the Object destructuring syntax. You can also use custom variable names when importing the exported data using the `as` keyword:

```js
import { show as pleaseShow, hello as helloMsg } from './lib'; // The .js suffix can be omitted

pleaseShow( "Imported!" );

helloMsg( "ES6 Modules" );
```

JavaScript Modules can have one default export, that can be imported without using curly braces and also with a custom name:

lib.js

```js
export default function Main(){
    console.log( "Initializing!" );
}
```

main.js:

```js
import Main from './lib';

Main();
```

Or alternatively:

main.js:

```js
import App from './lib'; // With default exports, we can use any name we want while importing

App();
```

We can also import a multitude of exported values using the * shorthand as follows:

lib.js:

```js
export const add = (a,b)=> alert( a + b )
export const subtract = (a,b)=> alert( a - b )
export const mul = (a,b)=> alert( a * b ) 
```

main.js:

```js
import * as math from './lib';  // All exported values, are now properties of the math object

math.add( 4, 5 );
math.subtract( 4, 5 );
math.mul( 4, 5 );
```

Lastly, we'll export a Class, import and initialize it in a different Module (file):

Game.js

```js
class Game {
    play(){
        alert( "Game on!" );
    }
}

export default Game;
```

main.js:

```js
import Game from './Game';

const game = new Game();
game.play();
```

EXERCISE: Make sure to create the appropriate Modules (files) in order for the code below to work as intended:

main.js

```js
import { Title } from './Title';
import { Subtitle } from './Subtitle';

document.body.innerHTML += Title("Learn ECMAScript 2015");
document.body.innerHTML += Subtitle("Arrow Functions, Template Literals & Destructuring");
```

Output should be like this:

```html
    <h1 class="title">Learn ECMAScript 2015</h1>
    <h2 class="subtitle">&Sub; Arrow Functions, Template Literals & Destructuring &Sup;</h2>
```

SOLUTION: ES6-Modules-solution.js

Title.js:   

```js
export function Title( content ){
    return `<h1 class="title">${ content }</h1>`; 
}
```

Subtitle.js:

```js
export function Subtitle( content ){
    return `<h2 class="subtitle">&Sub; ${ content } &Sup;</h2>`;
}
```

REFERENCES | FURTHER READING

JavaScript Modules (MDN)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

Introduction to ES Modules
https://flaviocopes.com/es-modules/

Exports/Imports in a Nutshell
https://stackoverflow.com/questions/36426521/what-does-export-default-do-in-jsx?answertab=active#tab-top

Javascript ES6 export const vs export let:
https://stackoverflow.com/questions/32558514/javascript-es6-export-const-vs-export-let