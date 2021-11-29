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

    static getTicketsIssued(){
        console.log( "Tickets issued so far: ", Lottery.issued );
    }

}

const ticket1 = new Lottery();
ticket1.showNumber();
Lottery.getTicketsIssued();

const ticket2 = new Lottery();
ticket2.showNumber();

Lottery.getTicketsIssued();
Lottery.getTicketsIssued();

// Version 0.1.0