/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
const pacificAtlantic = function (matrix) {
    const resetMap = function resetMap(map, row, col, defaultVal = 0) {
        if (Array.isArray(map)) {
            if (map.length < 1) {
                for (let i = 0; i < row; i++) {
                    map.push([]);
                    for (let j = 0; j < col; j++) {
                        map[i].push(defaultVal);
                    }
                }
            }
            for (let i = 0; i < row; i++) {
                for (let j = 0; j < col; j++) {
                    map[i][j] = defaultVal;
                }
            }
        }
        return map;
    }

    const
        M = matrix.length,
        N = (matrix[0] && matrix[0].length) || 0,
        DIRS = [
            [-1, 0],
            [0, 1],
            [1, 0],
            [0, -1]
        ],
        toPacificCache = [],
        toAtlanticCache = [],
        result = [];

    resetMap(toPacificCache, M, N, null);
    resetMap(toAtlanticCache, M, N, null);

    const canFlow = function canFlow(i, j, nextI, nextJ) {
        if (i > -1 && i < M && j > -1 && j < N &&
            nextI > -1 && nextI < M && nextJ > -1 && nextJ < N &&
            (i != nextI || j != nextJ)) {
            const cur = matrix[i][j], next = matrix[nextI][nextJ];
            return next <= cur;
        }
        return false;
    }

    const toSea = function toSea(visited, i, j) {
        if (i > -1 && j > -1 && i < M && j < N) {
            if (visited[i][j]) {
                return;
            }
            visited[i][j] = true;
            for (let dir of DIRS) {
                const nextI = i + dir[0], nextJ = j + dir[1];
                if (canFlow(nextI, nextJ, i, j)) {
                    toSea(visited, nextI, nextJ);
                }
            }
        }
    }

    for (let j = 0; j < N; j++) {
        toSea(toPacificCache, 0, j);
        toSea(toAtlanticCache, M - 1, j);
    }

    for (let i = 0; i < M; i++) {
        toSea(toPacificCache, i, 0);
        toSea(toAtlanticCache, i, N - 1);
    }

    for (let i = 0; i < M; i++) {
        for (let j = 0; j < N; j++) {
            if (toPacificCache[i][j] && toAtlanticCache[i][j]) {
                result.push([i, j]);
            }
        }
    }

    return result;
};

// const pacificAtlantic = function (matrix) {
//     const res = [];
//     // console.log(matrix);
//     if (matrix.length == 0) {
//         return res
//     }
//     const sea = matrix;
//     const cols = matrix[0].length, rows = matrix.length;
//     const PacWay = Array(matrix.length).fill(null).map(r => Array(matrix[0].length).fill(false));
//     const AltWay = Array(matrix.length).fill(null).map(r => Array(matrix[0].length).fill(false));

//     const dfs = function dfs(r, c, grid) {
//         // console.log(r, c);
//         if (grid[r][c]) {
//             return;
//         }
//         grid[r][c] = true;

//         let dir = [[r - 1, c], [r + 1, c], [r, c - 1], [r, c + 1]];
//         for (let d of dir) {
//             if (d[0] >= 0 && d[0] < rows && d[1] >= 0 && d[1] < cols && sea[r][c] <= sea[d[0]][d[1]]) {
//                 dfs(d[0], d[1], grid);
//             }
//         }
//     }

//     for (let c = 0; c < matrix[0].length; c++) {
//         dfs(0, c, PacWay);
//         dfs(rows - 1, c, AltWay);
//     }

//     for (let r = 0; r < matrix.length; r++) {
//         dfs(r, 0, PacWay);
//         dfs(r, cols - 1, AltWay);
//     }

//     for (let i = 0; i < rows; i++) {
//         for (let j = 0; j < cols; j++) {
//             if (PacWay[i][j] && AltWay[i][j]) {
//                 res.push([i, j]);
//             }
//         }
//     }

//     return res;
// }

const matrix =
    // [[1, 2, 2, 3, 5], [3, 2, 3, 4, 4], [2, 4, 5, 3, 1], [6, 7, 1, 4, 5], [5, 1, 1, 2, 4]];
    // => [[0, 4], [1, 3], [1, 4], [2, 2], [3, 0], [3, 1], [4, 0]]
    // []
    // [[]]
    [[1, 2, 3], [8, 9, 4], [7, 6, 5]]
// [[10,10,1,11,2,15,17,6,17,10,0,10,18,9,16,13,8,9,12,6,3,2,5,19,4,14],[12,19,13,2,7,2,3,8,17,4,2,1,8,13,7,2,10,16,12,3,4,12,4,16,0,12],[1,12,9,18,12,16,17,5,13,0,7,13,12,13,6,2,11,19,7,2,6,11,11,0,17,6],[1,12,2,0,11,7,7,3,7,13,11,1,11,15,5,13,14,12,4,10,5,16,3,17,18,12],[9,16,11,5,9,13,7,18,18,14,19,10,9,4,8,14,4,19,13,1,14,8,0,3,12,10],[10,19,9,11,1,18,1,2,1,8,1,5,2,15,14,13,18,18,11,4,15,3,15,12,12,2],[0,10,9,2,15,9,12,7,0,0,12,18,9,12,18,4,18,10,3,1,17,14,13,18,9,4],[3,19,9,16,16,19,11,19,6,9,18,0,12,11,13,1,15,6,9,18,9,6,3,12,12,2],[0,16,15,12,3,19,18,9,5,1,4,3,19,15,1,0,7,10,14,4,8,10,15,16,14,8],[15,9,3,15,19,17,17,10,9,8,16,11,3,15,15,9,1,14,11,13,16,7,1,7,13,5],[9,19,6,7,19,14,4,18,6,10,19,13,12,7,7,15,6,10,7,8,8,8,19,13,17,14],[14,7,1,15,2,6,12,4,2,19,17,17,8,9,19,10,0,12,4,12,4,16,15,18,8,0],[4,8,5,8,0,2,19,18,1,7,13,9,13,16,6,15,15,12,18,5,8,11,6,17,5,11],[17,16,9,19,12,6,13,19,0,6,7,9,7,13,9,18,5,15,16,8,18,9,6,0,11,14],[11,5,13,3,12,19,5,15,2,15,9,16,6,12,8,0,19,19,11,0,16,8,15,15,1,12],[15,16,16,19,14,1,2,11,14,8,16,13,2,0,3,8,1,5,4,15,12,5,13,3,5,3]]
// => [[0,25],[15,0],[15,1],[15,2],[15,3]]

console.log(`Result : ${JSON.stringify(pacificAtlantic(matrix))}`);