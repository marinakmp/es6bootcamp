## DAY 01 | PREREQUISITES - ES6 & Node.JS | ES6 Classes

In contrast to the way that most popular Object-oriented class-based programming languages deal with Objects, Object creation and Inheritance, JavaScript uses Functions as constructors of object instances and a mechanism called the `Prototype` to implement inheritance. It is, therefore, considered a prototype-based language.

Due to the popularity of class-based languages and the familiarity of their class syntax among developers, a new class keyword was introduced in ECMAScript* in 2015 that enabled programmers to use the familiar class syntax in order to create objects and extend them in JavaScript.

* ECMAScript is the official language specification, upon which JavaScript is based. 
ECMAScript 2015 is also known as ES6.

Here is the basic syntax for creating a class in JavaScript and instantiating it:

```js
class Product {
    constructor( color, size ){
        this.color = color;
        this.size = size;
    }
    showDetails(){
        return "Color: " + this.color + " / Size: " + this.size;
    }
}

// We instantiate the class using the new keyword, to get new object instances:
const small = new Product( "Orange", "Small" );
const large = new Product( "Pink", "Large" );

// Call the method showDetails on each object instance:
small.showDetails();
large.showDetails();
```
[CODE](ES6/ES6-Classes--Product.js)

Static properties and methods can be declared using the `static` keyword as follows:

```js
class Box {
    static name = "Box";

    static showClassProperty(){
        console.log( Box.name );
    }
}

Box.showClassProperty();
```
[CODE](ES6/ES6-Classes--Static.js)

Extending classes can be done using the `extends` keyword and using the `super()` method to call the parent class's constructor method as follows:

```js
class Product {

    static VAT = 0.24;  // Static properties and methods are also inherited

    constructor( price ){
        this.price = price;
    }

    getPriceTotal(){
        return this.price + ( this.price * Product.VAT );
    }

}

class GameBox extends Product {

    constructor( price, type ){
        // Whenever we use a constructor in a child class
        // we need to call the parent constructor via super()
        super( price );
        this.type = type;   
    }

}

const gameBox = new GameBox( 300, "Game console" );
const total = gameBox.getPriceTotal();
console.log( total );
```
[CODE](ES6/ES6-Classes--extends-super.js)

Exercise: Create a class that creates Lottery tickets with a random number attached to each ticket. Let the main class keep a note on how many tickets (object instances) have been issued.

Solution: [ UPLOAD TO GITHUB + CREATE CODESANDBOX LINK ]

```js
class Lottery {

    static issued = 0; // We will hold the number of tickets issued here

    constructor(){

        this.number = "";

        // Create 6 pseudo-random numbers for our lottery ticket
        for ( let i = 0; i < 6; i++ ){
        this.number += Math.floor( Math.random() * 10 );
        }

        Lottery.issued++; // Update our tickets counter

    }

    showNumber(){
        console.log( "Lucky number: ", this.number );
    }

    getTicketsIssued(){
        console.log( "Tickets issued so far: ", Lottery.issued );
    }

}

const ticket1 = new Lottery();
ticket1.showNumber();
ticket1.getTicketsIssued();

const ticket2 = new Lottery();
ticket2.showNumber();

ticket1.getTicketsIssued();
ticket2.getTicketsIssued();
```
[CODE](ES6/ES6-Classes--Lottery-solution.js)

REFERENCES | FURTHER READING

JavaScript Class (Mozilla Developer Network)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes

ExploringJS - Classes (Extensive)
https://exploringjs.com/es6/ch_classes.html

JavaScript ES6 Classes
https://www.stackchief.com/tutorials/JavaScript%20ES6%20Classes

JavaScript Classes Tutorial (YouTube / FreeCodeCamp)
https://www.youtube.com/watch?v=2ZphE5HcQPQ