/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let obj = {};
    let res = [];
    
    for(let num of nums1) {
        if(!obj[num]) {
            obj[num] = 1;
        }
    };
    for(let num of nums2) {
        if(obj[num] && !res.includes(num)) {
            res.push(parseInt(num))
        }
    }
    return res;
};