/**
 * @param {number} purchaseAmount
 * @return {number}
 */
var accountBalanceAfterPurchase = function(purchaseAmount) {
    if(purchaseAmount === 100) return 0;
    
    if(purchaseAmount < 100 && purchaseAmount >= 85) {
        if(purchaseAmount >= 95) {
            return 0;
        }else {
            return 10;
        }
    }else if(purchaseAmount < 85 && purchaseAmount >= 65) {
        if(purchaseAmount >= 75) {
            return 20;
        }else {
            return 30;
        }
    }else if(purchaseAmount < 65 && purchaseAmount >= 45) {
        if(purchaseAmount >= 55) {
            return 40;
        }else {
            return 50;
        }
    }else if(purchaseAmount < 45 && purchaseAmount >= 25) {
        if(purchaseAmount >= 35) {
            return 60;
        }else {
            return 70;
        }
    }else if(purchaseAmount < 25 && purchaseAmount >= 5) {
        if(purchaseAmount >= 15) {
            return 80;
        }else {
            return 90;
        }
    }else {
        return 100
    }
};