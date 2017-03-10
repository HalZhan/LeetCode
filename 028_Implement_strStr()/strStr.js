/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    const getNext = function (b) {
        const len = b.length;
        let j = 0;

        const next = [0, 0];//next表示长度为i的字符串前缀和后缀的最长公共部分，从1开始  
        for (let i = 1; i < len; i++)//i表示字符串的下标，从0开始  
        {//j在每次循环开始都表示next[i]的值，同时也表示需要比较的下一个位置  
            while (j > 0 && b.charAt(i) != b.charAt(j)) j = next[j];
            if (b.charAt(i) == b.charAt(j)) j++;
            next[i + 1] = j;
        }
        return next;
    };

    const search = function (original, find, next) {
        let j = 0;
        for (let i = 0; i < original.length; i++) {
            while (j > 0 && original.charAt(i) != find.charAt(j)) {
                j = next[j];
            }
            if (original.charAt(i) == find.charAt(j)) {
                j++;
            }
            if (j == find.length) {
                // j = next[j];
                return i - j + 1;
            }
        }
        return -1;
    };
    if (needle) {
        const next = getNext(needle);
        return search(haystack, needle, next);
    }
    else {
        return 0;
    }
};

var haystack = 'aaccddee', needle = 'aacc';
console.log(strStr(haystack, needle));