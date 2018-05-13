/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
// var uniquePaths = function (m, n) {
//     let count = 0;
//     const search = (x, y) => {
//         if (x < m - 1) {
//             search(x + 1, y);
//         }
//         if (y < n - 1) {
//             search(x, y + 1);
//         }
//         if (x >= m - 1 && y >= n - 1) {
//             count++;
//         }
//     };
//     search(0, 0);
//     return count;
// };
var uniquePaths = function (m, n) {
    let map = [];
    for (let i = 0; i < m; i++) {
        map.push([]);
        for (let j = 0; j < n; j++) {
            map[i].push(1);
            if (i - 1 >= 0 && j - 1 >= 0) {
                map[i][j] = map[i - 1][j] + map[i][j - 1];
            }
            else if (i - 1 >= 0) {
                map[i][j] = map[i - 1][j];
            }
            else if (j - 1 >= 0) {
                map[i][j] = map[i][j - 1];
            }
        }
    }
    if(m && n) {
        return map[m - 1][n - 1];
    }
    else {
        return 0;
    }
}

let args = [7, 3];
// let args = [23, 12];
console.log(`Arguments are ${args}, result is ${uniquePaths.apply(undefined, args)}.`);