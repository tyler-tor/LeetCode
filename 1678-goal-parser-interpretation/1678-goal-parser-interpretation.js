/**
 * @param {string} command
 * @return {string}
 */
var interpret = function(command) {
    const s = command.split('');
    let res = '';
    for(let i = 0; i < s.length; i++) {
        if(s[i] === 'G') {
            res += 'G';
        }
        if(s[i] === "("){
            if(s[i + 1] === 'a'){
                res += 'al'
            }else {
                res += 'o'
            }
        }
    }
    return res;
};