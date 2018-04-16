/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function (beginWord, endWord, wordList) {
    let res = 0;
    wordList = wordList.slice();
    if (wordList.indexOf(beginWord) < 0) {
        wordList.unshift(beginWord);
    }
    if (wordList.indexOf(endWord) < 0) {
        // wordList.push(endWord);
        return 0;
    }
    const swap = function (array, i, j) {
        if (array && array.length && i >= 0 && j >= 0 && i < array.length && j < array.length) {
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    };
    const calcDistance = function (wordA = '', wordB = '') {
        let dis = 0;
        if (wordA != wordB && wordA && wordB && wordA.length === wordB.length) {
            dis = 0;
            for (let i = 0; i < wordA.length; i++) {
                if (wordA.charAt(i) != wordB.charAt(i)) {
                    dis++;
                }
            }
        }
        return dis;
    };

    wordList.sort((strA, strB) => {
        return calcDistance(strA, beginWord) > calcDistance(strB, beginWord);
    });
    let dim = wordList.length,
        beginIdx = wordList.indexOf(beginWord),
        endIdx = wordList.indexOf(endWord);
    swap(wordList, 0, beginIdx);
    beginIdx = 0;
    swap(wordList, dim - 1, endIdx);
    endIdx = dim - 1;
    // console.log('word list: ', wordList);
    // console.log('begin index: ', beginIdx);
    // console.log('end index: ', endIdx);
    if (dim && beginIdx < endIdx) {
        let map = [];
        for (let i = 0; i < dim; i++) {
            map.push([]);
            for (let j = 0; j < dim; j++) {
                if (i == j) {
                    map[i].push(Infinity);
                } else {
                    map[i].push(calcDistance(wordList[i], wordList[j]));
                }
            }
        }
        // console.log('map: ', map);
        const search = function (map, beginIdx, endIdx, hasPassed = {}) {
            if (map[beginIdx][endIdx] <= 1) {
                return map[beginIdx][endIdx];
            } else {
                let minDis = Infinity;
                for (let j = 0; j < endIdx; j++) {
                    if (map[beginIdx][j] === 1 && !hasPassed[j]) {
                        hasPassed[j] = 1;
                        minDis = Math.min(minDis, 1 + search(map, j, endIdx, hasPassed));
                        hasPassed[j] = 0;
                    }
                }
                return minDis;
            }
        };
        res = search(map, beginIdx, endIdx, {}) + 1;
        if (!isFinite(res)) {
            res = 0;
        }
    }
    return res;
};

let args = [
    // "hit",
    // "cog", ["hot", "dot", "dog", "lot", "log", "cog"]
    // "hot",
    // "dog", ["hot", "cog", "dog", "tot", "hog", "hop", "pot", "dot"]
    // "hit",
    // "cog", ["hot", "cog", "dot", "dog", "hit", "lot", "log"]
    // "game",
    // "thee", ["frye", "heat", "tree", "thee", "game", "free", "hell", "fame", "faye"]
    "qa",
    "sq", ["si", "go", "se", "cm", "so", "ph", "mt", "db", "mb", "sb", "kr", "ln", "tm", "le", "av", "sm", "ar", "ci", "ca", "br", "ti", "ba", "to", "ra", "fa", "yo", "ow", "sn", "ya", "cr", "po", "fe", "ho", "ma", "re", "or", "rn", "au", "ur", "rh", "sr", "tc", "lt", "lo", "as", "fr", "nb", "yb", "if", "pb", "ge", "th", "pm", "rb", "sh", "co", "ga", "li", "ha", "hz", "no", "bi", "di", "hi", "qa", "pi", "os", "uh", "wm", "an", "me", "mo", "na", "la", "st", "er", "sc", "ne", "mn", "mi", "am", "ex", "pt", "io", "be", "fm", "ta", "tb", "ni", "mr", "pa", "he", "lr", "sq", "ye"]
]
console.log(ladderLength.apply(undefined, args));