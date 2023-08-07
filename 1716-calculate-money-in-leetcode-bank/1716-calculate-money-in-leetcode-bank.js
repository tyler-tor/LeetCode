/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function(n) {
    let currDay = 1;
    let money = 1;
    let totalMon = 0;
    let currWeek = 1;
    let currWeekEnding = 7;
    
    while(currDay <= n) {
        totalMon += money;
        
        if(money === currWeekEnding) {
            currWeek++;
            money = currWeek;
            currWeekEnding++;
        }else {
            money++;
        }
        
        currDay++
    };
    
    return totalMon;
};

// console.log(totalMoney(20))