/**
 * @param {number[]} releaseTimes
 * @param {string} keysPressed
 * @return {character}
 */
var slowestKey = function(releaseTimes, keysPressed) {
    let resObj = {};
    let pastTime = 0;
    let max = 0;
    
    for(let i = 0; i < releaseTimes.length; i++) {
        let time = releaseTimes[i] - pastTime;
        
        if(resObj[time]) {
            if(keysPressed[i] > resObj[time]) {
                resObj[time] = keysPressed[i]
            }
        }else {
            resObj[time] = keysPressed[i];
        }
        if(time > max) max = time
        pastTime = releaseTimes[i];
    };

    return resObj[max]
};