/**
 * @param {number[]} forts
 * @return {number}
 */
var captureForts = function(forts) {
    let i = 0;
    let max = 0;
    
    if(forts.length <= 2) return 0;
    
    for(let j = 1; j < forts.length; j++) {
        if(forts[i] === 1 || forts[i] === -1){
            if(forts[j] !== 0) {
                if(forts[i] === 1 && forts[j] === -1 || forts[i] === -1 && forts[j] === 1){
                  if(max < (j - i)){
                    max = (j - i)
                    } 
                }
                i = j
            }
        }else {
            i = j
        }
    }
    
    return max === 0 ? max : max - 1;
};

console.log(captureForts([0,-1,-1,0,-1]))
//2