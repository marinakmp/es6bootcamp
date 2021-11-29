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