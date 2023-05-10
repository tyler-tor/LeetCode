/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    let res = [[],[]];
    let nums = [...nums1, ...nums2];
    
    for(let i = 0; i < nums.length; i++) {
        let num = nums[i];
        
        if(nums1.includes(num) && !nums2.includes(num) && !res[0].includes(num)) res[0].push(num);
        if(nums2.includes(num) && !nums1.includes(num) && !res[1].includes(num)) res[1].push(num);
    };
    
    return res;
};