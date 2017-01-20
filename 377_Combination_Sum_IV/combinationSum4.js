/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// var combinationSum4 = function(nums, target) {
//     const totalLen = nums.length;
//     let result = 0;
//     const search = function(nums, target) {
//         for(let i=0;i<totalLen;i++) {
//             if(nums[i] === target) {
//                 result++;
//                 return;
//             }
//             else if(nums[i] < target) {
//                 search(nums, target-nums[i]);
//             }
//             else {
//                 return;
//             }
//         }
//     };
//     search(nums, target);
//     return result;
// };
var combinationSum4 = function (nums, target) {
    const dp = [1];
    nums.sort((a, b) => { return a - b; })
    for (let i = 1; i <= target; i++) {
        dp.push(0);
        for (let num of nums) {
            if (num <= i) {
                dp[i] += dp[i - num];
            }
            else {
                break;
            }
        }
    }
    return dp[target];
};

// var nums = [1, 2, 3] ,target = 4; // 7
// var nums = [3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25], target = 10; //9
var nums = [1, 2, 3], target = 32;
console.log(combinationSum4(nums, target));