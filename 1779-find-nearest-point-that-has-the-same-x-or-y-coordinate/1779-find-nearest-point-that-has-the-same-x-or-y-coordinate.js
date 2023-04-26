/**
 * @param {number} x
 * @param {number} y
 * @param {number[][]} points
 * @return {number}
 */
var nearestValidPoint = function(x, y, points) {
    let obj = {};
    let min = Infinity;
    let ind = -1;
    
    for(let i = 0; i < points.length; i++) {
        let point = points[i];
        if(point[0] === x || point[1] === y){
            let check = (Math.abs(point[0] - x) + Math.abs(point[1] - y))
            if(check < min) {
                min = check
                ind = i
            }
        }
    };

    return ind
};

console.log(nearestValidPoint(3,4,[[3,4]]))