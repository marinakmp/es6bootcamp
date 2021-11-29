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