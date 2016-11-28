/**
 *  Given a sequence of n integers a1, a2, ..., an, a 132 pattern is a subsequence ai, aj, ak such that i < j < k and ai < ak < aj. Design an algorithm that takes a list of n numbers as input and checks whether there is a 132 pattern in the list.
 *
 *  Note: n will be less than 15,000.
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
// var find132pattern = function (nums) {
//     if (nums.length < 3) {
//         return false;
//     }
//     var len = nums.length;
//     for(var k=len-1;k>=2;k--) {
//         var i=0, j=k-1;
//         for(i=0;i<k-1;i++) {
//             if(nums[i] < nums[k]) {
//                 break;
//             }
//         }
//         for(j=k-1;j>=1;j--) {
//             if(nums[j] > nums[k]) {
//                 break;
//             }
//         }
//         if(i>=0 && j>i && k>j) {
//             return true;
//         }
//     }
//     return false;
// }
var find132pattern = function (nums) {
    if(nums.length < 3) {
        return false;
    }
    var len = nums.length;
}

// test
// var nums = [1, 2, 3, 4];  // false
// var nums = [3, 1, 4, 2];  // true
// var nums = [-1, 3, 2, 0]; // true
// var nums = [1,0,1,-4,-3];    // false
var nums = [-1, 10, -20, -10, -15]; // true
console.log(find132pattern(nums));