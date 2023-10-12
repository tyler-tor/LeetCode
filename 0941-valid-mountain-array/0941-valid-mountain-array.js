/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
    let max = Math.max(...arr);
    let maxIndex = arr.indexOf(max);
    let temp = arr[0]
    
    if(arr[0] === max || maxIndex === arr.length - 1) return false;
    
    for(let i = 1; i < arr.length; i++) {
        let curr = arr[i]
        if(i <= maxIndex){
            if(temp >= curr) return false;
        }else {
            if(temp <= curr) return false;
        }
        temp = curr
    };
    
    return true;
};


// console.log(validMountainArray([3,5,5]));
// console.log(validMountainArray([0,3,2,1]));