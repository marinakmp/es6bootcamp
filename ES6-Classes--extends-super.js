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

// Version 0.1.0