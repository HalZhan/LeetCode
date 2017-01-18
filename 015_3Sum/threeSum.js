/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    const findNums = function (nums, target, start, end) {
        const res = [];
        let i = start, j = end;
        while (i < j) {
            let sum = nums[i] + nums[j] + target;
            if (sum === 0) {
                let tmpArr = [target, nums[i], nums[j]];
                res.push(tmpArr.slice());
                i++;
                j--;
                while (i < j && nums[i - 1] === nums[i]) {
                    i++;
                }
                while (i < j && nums[j + 1] === nums[j]) {
                    j--;
                }
            }
            else if (sum < 0) {
                i++;
            }
            else {
                j--;
            }
        }
        return res;
    };
    let totalLen = nums.length;
    const result = [];
    if (totalLen >= 3) {
        nums.sort((a, b) => { return a - b; })
        for (let i = 0; i < totalLen - 2; i++) {
            if (i && nums[i] === nums[i - 1]) {
                continue;
            }
            let numArrs = findNums(nums, nums[i], i + 1, totalLen - 1);
            for (let j = 0; j < numArrs.length; j++) {
                result.push(numArrs[j]);
            }
        }
    }
    return result;
};
// var nums = [-1, 0, 1, 2, -1, -4]; 
/* [
  [-1, 0, 1],
  [-1, -1, 2]
]*/
// var nums = [-13,5,13,12,-2,-11,-1,12,-3,0,-3,-7,-7,-5,-3,-15,-2,14,14,13,6,-11,-11,5,-15,-14,5,-5,-2,0,3,-8,-10,-7,11,-5,-10,-5,-7,-6,2,5,3,2,7,7,3,-10,-2,2,-12,-11,-1,14,10,-9,-15,-8,-7,-9,7,3,-2,5,11,-13,-15,8,-3,-7,-12,7,5,-2,-6,-3,-10,4,2,-5,14,-3,-1,-10,-3,-14,-4,-3,-7,-4,3,8,14,9,-2,10,11,-10,-4,-15,-9,-1,-1,3,4,1,8,1];
// var nums = [-4, -2, -2, -2, 0, 1, 2, 2, 2, 3, 3, 4, 4, 6, 6];
var nums = [-2,0,1,1,2];
console.log(threeSum(nums));