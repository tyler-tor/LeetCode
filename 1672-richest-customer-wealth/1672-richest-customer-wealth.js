/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let ammount = -Infinity;
    
    for(let i = 0; i < accounts.length; i++) {
        let checkAmmount = accounts[i].reduce((accumulator, currentValue) => accumulator + currentValue);
        
        if(checkAmmount > ammount) ammount = checkAmmount;
        
    }
    return ammount;
};