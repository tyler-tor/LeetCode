/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let check = 0;
    
    for(let i = 0; i < t.length; i++) {
        if(t[i] === s[check]){
            check++;
        }
    };
    
    if(check === s.length){
        return true;
    }else {
        return false;
    }
};