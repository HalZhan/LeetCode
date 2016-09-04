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
    // tree to array
    var dealTree = function(rootNode) {
        var arr = [];
        if(rootNode) {
            var que = [rootNode];
            var no = 0;
            while(que.length) {
                var curNode = que.pop();
                curNode['no'] = no++;
                arr.push(curNode);
                if(curNode.left) {
                    que.unshift(curNode.left);
                } 
                if(curNode.right) {
                    que.unshift(curNode.right);
                }
            }
        }
        return arr;
    };
    // judge link
    var isLinked = function(houses, stolenNos, curNo) {
        var isLinked = false;
        var curNode = houses[curNo];
        var totalSize = houses.length;
        for(var i=0;i<totalSize;i++) {
            if(!stolenNos[i]) {
                continue;
            }
            var stolenNo = i;
            var stolenHouse = houses[stolenNo];
            if(stolenHouse.left && stolenHouse.left.no === curNo) {
                isLinked = true;
                break;
            }
            else if(stolenHouse.right && stolenHouse.right.no === curNo) {
                isLinked = true;
                break;
            }
            else if(curNode.left && curNode.left.no === stolenNo) {
                isLinked = true;
                break;
            }
            else if(curNode.right && curNode.right.no === stolenNo) {
                isLinked = true;
                break;
            }
            else if(curNo === stolenNo) {
                isLinked = true;
                break;
            }
        }
        return isLinked;
    };
    // max index of array
    var getMaxIndex = function(arr) {
        var idx = -1;
        var totalSize = arr.length;
        for(var i=0;i<totalSize;i++) {
            if(arr[i]) {
                idx = idx >= i ? idx : i;
            }
        }
        return idx;
    };
    // max value of array
    var getMaxValue = function(arr) {
        var val = -1;
        for(var i=0;i<arr.length;i++) {
            val = val >= arr[i] ? val : arr[i];
        }
        return val;
    };
    // reset array
    var resetArray = function(arr, totalSize, val,startIdx) {
        if(totalSize && startIdx >= 0 && startIdx < totalSize) {
            for(var i=startIdx;i<totalSize;i++) {
                arr[i] = val;
            }
        }
        return arr;
    };
    // slice array
    var sliceArray = function(arr, val) {
        var ret = [];
        if(arr.length) {
            for(var i=0;i<arr.length;i++) {
                ret.push(arr[i]);
                if(arr[i] === val) {
                    break;
                }
            }
        }
        return ret;
    };
    // begin to steal
    var steal = function(houses, stolenNos, curNo, curSum) {
        var totalSize = houses.length;
        if(curNo >= totalSize) {
            return curSum;
        }
        if(isLinked(houses, stolenNos, curNo)) {
            resetArray(stolenNos, totalSize, false, curNo);
        }
        else {
            var curNode = houses[curNo];
            curSum += curNode.val;
            stolenNos[curNo] = true;
        }
        return steal(houses, stolenNos, curNo+1, curSum);
    };
    var houses = dealTree(root);
    var totalSize = houses.length;
    var maxSum = 0;
    for(var i=0;i<totalSize;i++) {
        var stolenNos = resetArray([], totalSize, false, 0);
        var curSum = steal(houses, stolenNos, i, 0);
        maxSum = maxSum >= curSum ? maxSum : curSum;
    }
    return maxSum;
};

var arr = [4,1,null,2,null,3]
// var arr = [4,null,3,null,1,2]
// var arr = [2, 1, 3, null, 4];
// var arr = [4,null,3,null,1,2]; 
// var arr = [41,37,44,24,39,42,48,1,35,38,40,null,43,46,49,0,2,30,36,null,null,null,null,null,null,45,47,null,null,null,null,null,4,29,32,null,null,null,null,null,null,3,9,26,null,31,34,null,null,7,11,25,27,null,null,33,null,6,8,10,16,null,null,null,28,null,null,5,null,null,null,null,null,15,19,null,null,null,null,12,null,18,20,null,13,17,null,null,22,null,14,null,null,21,23];
console.log('array: ', arr);
var rootNode = toTree(arr);
console.log(rootNode);
console.log(rob(rootNode));
