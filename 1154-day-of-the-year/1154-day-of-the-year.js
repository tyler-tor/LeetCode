/**
 * @param {string} date
 * @return {number}
 */
var dayOfYear = function(date) {
    let splitedDate = date.split('-');
    let month = parseInt(splitedDate[1]);
    let day = parseInt(splitedDate[2]);
    let year = parseInt(splitedDate[0]);
    let months = {
        2: 31,
        3: 59,
        4: 90,
        5: 120,
        6: 151,
        7: 181,
        8: 212,
        9: 243,
        10: 273,
        11: 304,
        12: 334
    };
    
    if(month > 1) {
        // console.log(2019 % 100)
        if(month > 2) {
            if(((year % 4 === 0) && (year % 100 !== 0)) || 
           ((year % 100 === 0) && (year % 400 === 0))) {
            return months[month] + day + 1;
        }
        }
        // if(((year % 4 === 0) && (year % 100 !== 0)) || 
        //    ((year % 100 === 0) && (year % 400 === 0))) {
        //     return months[month] + day + 1;
        // }
        return months[month] + day;
    }else {
        return day;
    }
};