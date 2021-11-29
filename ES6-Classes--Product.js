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

// Version 0.1.0