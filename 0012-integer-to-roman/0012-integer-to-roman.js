/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    let finalStr = '';
    
    while(num > 0) {
        if(num >= 1000){
            finalStr += 'M';
            num -= 1000;
        }
        if(num >= 500 && num < 1000) {
            if(num >= 900) {
                finalStr += 'CM';
                num -= 900;
            }else {
                finalStr += 'D';
                num -= 500;
            }
        }
        if(num >= 100 && num < 500) {
            if(num >= 400){
                finalStr += 'CD';
                num -= 400;
            }else {
                finalStr += 'C';
                num -= 100;
            }
        }
        if(num >= 50 && num < 100) {
            if(num >= 90){
                finalStr += 'XC';
                num -= 90;
            }else {
                finalStr += 'L';
                num -= 50;
            }
        }
        if(num >= 10 && num < 50) {
            if(num >= 40){
                finalStr += 'XL';
                num -= 40;
            }else {
                finalStr += 'X';
                num -= 10;
            }
        }
        if(num >= 5 && num < 10) {
            if(num === 9){
                finalStr += 'IX';
                num -= 9;
            }else {
                finalStr += 'V';
                num -= 5;
            }
        }
        if(num >= 1 && num < 5) {
            if(num === 4){
                finalStr += 'IV';
                num -= 4;
            }else {
                finalStr += 'I';
                num -= 1;
            }
        }
    };
    
    return finalStr;
};

// console.log(intToRoman(1994))