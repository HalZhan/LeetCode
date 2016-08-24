/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
// TreeNode定义
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
};
// 判断是否为有效数
var isValid = function(val) {
    if (val || val === 0) {
        return true;
    }
    return false;
};
// array to tree
var toTree = function(arr, idx, node) {
    if (isValid(arr[idx])) {
        // 左孩子
        var leftIdx = idx * 2 + 1;
        if (isValid(arr[leftIdx])) {
            node.left = new TreeNode(arr[leftIdx]);
            toTree(arr, leftIdx, node.left);
        }
        // 右孩子
        var rightIdx = idx * 2 + 2;
        if (isValid(arr[rightIdx])) {
            node.right = new TreeNode(arr[rightIdx]);
            toTree(arr, rightIdx, node.right);
        }
    }
};
/**
 * @param {TreeNode} root
 * @return {number}
 */
var rob = function(root) {
    // 跳着遍历
    var doSearch = function(node, stack) {
        if (node ) {
            stack.push(node.val);
            var left = node.left;
            var right = node.right;
            if (left && left.left) {
	            var left2 = left.left;
            	var left3 = left2.left;
            	if(left3) {
            		var left4 = left3.left;
            		var left4Val = left4 ? left4.val : 0;
            		var tmp2 = node.val + left.val + left4Val;
            		var tmp3 = node.val + left3.val;
            		console.log('tmp2: ', tmp2, ' tmp3: ', tmp3);
            		if(node.val + left2.val + left4Val >= node.val + left3.val) {
            			doSearch(left2, stack);
            		}
            		else {
            			doSearch(left3, stack);
            		}
            	}
            	else {
	            	doSearch(left2, stack);
            	}
            }
            if (left && left.right) {
                doSearch(left.right, stack);
            }
            if (right && right.left) {
                doSearch(right.left, stack);
            }
            if (right && right.right) {
            	var right2 = right.right;
            	var right3 = right2.right;
            	if(right3) {
            		var right4 = right3.right;
            		var right4Val = right4 ? right4.val : 0;
            		if(node.val + right2.val + right4Val >= node.val + right3.val) {
            			doSearch(right2, stack);
            		}
            		else {
            			doSearch(right3, stack);
            		}
            	}
            	else {
	                doSearch(right2, stack);
            	}
            }
        }
    };
    // 对数组求和
    var doSum = function(arr) {
        var ans = 0;
        for (var i = 0; i < arr.length; i++) {
            ans += arr[i] || 0;
        }
        return ans;
    };
    // 从根节点出发
    var listRoot = [];
    doSearch(root, listRoot);
    // 从左右子节点出发
    var listChildren = [];
    if(root) {
	    doSearch(root.left, listChildren);
	    doSearch(root.right, listChildren);
    }
    return Math.max(doSum(listRoot), doSum(listChildren));
};

var arr = [4,1,null,2,null,3];
var rootNode = new TreeNode(arr[0]);
root = toTree(arr, 0, rootNode);
console.log(rob(rootNode));