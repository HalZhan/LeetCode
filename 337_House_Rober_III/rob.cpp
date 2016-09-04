#include <iostream>
#include <algorithm>
#include <cstdio>
#include <vector>

using namespace std;

/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode(int x) : val(x), left(NULL), right(NULL) {}
 * };
 */

struct TreeNode {
	int val;
	TreeNode *left;
	TreeNode *right;
	TreeNode(int x) : val(x), left(NULL), right(NULL) {}
};

class Solution {
public:
	int rob(TreeNode* root) {
		
	}
private:
	// tree to vector
	vector<TreeNode *> dealTree(TreeNode* root) {
		vector<TreeNode *> nodeVec;
		vector<TreeNode *> que;
		if (root) {
			que.push_back(root);
			while (que.size()) {
				TreeNode *curNode = que.back();
				que.pop_back();
				nodeVec.push_back(curNode);
				if (curNode->left) {
					que.insert(que.begin(), curNode->left);
				}
				if (curNode->right) {
					que.insert(que.begin(), curNode->right);
				}
			}
		}
		return nodeVec;
	}
	// judge if linked
	bool isLinked(vector<TreeNode*> houses, int *stolenNos, int curNo) {
		bool linked = false;
		TreeNode* curNode = houses[curNo];
		int totalSize = houses.size();
		for (int i = 0; i < totalSize; i++) {
			if (!stolenNos[i]) {
				continue;
			}
			int stolenNo = i;
			TreeNode* stolenHouse = houses[stolenNo];
			if (stolenHouse->left && stolenHouse->left == curNode) {
				linked = true;
				break;
			}
			else if (stolenHouse->right && stolenHouse->right == curNode) {
				linked = true;
				break;
			}
			else if (curNode->left && curNode->right == stolenHouse) {
				linked = true;
				break;
			}
			else if (curNode->right && curNode->right == stolenHouse) {
				linked = true;
				break;
			}
			else if (curNo == stolenNo) {
				linked = true;
				break;
			}
		}
		return linked;
	}
	// max index of array
	int getMaxIndex(int *stolenNos, int totalSize) {
		int idx = -1;
		for (int i = 0; i < totalSize; i++) {
			if (stolenNos[i]) {
				idx = idx >= i ? idx : i;
			}
		}
		return idx;
	}
	// reset array with given value
	void resetArray(int *arr, int totalSize, int value, int startIdx) {
		if (totalSize && startIdx >= 0 && startIdx < totalSize) {
			for (int i = startIdx; i < totalSize; i++) {
				arr[i] = value;
			}
		}
		return;
	}
	// steal
	int steal(vector<TreeNode *> houses, int *stolenNos, int curNo, int curSum) {
		int totalSize = houses.size();
		if (curNo >= totalSize || isLinked(houses)) {
			return curSum;
		}
		TreeNode *curNode = houses[curNo];
		curSum += curNode->val;
		stolenNos[curNo] = 1;
		// call self
		int tmpSum = curSum;
		int beginNo = getMaxIndex(stolenNos, totalSize) + 1;
		while (beginNo < totalSize) {
			int tmp = steal(houses, stolenNos, beginNo, tmpSum);
			curSum = curSum >= tmp ? curSum : tmp;
			resetArray(stolenNos, totalSize, 0, beginNo);
			beginNo++;
		}
	}
};