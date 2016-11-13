#include<iostream>
#include<vector>

using namespace std;

class Solution {
public:
    bool canJump(vector<int>& nums) {
        int numsLen = nums.size();
        if(numsLen <= 1) {
            return true;
        }
        if(nums[0] == 0) {
            return false;
        }
        vector<int> zeroIdxVec;
        for(int i=0;i<numsLen;i++) {
            if(nums[i] == 0) {
                zeroIdxVec.push_back(i);
            }
        }
        int zLen = zeroIdxVec.size();
        if(!zLen) {
            return true;
        }
        int start_idx =0, end_idx = 0;
        for(int i=0;i<zLen;i++) {
            end_idx = zeroIdxVec[i] - 1;
            if(end_idx < start_idx) {
                return false;
            }
            for(int j=start_idx;j<=end_idx;j++) {
                if(nums[j] + j >= numsLen - 1) {
                    return true;
                }
                else if(nums[j] + j > end_idx + 1) {
                    int iNext = i;
                    int jumpIdx = nums[j] + j;
                    for(int k=i+1;k<zLen;k++) {
                        if(zeroIdxVec[k] < jumpIdx) {
                            iNext = zeroIdxVec[k];
                        }
                        else {
                            break;
                        }
                    }
                    i = iNext;
                    break;
                }
                if(j == end_idx) {
                    if(nums[j] <= 1) {
                        return false;
                    }
                }
            }
            start_idx = zeroIdxVec[i] + 1 ;
        }
        return true;
    }
};
