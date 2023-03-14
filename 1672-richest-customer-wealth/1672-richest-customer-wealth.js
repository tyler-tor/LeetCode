/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let ammount = -Infinity;
    let checkAmmount = 0;
    
    for(let i = 0; i < accounts.length; i++) {
        let customer = accounts[i];
        
        for(let j = 0; j < customer.length; j++) {
           let num = customer[j];
            checkAmmount += num;
        };
        if(checkAmmount > ammount) ammount = checkAmmount;
        
        checkAmmount = 0;
    }
    return ammount;
};