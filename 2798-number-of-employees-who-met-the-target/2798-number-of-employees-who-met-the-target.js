/**
 * @param {number[]} hours
 * @param {number} target
 * @return {number}
 */
var numberOfEmployeesWhoMetTarget = function(hours, target) {
    let totalEmployees = 0;
    
    for(let hour of hours) {
        if(hour >= target) totalEmployees++;
    };
    
    return totalEmployees
};