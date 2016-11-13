/**
 * @constructor
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
    matrix = matrix || [];
    this.matrix = matrix;
    this.rowNum = matrix.length;
    this.colNum = (matrix[0] || []).length;
    this.sumMatrix = [];
    for(var i=0;i<=this.rowNum;i++) {
        this.sumMatrix.push([]);
        for(var j=0;j<=this.colNum;j++) {
            this.sumMatrix[i].push(0);
        }
    }
    // initialize row[0]
    for(var j=1;j<=this.colNum;j++) {
        this.sumMatrix[1][j] = this.matrix[0][j-1] + this.sumMatrix[0][j-1];
    }
    // initialize col[0]
    for(var i=1;i<=this.rowNum;i++) {
        this.sumMatrix[i][1] = this.matrix[i-1][0] + this.sumMatrix[i-1][0];
    }
    for(var i=1;i<=this.rowNum;i++) {
        for(var j=1;j<=this.colNum;j++) {
            this.sumMatrix[i][j] = this.sumMatrix[i-1][j] + this.sumMatrix[i][j-1] - this.sumMatrix[i-1][j-1] + this.matrix[i-1][j-1];
        }
    }
    // console.log(this.sumMatrix);
    return this;
};

/**
 * @param {number} row1
 * @param {number} col1
 * @param {number} row2
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
    var ans = 0;
    var matrix = this.matrix || [];
    var rowNum = this.rowNum;
    var colNum = this.colNum;
    var sumMatrix = this.sumMatrix || [];
    row2++;
    col2++;
    row2 = row2<=rowNum ? row2 : rowNum;
    col2 = col2<=colNum ? col2 : colNum;
    if(rowNum && colNum && row1 < row2 && col1 < col2) {
        ans = sumMatrix[row2][col2] - sumMatrix[row1][col2] - sumMatrix[row2][col1] + sumMatrix[row1][col1];
    }
    return ans;
};


/**
 * Your NumMatrix object will be instantiated and called as such:
 * var numMatrix = new NumMatrix(matrix);
 * numMatrix.sumRegion(0, 1, 2, 3);
 * numMatrix.sumRegion(1, 2, 3, 4);
 */

var numMatrix = new NumMatrix([
  [3, 0, 1, 4, 2],
  [5, 6, 3, 2, 1],
  [1, 2, 0, 1, 5],
  [4, 1, 0, 1, 7],
  [1, 0, 3, 0, 5]
]);
console.log(numMatrix.sumRegion(2, 1, 4, 3));
console.log(numMatrix.sumRegion(1, 1, 2, 2));
console.log(numMatrix.sumRegion(1, 2, 2, 4));