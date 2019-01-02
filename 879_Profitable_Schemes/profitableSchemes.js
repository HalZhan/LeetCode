/**
 * @param {number} G
 * @param {number} P
 * @param {number[]} group
 * @param {number[]} profit
 * @return {number}
 * 
NOTE:
- `1 <= G <= 100`
- `0 <= P <= 100`
- `1 <= group[i] <= 100`
- `0 <= profit[i] <= 100`
- `1 <= group.length = profit.length <= 100`
 */
// const profitableSchemes = function (G, P, group, profit) {
//     const length = group.length;
//     let count = 0;

//     const doSearch = function (G, P, sIdx, included) {
//         sIdx = sIdx || 0;
//         included = included || false;
//         if (G >= 0 && P <= 0 && included) {
//             count++;
//         }
//         if (G <= 0 || sIdx >= length) {
//             return 0;
//         }
//         else {
//             doSearch(G, P, sIdx + 1, false);
//             doSearch(G - group[sIdx], P - profit[sIdx], sIdx + 1, true);
//         }
//     }
//     doSearch(G, P);
//     return count;
// };

const profitableSchemes = function (G, P, group, profit) {
    const length = group.length, MOD = 1e9 + 7, cache = [];

    for (let i = 0; i < length; i++) {
        cache.push([]);
        for (let g = 0; g <= G; g++) {
            cache[i].push([]);
            for (let p = 0; p <= P; p++) {
                cache[i][g].push(null);
            }
        }
    }

    const dfs = function (idx, G, P) {
        if (idx >= length) {
            return 0;
        }
        const actP = Math.max(P, 0);
        if (cache[idx][G][actP] != null) {
            return cache[idx][G][actP];
        }
        let count = 0;
        if (G >= group[idx]) {
            if (P - profit[idx] <= 0) {
                count++;
            }
            count += dfs(idx + 1, G - group[idx], P - profit[idx]);
            count %= MOD;
        }
        count += dfs(idx + 1, G, P);
        count %= MOD;
        cache[idx][G][actP] = count;
        return count;
    }

    return dfs(0, G, P);

};

const
    // G = 5, P = 3, group = [2,2], profit = [2,3]; // 2
    // G = 10, P = 5, group = [2, 3, 5], profit = [6, 7, 8]; // 7
    // G = 1, P = 1, group = [1, 1, 1, 1, 2, 2, 1, 2, 1, 1], profit = [0, 1, 0, 0, 1, 1, 1, 0, 2, 2]; // 4
// G = 10, P = 1, group = [7, 1, 9, 1, 9], profit = [1, 2, 2, 1, 0] // 12
G = 100, P = 10, group = [66, 24, 53, 49, 86, 37, 4, 70, 99, 68, 14, 91, 70, 71, 70, 98, 48, 26, 13, 86, 4, 82, 1, 7, 51, 37, 27, 87, 2, 65, 93, 66, 99, 28, 17, 93, 83, 91, 45, 3, 59, 87, 92, 62, 77, 21, 9, 37, 11, 4, 69, 46, 70, 47, 28, 40, 74, 47, 12, 3, 85, 16, 91, 100, 39, 24, 52, 50, 40, 23, 64, 22, 2, 15, 18, 62, 26, 76, 3, 60, 64, 34, 45, 40, 49, 11, 5, 8, 40, 71, 12, 60, 3, 51, 31, 5, 42, 52, 15, 36], profit = [8, 4, 8, 8, 9, 3, 1, 6, 7, 10, 1, 10, 4, 9, 7, 11, 5, 1, 7, 4, 11, 1, 5, 9, 9, 5, 1, 10, 0, 10, 4, 1, 1, 1, 6, 9, 3, 6, 2, 5, 4, 7, 8, 5, 2, 3, 0, 6, 4, 5, 9, 9, 10, 7, 1, 8, 9, 6, 0, 2, 9, 2, 2, 8, 6, 10, 3, 4, 6, 1, 10, 7, 5, 4, 8, 1, 8, 5, 5, 4, 1, 1, 10, 0, 8, 0, 1, 11, 5, 4, 7, 9, 1, 11, 1, 0, 1, 6, 8, 3];
// => 188883405
const beginTime = new Date().getTime();
const result = profitableSchemes(G, P, group, profit);
const endTime = new Date().getTime();
console.log(`Result is ${result}, ${(endTime - beginTime) / 1000} s.`);