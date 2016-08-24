/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    var len = nums.length;
    if(len <= 2) {
        return nums;
    }
    var flags = {};
    var i=0;
    for(i=0;i<len;i++) {
        var curNum = nums[i];
        var curCount = flags[curNum] || 0;
        curCount++;
        flags[curNum] = curCount;
    }
    var res = [];
    for(var k in flags) {
        if(flags[k] === 1) {
            res.push(parseInt(k, 10));
        }
        if(res.length === 2) {
            return res;
        }
    }
};

var nums = [1,2,1,3,2,5];
console.log(singleNumber(nums));