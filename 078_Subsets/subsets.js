/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    var ans = [];
    var numsLen = nums.length;
    var ansLen = Math.pow(2, numsLen);
    // generate bitmap
    var genBitMap = function(arrLen, idx, rowBits, bitMap) {
        if(idx >= arrLen) {
            bitMap.push(rowBits.slice(0));
        }
        else {
            rowBits.push(0);
            genBitMap(arrLen, idx+1, rowBits, bitMap);
            rowBits.pop();
            rowBits.push(1);
            genBitMap(arrLen, idx+1, rowBits, bitMap);
            rowBits.pop();
        }
    };
    // parse bitmap
    var parseBitmap = function(arr, rowBits) {
        var set = [];
        for(var i=0;i<rowBits.length;i++) {
            if(rowBits[i]) {
                set.push(arr[i]);
            }
        }
        return set;
    };
    var bitMap = [], rowBits = [];
    genBitMap(numsLen, 0, rowBits, bitMap);
    for(var i=0;i<bitMap.length;i++) {
        var set = parseBitmap(nums, bitMap[i]);
        ans.push(set);
    }
    return ans;
};

var nums = [1,2,3]; 
/* [
  [3],
  [1],
  [2],
  [1,2,3],
  [1,3],
  [2,3],
  [1,2],
  []
]
*/
console.info(subsets(nums));