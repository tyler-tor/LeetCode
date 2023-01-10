/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const pairs = {
		'(':')',
		'[':']',
		'{':'}'
    }
    
    const store = [] 
    if (s.length < 2) return false;

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (char in pairs) {
		    store.push(char);
		    continue;
        }
        const key = store.pop()
        if (pairs[key] !== char) return false
    }
    if (store.length) return false;
    return true
};