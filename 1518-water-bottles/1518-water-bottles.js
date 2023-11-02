/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function(numBottles, numExchange) {
    let numDrank = numBottles;
    let emptyBottles = numBottles % numExchange;
    let moreBottles = Math.floor(numBottles / numExchange);
    
    while(moreBottles) {
        numDrank += moreBottles;
        numBottles = emptyBottles + moreBottles;
        emptyBottles = numBottles % numExchange;
        moreBottles = Math.floor(numBottles / numExchange);
    };
    
    return numDrank;
};

// numWaterBottles(15, 4)