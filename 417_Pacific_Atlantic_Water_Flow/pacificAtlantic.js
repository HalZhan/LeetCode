/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var pacificAtlantic = function (matrix) {

    function resetMap (map, row, col, defaultVal = 0) {
        if(Array.isArray(map)) {
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
        N = matrix[0].length,
        // DIRS = [

        //     [-1, 0],
        //     [1, 0],
        //     [0, -1],
        //     [0, 1]
        // ],
        DIRS = {
            'Pacific': [
                [-1, 0],
                [0, -1]
            ],
            'Atlantic': [
                [0, 1],
                [1, 0]
            ]
        },
        visited = [],
        cache = [],
        result = [];

    resetMap(visited, M, N, 0);
    resetMap(cache, M, N, null);

    /**
     * 
     * @param {number} i 
     * @param {number} j 
     * @param {number} nextI 
     * @param {number} nextJ 
     */
    const canFlow = function (i, j, nextI, nextJ) {
        if (i > -1 && i < M && j > -1 && j < N &&
            nextI > -1 && nextI < M && nextJ > -1 && nextJ < N &&
            (i != nextI || j != nextJ)) {
            const cur = matrix[i][j], next = matrix[nextI][nextJ] || Infinity;
            return next <= cur;
        }
        return false;
    }

    const toPacific = function (i, j) {

    }

    for (let i = 0; i < M; i++) {
        for (let j = 0; j < N; j++) {
            if (cache[i][j]) {
                result.push([i, j]);
            }
        }
    }

    return result;
};

const
    matrix = [[1, 2, 2, 3, 5], [3, 2, 3, 4, 4], [2, 4, 5, 3, 1], [6, 7, 1, 4, 5], [5, 1, 1, 2, 4]];

console.log(`Result is: ${JSON.stringify(pacificAtlantic(matrix))}`);