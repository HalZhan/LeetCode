class Solution {
public:
    bool increasingTriplet(vector<int>& nums) {
        int len = nums.size();
        if(len < 3) {
        	return false;
        }
        int idxArr[] = {-1, 0, -1};
        for(int i=0;i<len;i++) {
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
    }
};