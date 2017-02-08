/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    const find = function (nums, start, end, target) {
        let mid = parseInt((start + end) / 2, 10);
        if (nums[mid] === target) {
            return mid;
        }
        else if (mid > start || mid < end) {
            if (nums[mid] < target) {
                return find(nums, mid + 1, end, target);
            }
            else if (nums[mid] > target) {
                return find(nums, start, mid - 1, target);
            }
        }
        else {
            return -1;
        }
    };
    let idx = find(nums, 0, nums.length - 1, target);
    if (idx >= 0) {
        let res = [idx, idx];
        for (let left = idx - 1; left >= 0; left--) {
            if (nums[left] === nums[idx]) {
                res[0]--;
            }
            else {
                break;
            }
        }
        for (let right = idx + 1; right < nums.length; right++) {
            if (nums[right] === nums[idx]) {
                res[1]++;
            }
            else {
                break;
            }
        }
        return res;
    }
    else {
        return [-1, -1];
    }
};

// var nums = [5, 7, 7, 8, 8, 10], target = 8;
var nums = [2, 2], target = 3;
console.log(searchRange(nums, target));