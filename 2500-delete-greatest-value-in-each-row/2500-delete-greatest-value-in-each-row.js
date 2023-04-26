/**
 * @param {number[][]} grid
 * @return {number}
 */
var deleteGreatestValue = function(grid) {
    let res = [];
    while(grid.length) {
        let check = [];
        for(let row = 0; row < grid.length; row++) {
            for(let i = 0; i < grid[row].length; i++) {
                let max = Math.max(...grid[row]);
                if(grid[row][i] === max) {
                    check.push(max)
                    grid[row].splice(i, 1)
                    break;
                }
            }
        }
        if(check.length === 0) break;
        // console.log('grid', grid)
        // console.log('check', check)
        res.push(Math.max(...check))
    }
    // console.log('res', res)
    return res.reduce((a, b) => a + b);
};



// //result array
//     let res = [];
    
//     while(grid.length >= 0) {
//         //check array in while loop
//         let check = [];
//         //for loop to check subarrays
//         for(let i = 0; i < grid.length; i++) {
//             //finding the maxvalue of the current row
//             let max = Math.max(...grid[i]);
//             check.push(max);
//             grid[i] = grid[i].filter((e) => e !== max);
//         };
//         console.log(check)
//         res.push(Math.max(...check))
//     }
//     console.log(res)
//     // return res.max()