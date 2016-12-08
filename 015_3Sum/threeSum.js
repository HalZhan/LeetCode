/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    var doSum = function (arr) {
        var ans = -Infinity;
        if(arr.length) {
            ans = 0;
            for (var i = 0; i < arr.length; i++) {
                if(arr[i]) {
                    ans += arr[i];
                }
            }
        }
        return ans;
    }
    var parseBits = function(nums, bits) {
        var arr = [];
        for(var i=0;i<bits.length;i++) {
            if(bits[i]) {
                arr.push(nums[i]);
            }
        }
        // console.log(arr);
        return arr;
    }
    var isRepeated = function(arr1, arr2, size) {
        var map1 = {}, keyLen1 = 0, map2 = {}, keyLen2 = 0;
        for(var i=0;i<arr1.length;i++) {
            map1[arr1[i]] = 1;
        }
        for(var i=0;i<arr2.length;i++) {
            map2[arr2[i]] = 1;
        }
        for(var k in map1) {
            keyLen1++;
        }
        for(var k in map2) {
            keyLen2++;
        }
        if(keyLen1 === keyLen2) {
            for(var k in map1) {
                if(!map2[k]) {
                    return false;
                }
            }
            return true;
        }
        else {
            return false;
        }
    }
    var filter = function(nums, bitMap) {
        var arrs = [];
        var tmpArrs = [];
        // console.log('--bit map--: ', bitMap);
        for(var i=0;i<bitMap.length;i++) {
            tmpArrs.push(parseBits(nums, bitMap[i]));
        }
        // console.log('--temp arrays--: ', tmpArrs);
        for(var i=0;i<tmpArrs.length;i++) {
            var flag = false;
            for(var j=i+1;j<tmpArrs.length;j++) {
                flag = isRepeated(tmpArrs[i], tmpArrs[j], 3);
                if(flag) {
                    break;
                }
            }
            if(!flag) {
                arrs.push(tmpArrs[i]);
            }
        }
        // console.log('--arrays--: \n', arrs);
        return arrs;
    }
    var countNum = function(arr, num) {
        var counter = 0;
        for(var i=0;i<arr.length;i++) {
            if(arr[i] === num) {
                counter++;
            }
        }
        return counter;
    }
    var search = function (numsLen, startIdx, stack, sets, size) {
        if(countNum(stack, 1) === 3) {
            sets.push(stack.slice(0));
        }
        else {
            if(startIdx < numsLen) {
                stack.push(1);
                search(numsLen, startIdx+1, stack, sets, size);
                stack.pop();
                stack.push(0);
                search(numsLen, startIdx+1, stack, sets, size);
                stack.pop();
            }
        }
    }
    var startIdx = 0, stack = [], sets = [], size = 3;
    search(nums.length, startIdx, stack, sets, size);
    var ansArr = [], arrs = [];
    arrs = filter(nums, sets);
    // console.log(arrs);
    for(var i=0;i<arrs.length;i++) {
        if(doSum(arrs[i]) === 0) {
            ansArr.push(arrs[i]);
        }
    }
    return ansArr;
};
var nums = [-1, 0, 1, 2, -1, -4]; 
/* [
  [-1, 0, 1],
  [-1, -1, 2]
]*/
// var nums = [-13,5,13,12,-2,-11,-1,12,-3,0,-3,-7,-7,-5,-3,-15,-2,14,14,13,6,-11,-11,5,-15,-14,5,-5,-2,0,3,-8,-10,-7,11,-5,-10,-5,-7,-6,2,5,3,2,7,7,3,-10,-2,2,-12,-11,-1,14,10,-9,-15,-8,-7,-9,7,3,-2,5,11,-13,-15,8,-3,-7,-12,7,5,-2,-6,-3,-10,4,2,-5,14,-3,-1,-10,-3,-14,-4,-3,-7,-4,3,8,14,9,-2,10,11,-10,-4,-15,-9,-1,-1,3,4,1,8,1];
// threeSum(nums);
console.log(threeSum(nums));