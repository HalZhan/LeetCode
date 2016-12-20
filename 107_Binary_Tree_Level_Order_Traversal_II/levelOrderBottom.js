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
            // console.log('curNode: ', curNode);
        }
        return rootNode;
    } else {
        return null;
    }
};
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    let stack = [], list = [], result = [];
    if(root) {
        stack.push(root);
        while(stack.length) {
            while(stack.length) {
                list.push(stack.pop());
            }
            let arr = [];
            while(list.length) {
                let elem = list.pop();
                arr.push(elem.val);
                if(elem.left) {
                    stack.push(elem.left);
                }
                if(elem.right) {
                    stack.push(elem.right);
                }
            }
            result.unshift(arr);
        }
    }
    return result;
};

let nums = [3,9,20,null,null,15,7];

console.info('levelOrderBottom: ', levelOrderBottom(toTree(nums)));