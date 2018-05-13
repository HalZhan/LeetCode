/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function (matrix) {
    let row = matrix.length, col = row ? matrix[0].length : 0, result = 0, visited = [], cache = [];
    const DIRS = [
        [0, -1], // 上
        [0, 1], // 下
        [-1, 0], // 左
        [1, 0] // 右
    ];
    if (row && col) {
        const init = function (row, col, value = 0) {
            let array = [];
            if (row && col) {
                for (let i = 0; i < row; i++) {
                    array.push([]);
                    for (let j = 0; j < col; j++) {
                        array[i].push(value);
                    }
                }
            }
            return array;
        }
        cache = init(row, col, 0);
        const search = function (x, y, visited) {
            let maxMove = 1;
            for (let dir of DIRS) {
                const nextX = x + dir[0],
                    nextY = y + dir[1];
                // console.log('nextX: ', nextX, ' nextY: ', nextY, ' visited:', visited);
                if (nextX >= 0 && nextX < row && nextY >= 0 && nextY < col && !visited[nextX][nextY] && matrix[nextX][nextY] > matrix[x][y]) {
                    visited[nextX][nextY] = 1;
                    let tmp = cache[nextX][nextY] ? cache[nextX][nextY] : search(nextX, nextY, visited);
                    maxMove = Math.max(maxMove, 1 + tmp);
                    visited[nextX][nextY] = 0;
                }
            }
            cache[x][y] = maxMove;
            return maxMove;
        }
        
        const reset = function (map, value = 0) {
            let row = Array.isArray(map) ? map.length : 0,
                col = row ? map[0].length : 0;
            if (typeof value === 'number') {
                for (let i = 0; i < row; i++) {
                    for (let j = 0; j < col; j++) {
                        map[i][j] = value;
                    }
                }
            }
            return map;
        }
        visited = init(row, col, 0);
        // console.log(visited);
        for (i = 0; i < row; i++) {
            for (j = 0; j < col; j++) {
                let tmp = cache[i][j] ? cache[i][j] : search(i, j, reset(visited, 0));
                result = Math.max(result, tmp);
            }
        }
    }
    return result;
};

var
    // nums = [
    //     [9, 9, 4],
    //     [6, 6, 8],
    //     [2, 1, 1]
    // ];
// nums = [
//     [3, 4, 5],
//     [3, 2, 6],
//     [2, 2, 1]
// ]
nums = [[0,1,2,3,4,5,6,7,8,9],[19,18,17,16,15,14,13,12,11,10],[20,21,22,23,24,25,26,27,28,29],[39,38,37,36,35,34,33,32,31,30],[40,41,42,43,44,45,46,47,48,49],[59,58,57,56,55,54,53,52,51,50],[60,61,62,63,64,65,66,67,68,69],[79,78,77,76,75,74,73,72,71,70],[80,81,82,83,84,85,86,87,88,89],[99,98,97,96,95,94,93,92,91,90],[100,101,102,103,104,105,106,107,108,109],[119,118,117,116,115,114,113,112,111,110],[120,121,122,123,124,125,126,127,128,129],[139,138,137,136,135,134,133,132,131,130],[0,0,0,0,0,0,0,0,0,0]]
console.log(`Matrix is ${nums}, and result is ${longestIncreasingPath.call(undefined, nums)}.`);