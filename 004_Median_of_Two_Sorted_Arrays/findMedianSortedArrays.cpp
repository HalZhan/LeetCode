#include<iostream>
#include<vector>
#include<cmath>

using namespace std;

class Solution {
public:
    double calcMedian(vector<int>& nums) {
        double ans = 0;
        int len = nums.size();
        if(len) {
            if(len%2) {
                ans = double(nums[int(len/2)]);
            }
            else {
                ans = double((nums[len/2-1]+nums[len/2])/2);
            }
        }
        return ans;
    }
    double findMedianSortedArrays(vector<int>& nums1, vector<int>& nums2) {
        int len1 = nums1.size();
        int len2 = nums2.size();
        int totalLen = len1 + len2;
        int midIdx = int(totalLen / 2);
        bool isEven = totalLen%2 ? true:false;
        bool inFirst = true;
        vector<int> arr;
        if(isEven) {
            arr.assign(2, 0);
        }
        else {
            arr.assign(1, 0);
        }
        int i=0, j=0;
        while(i<len1 || j<len2) {
            if(i+j == midIdx) {
                break;
            }
            else {
                if(nums1[i] <= nums2[j]) {
                    i++;
                }
                else {
                    j++;
                    inFirst = false;
                }
            }
        }
        if(inFirst) {
            if(isEven) {
                if(i) {

                }
            }
            else {
                return nums1[i];
            }
        }
        else {
            if(isEven) {

            }
            else {
                return nums2[j];
            }
        }
    }
};
