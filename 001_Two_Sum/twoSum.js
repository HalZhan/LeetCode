/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var idx1=0, idx2=0, numsLen = nums.length, ans = [];
    for(idx1=0;idx1<numsLen;idx1++) {
        for(idx2=idx1;idx2<numsLen;idx2++) {
            if(nums[idx1]+nums[idx2]==target) {
                ans.push(idx1, idx2);
                return ans;
            }
        }
    }
    return ans;
};