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
var toTree = function(arr) {
    if (arr.length) {
        var rootNode = new TreeNode(arr[0]);
        var stack = [rootNode];
        var idx = 1;
        while (stack.length && idx < arr.length) {
            var curNode = stack.pop();
            var num1 = arr[idx];
            idx++;
            var num2 = arr[idx];
            idx++;
            if (isValid(num2)) {
                curNode.right = new TreeNode(num2);
                stack.push(curNode.right);
            }
            if (isValid(num1)) {
                curNode.left = new TreeNode(num1);
                stack.push(curNode.left);
            }
            console.log('curNode: ', curNode);
        }
        return rootNode;
    } else {
        return null;
    }
};
/**
 * @param {TreeNode} root
 * @return {number}
 */
var rob = function(root) {
    // 遍历
    var doSearch = function(node, list) {
        if (node) {
            list.push(node.val);
            var left = node.left;
            var right = node.right;
            if (left && left.left) {
                doSearch(left.left, list);
            }
            if (left && left.right) {
                doSearch(left.right, list);
            }
            if (right && right.left) {
                doSearch(right.left, list);
            }
            if (right && right.right) {
                doSearch(right.right, list);
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
    // 求和比较
    var maxArrsSum = function(rootVal, arrs1, arrs2) {
        var ans = 0;
        rootVal = rootVal || 0;
        for (var j = 0; j < arrs2.length; j++) {
            var tmp = doSum(arrs2[j]);
            for (var i = 0; i < arrs1.length; i++) {
                var tmp2 = doSum(arrs1[i]);
                var tmpSum = tmp + tmp2;
                if (i && j) {
                    tmpSum += rootVal;
                }
                ans = ans >= tmpSum ? ans : tmpSum;
            }
        }
        return ans;
    };
    // 从左右孩子出发
    var rootVal = root ? root.val : 0;
    var leftLists = [
        [],
        [],
        []
    ];
    var rightLists = [
        [],
        [],
        []
    ];
    if (root) {
        // 左孩子开始
        doSearch(root.left, leftLists[0]);
        // 左孙子
        if (root.left) {
            var left2 = root.left.left;
            var leftr = root.left.right;
            if (left2) {
                doSearch(left2, leftLists[1]);
            }
            if (leftr) {
                doSearch(leftr, leftLists[2]);
            }
        }
        // 右孩子开始
        doSearch(root.right, rightLists[0]);
        // 右孙子
        if (root.right) {
            var right2 = root.right.right;
            var rightl = root.right.left;
            if (rightl) {
                doSearch(rightl, rightLists[1]);
            }
            if (right2) {
                doSearch(right2, rightLists[2]);
            }
        }
    }
    return maxArrsSum(rootVal, leftLists, rightLists);
};

// [4,1,null,2,null,3]
// [4,null,3,null,1,2]
var arr = [2, 1, 3, null, 4];
// var arr = [4,null,3,null,1,2]; 
console.log('array: ', arr);
var rootNode = toTree(arr);
console.log(rootNode);
console.log(rob(rootNode));
