/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    const map = {}, arr = [], ans = [];
    for (let num of nums) {
        if (!map[num]) {
            map[num] = 0;
        }
        map[num]++;
    }
    for (let key in map) {
        arr.push({ num: key, count: map[key] });
    }
    arr.sort((objA, objB) => {
        return objB.count - objA.count;
    });
    console.log(arr);
    for (let i = 0; i < k; i++) {
        ans.push(parseInt(arr[i].num, 10));
    }
    return ans;
};

// var nums = [1,1,1,2,2,3], k = 2; // [1,2]
var nums = [6,0,1,4,9,7,-3,1,-4,-8,4,-7,-3,3,2,-3,9,5,-4,0], k = 6; // [-3,-4,4,0,1,9]
console.log(topKFrequent(nums, k));