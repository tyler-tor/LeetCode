/**
 * @param {string} time
 * @return {string}
 */
var maximumTime = function(time) {
    let resTime = ''
    
    for(let i = 0; i < time.length; i++) {
        if(time[i] === '?'){
            if(i === 0 && time[i] === '?'){
                if(time[i + 1] === '4' || time[i + 1] === '5' || time[i + 1] === '6' || time[i + 1] === '7' || time[i + 1] === '8' || time[i + 1] === '9') {
                    resTime += 1;
                }else {
                    resTime += 2;
                }
            }else if(i === 1 && time[i] === '?') {
                if(time[i - 1] === '0' || time[i - 1] === '1'){
                    resTime += '9';
                }else {
                    resTime += '3'
                }  
            }else if(i === 3 && time[i] === '?'){
                resTime += '5';
            }else if(i === 4 && time[i] === '?') {
                resTime += '9'
            }   
        }else {
            resTime += time[i]
        }
    };
    
    return resTime;
};