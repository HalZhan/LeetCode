/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let len = nums.length;
    let nonnegativeIdxs = [], maxValIdx = 0;
    nums.forEach((val, idx, arr) => {
        if(val >= 0) {
            nonnegativeIdxs.push(idx);
        }
        if(val > nums[maxValIdx]) {
            maxValIdx = idx;
        }
    });
    if(nonnegativeIdxs.length) {
        let startIdx = endIdx = nonnegativeIdxs[0];
        
    }
    else {
        return [nums[maxValIdx]];
    }
};