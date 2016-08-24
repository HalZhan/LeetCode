#include<iostream>
#include<vector>

using namespace std;

class Solution {
public:
    vector<int> singleNumber(vector<int>& nums) {
        int len = nums.size();
        int num0 = nums[0];
        int num1 = nums[1];
        if(len <= 2) {
            return nums;
        }
        for(int i=0;i<len;i++) {
            if(num0 == nums[i] && i!=0) {
                num0 = nums[i++];
            }
        }
        for(int i=0;i<len;i++) {
            if((num1 == nums[i] || num1 != num0) && i!=1) {
                num1 = nums[i++];
            }
        }
        vector<int> res;
        res.push_back(num0);
        res.push_back(num1);
        return res;
    }
};

int main() {
    Solution solution;
    int nums[] = {0,0,1,2};
    vector<int> numsVec(&nums[0], &nums[3]);
    vector<int> resVec = solution.singleNumber(numsVec);
    cout << numsVec << endl;
    return 0;
}
