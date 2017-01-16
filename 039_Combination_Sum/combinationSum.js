/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    const TOTAL_SIZE = candidates.length;
    const result = [];
    const search = function (start, target, tmpArr) {
        if (target === 0) {
            result.push(tmpArr.slice());
            return;
        }
        else if (target > 0) {
            while (start < TOTAL_SIZE) {
                tmpArr.push(candidates[start]);
                search(start, target - candidates[start], tmpArr);
                tmpArr.pop();
                start++;
            }
        }
    };
    if (TOTAL_SIZE) {
        search(0, target, []);
    }
    return result;
};

var candidates = [2, 3, 6, 7], target = 7;
console.log(combinationSum(candidates, target));