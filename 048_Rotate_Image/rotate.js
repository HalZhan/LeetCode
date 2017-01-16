/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
    let DIM = matrix.length;
    for (let i = 0; i < DIM; i++) {
        for (let j = i; j < DIM; j++) {
            let tmp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = tmp;
        }
    }
    for (let i = 0; i < DIM; i++) {
        matrix[i].reverse();
    }
};

var matrix = [
    [0, 1, 0],
    [0, 2, 1],
    [1, 0, 1]
];
rotate(matrix);
console.log(matrix);