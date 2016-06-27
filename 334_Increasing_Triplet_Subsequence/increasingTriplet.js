/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
	if(nums.length < 3) {
		return false;
	}
	var idxArr = [-1,0,-1];
	for(var i=1;i<nums.length;i++) {
		if(idxArr[2] >= 0) {
			if(nums[idxArr[2]] < nums[i]) {
				return true;
			}
			else if(nums[idxArr[2]] > nums[i]) {
				if (nums[idxArr[1]] < nums[i]) {
					idxArr[2] = i;
				}
				else if(idxArr[0] < 0) {
					idxArr[0] = i;
				}
				else if(nums[idxArr[0]] > nums[i]) {
					idxArr[0] = i;
				}
				else if(nums[idxArr[0]] < nums[i]) {
					idxArr[1] = idxArr[0];
					idxArr[2] = i;
					idxArr[0] = -1;
				}
			}
		}
		else {
			if(nums[idxArr[1]] > nums[i]) {
				idxArr[1] = i;
			}
			else if(nums[idxArr[1]] < nums[i]) {
				idxArr[2] = i;
			}
		}
	}
	return false;
};

var testNums = [5,1,5,5,2,5,4];
console.log(increasingTriplet(testNums));