/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    let checkedMoves = {
        'U': 1,
        'D': -1,
        'R': 2,
        'L': -2
    };
    let position = [0, 0];
    
    for(let letter of moves){
        if(letter === 'R' || letter === 'L'){
            position[1] += checkedMoves[letter]
        }else {
            position[0] += checkedMoves[letter]
        }
    };
    // console.log(position)
    for(let num of position) {
        if(num !== 0) return false
    };
    
    return true
};

console.log(judgeCircle("UDDUURLRLLRRUDUDLLRLURLRLRLUUDLULRULRLDDDUDDDDLRRDDRDRLRLURRLLRUDURULULRDRDLURLUDRRLRLDDLUUULUDUUUUL"))