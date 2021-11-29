## DAY 01 | PREREQUISITES - ES6 & Node.JS | ES6 Async Await

The async keyword enables us to convert a synchronous function into an asynchronous (non-blocking) simply by adding the `async` keyword before a function declaration or a function expression. The async keyword will automatically convert the function into an asynchronous one that returns a Promise:

```js
function syncF(){
    return 2;
}
async function asyncF(){
    return 2;
}

console.log("Start:");

asyncF().then( value => console.log("Async:", value) );

console.log( "Sync:", syncF() );

console.log("End:");

//=> "Start:"
//=> "Sync:" 2
//=> "End:"
//=> "Async:" 2
```

Even though asyncF is called first, it behaves asynchronously: it and makes way for the next lines to be executed and returns after a couple of milliseconds with the asynchronous result being displayed inside the then() function.

Where async gets really powerful, is when used in pair with the `await` keyword, which let you handle asynchronous code, in a fashion similar to ordinary blocking code. The `await` keyword must ONLY be used inside functions declared with the async keyword: 

```js
// Ordinary asynchronous fetch call to the GitHub API, that returns closed issues from a repository:
function getGithubIssues(){

    fetch("https://api.github.com/repos/kostasx/LearnJavaScript/issues?state=closed")
    .then( response => response.json() )
    .then( issues => {
        // Once we get the issues, we grab the 2nd one, and fetch more information about it:
        const secondIssue = issues[1];
        fetch( secondIssue.url )
        .then( response => response.json() )
        .then( issue => {
            console.log( `Issue #2 - "${issue.title}" was closed by ${issue.closed_by.login}`)
        })
    });
    
}
``` 

The previous code, is an example of an asynchronous function (2nd fetch) that depends on the returned value of another asynchronous function (1st fetch). Things can get more complicated, once more asynchronous functions are added to the mix. The code can become easier to write and read with the addition of the async/await pair:

```js   
async function getGithubIssues(){

    const response = await fetch("https://api.github.com/repos/kostasx/LearnJavaScript/issues?state=closed");
    const issues = await response.json();

    const secondIssue = issues[1];

    const response2 = await fetch( secondIssue.url );
    const issue = await response2.json();
    console.log( `Issue #2 - "${issue.title}" was closed by ${issue.closed_by.login}`);
    
}
``` 

When using async/await, error handling is performed using the try { } catch { } syntax:

```js
async function getIssuesCount(){
    let response;
    try {
        response = await fetch("https://api.github.com/repos/kostasx/LearnJavaScript/issues?state=closed");
        const data = await response.json();
        console.log( `Issues: ${data.length}` );
    } catch (e) {
        console.error("Ops! Something went wrong.");
    }
}
```

EXERCISE: Rewrite the following code using async/await
[ STARTING CODE ](ES6-AsyncAwait-exercise.js)

```js
// No need to change this function:
function asyncGetRandomNumber(){
    return new Promise(function( resolve, reject ){
        resolve( Math.floor( Math.random() * 99 ) );
    });
}

// Rewrite this one though:
function getLotteryNumbers(){
    let luckyNumbers = "";

    asyncGetRandomNumber().then( number => {
        luckyNumbers = number.toString(); 
        asyncGetRandomNumber().then( number => {
            luckyNumbers += " " + number.toString(); 
            asyncGetRandomNumber().then( number => {
                luckyNumbers += " " + number.toString(); 
                asyncGetRandomNumber().then( number => {
                    luckyNumbers += " " + number.toString(); 
                    console.log( `Your lottery ticket numbers ${luckyNumbers}` );
                });
            });
        });
    });
}

getLotteryNumbers();
```

SOLUTION: [ES6-AsyncAwait-solution.js]

```js
function asyncGetRandomNumber(){
    return new Promise(function( resolve, reject ){
        resolve( Math.floor( Math.random() * 99 ) );
    });
}

async function getLotteryNumbers(){

    let luckyNumbers = "";

    luckyNumbers += await asyncGetRandomNumber();
    luckyNumbers += " " + await asyncGetRandomNumber();
    luckyNumbers += " " + await asyncGetRandomNumber();
    luckyNumbers += " " + await asyncGetRandomNumber();

    console.log( `Your lottery ticket numbers ${luckyNumbers}` );
}

getLotteryNumbers();
```

REFERENCES | FURTHER READING 

Async function (MDN)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function

Making asynchronous programming easier with async and await (MDN)
https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await

Asynchronous Programming
https://eloquentjavascript.net/11_async.html

Async/Await: Modern Concurrency In JavaScript
https://www.youtube.com/watch?v=NsQ2QIrQShU