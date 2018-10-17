/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var minSwap = function (A, B) {
    /**
     * Swap elements between two arrays.
     *
     * @param {*} arrayA
     * @param {*} arrayB
     * @param {*} index
     */
    function swap(arrayA, arrayB, index) {
        let temp = arrayA[index];
        arrayA[index] = arrayB[index];
        arrayB[index] = temp;
    }
    /**
     * Judge And swap
     *
     * @param {Array} arrayA
     * @param {Array} arrayB
     * @param {number} index
     */
    function judgeAndSwap(arrayA, arrayB, index) {
        const length = arrayA.length;
        if (index < length - 1) {
            if (arrayA[index] >= arrayA[index + 1] || arrayB[index] >= arrayB[index + 1]) {
                swap(arrayA, arrayB, index);
                count++;
            }
        }
    }

    let i = -1, count = 0, length = A.length;
    while (i++ < length - 1) {
        judgeAndSwap(A, B, i);
    }
    return count;
};

// const A = [1,3,5,4], B = [1,2,3,7];
const args = [[3, 3, 8, 9, 10],
[1, 7, 4, 6, 8]]

console.log(minSwap.apply(null, args));