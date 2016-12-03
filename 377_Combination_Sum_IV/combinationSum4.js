/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function(nums, target) {
    var len = nums.length;
    var count = 0;
    if(len === 0) {
        return count;
    }
    if(len === 1) {
        if(nums[0] === target) {
            return 1;
        }
        else {
            return 0;
        }
    }
    nums.sort(function(a, b) {
        return a - b;
    });
    var search = function(arr, idx, tar) {
        if(idx < len) {
            if(arr[idx] === tar) {
                return 1;
            }
            else if(arr[idx] < tar) {
                var count0 = search(arr, 0, tar-arr[idx]);
                var count1 = search(arr, idx+1, tar);
                return count0 + count1;
            }
            else if(arr[idx] > tar) {
                return 0;
            }
        }
        return 0;
    }
    for(var i=0;i<len;i++) {
        if(nums[i] === target) {
            count += 1;
        }
        else if(nums[i] < target) {
            count += search(nums, 0, target-nums[i]);
        }
        else {
            break;
        }
    }
    return count;
};

// var nums = [1, 2, 3] ,target = 4; // 7
// var nums = [3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25], target = 10; //9
var nums = [1,2,3], target = 32;
console.log(combinationSum4(nums, target));