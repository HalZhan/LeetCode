/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    var numsLen = nums.length;
    if(numsLen === k || k===0) {
        return;
    }
    while(k > numsLen) {
        k = k - numsLen;
    }
    var arr = [];
    var endIdx = numsLen - k;
    arr = nums.splice(0, endIdx);
    if(arr && arr.length) {
        for(var i=0;i<arr.length;i++) {
            nums.push(arr[i]);
        }
    }
    return;
};

var nums = [1,2,3,4,5,6,7], k = 3;
// var nums = [1], k = 0;
rotate(nums, k);
console.info('Rotate Result', nums);