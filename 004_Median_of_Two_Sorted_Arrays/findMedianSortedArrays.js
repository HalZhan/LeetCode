/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    var nums1Len = nums1.length;
    var nums2Len = nums2.length;
    var nums = [];
    if(nums1.length<=0) {
        nums=nums2;
    }
    else if(nums2.length<=0) {
        nums=nums1;
    }
    else {
        var i=0, j=0;
        while(i<nums1Len && j<nums2Len) {
            if(nums1[i] < nums2[j]) {
                nums.push(nums1[i]);
                i++;
            }
            else if(nums1[i] === nums2[j]) {
                nums.push(nums1[i]);
                nums.push(nums2[j]);
                i++;
                j++;
            }
            else {
                nums.push(nums2[j]);
                j++;
            }
        }
        if(i<nums1Len) {
            for(;i<nums1Len;i++) {
                nums.push(nums1[i]);
            }
        }
        else if(j<nums2Len) {
            for(;j<nums2Len;j++) {
                nums.push(nums2[j]);
            }
        }
    }
    var numsLen = nums.length;
    var mid0 = numsLen/2;
    var isEven = (numsLen%2 === 0);
    if(numsLen > 1) {
        if(isEven) {
            var mid1 = mid0-1;
            return (nums[mid0]+nums[mid1])/2;
        }
        else {
            mid0 = parseInt(mid0, 10);
            return nums[mid0];
        }
    }
    else {
        return nums[0];
    }
};

// var nums1 = [1, 3] ,nums2 = [2];        // 2
var nums1 = [1, 2], nums2 = [3, 4]      // 2.5
// var nums1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22], nums2 = [0,6]; // 10.5
console.log(findMedianSortedArrays(nums1, nums2));