/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
// var minSubArrayLen = function (s, nums) {
//     let numsLen = nums.length, minLen = -1, tmpSum = 0, tmpLen = 0;
//     for (let i = 0; i < numsLen; i++) {
//         tmpSum += nums[i];
//         if (nums[i] >= s) {
//             return 1;
//         }
//     }
//     if (tmpSum < s) {
//         return 0;
//     }
//     else if (tmpSum === s) {
//         return numsLen;
//     }
//     else {
//         for (let i = 0; i < numsLen; i++) {
//             tmpSum = 0, tmpLen = 0;
//             for (let j = i; j < numsLen; j++) {
//                 tmpSum += nums[j];
//                 tmpLen++;
//                 if (tmpSum >= s) {
//                     if (minLen < 0) {
//                         minLen = tmpLen;
//                     }
//                     else {
//                         minLen = tmpLen < minLen ? tmpLen : minLen;
//                     }
//                 }
//             }
//         }
//         minLen = minLen >= 0 ? minLen : 0;
//         return minLen;
//     }
// };
var minSubArrayLen = function (s, nums) {
    let numsLen = nums.length, minLen = Infinity;
    if (numsLen) {
        let start = 0, end = 0, curSum = 0;
        while (start < numsLen && end < numsLen) {
            while (curSum < s && end < numsLen) {
                curSum += nums[end++];
            }
            while (curSum >= s && end >= start) {
                minLen = Math.min(end - start, minLen);
                curSum -= nums[start++];
            }
        }
    }
    if (minLen === Infinity) {
        return 0;
    }
    else {
        return minLen;
    }
}

var nums = [2, 3, 1, 2, 4, 3], s = 7;
console.info(minSubArrayLen(s, nums));