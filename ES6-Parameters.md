## DAY 01 | PREREQUISITES - ES6 & Node.JS | ES6 Rest Parameters & Parameter Defaults

Default function parameters, give us the opportunity to define default values for the omitted arguments:

```js
function getOrder( sku, quantity = 1){
    const order = {
        orderedProduct: sku,
        quantity
    }

    console.log( order );
}
getOrder( 510, 3 );
//=> { orderedProduct: 510, quantity: 3 }
getOrder( 445 );
//=> { orderedProduct: 445, quantity: 1 }
```

With the rest parameter, we can represent an indefinite amount of arguments in a single array parameter:

```js
function getOdd( ...numbers ){
    const oddNumbersList = numbers.filter( number =>{
        return number % 2 !== 0;
    });
    console.log( oddNumbersList );
}

getOdd( 12, 34, 56, 33, 9 );
//=> [ 33, 9 ]
```

REFERENCES | FURTHER READING 

Default parameters (MDN)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters

Rest parameters (MDN)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters