// We just need to remove the curly braces from the arrow function body, in order for the implicit return to take action:
const evenNumbers = [1,2,3,4,5,6,7,8].filter( num => num % 2 === 0 );
console.log( evenNumbers ); 

// Version 0.1.0