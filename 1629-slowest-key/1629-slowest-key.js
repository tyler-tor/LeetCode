/**
 * @param {number[]} releaseTimes
 * @param {string} keysPressed
 * @return {character}
 */
var slowestKey = function(releaseTimes, keysPressed) {
    let resObj = {};
    let pastTime = 0
    
    for(let i = 0; i < releaseTimes.length; i++) {
        let time = releaseTimes[i] - pastTime;
        let key = keysPressed[i];
        
        if(resObj[key]) {
            if(time > resObj[key]) {
                resObj[key] = time
            }
        }else {
            resObj[key] = time;
        }
        
        pastTime = releaseTimes[i];
    };
    
    let letter = Object.keys(resObj).reduce((a, b) => {
        if(resObj[a] === resObj[b]){
            return a > b ? a : b;
        }else {
            return resObj[a] > resObj[b] ? a : b;
        }
    });

    return letter
};