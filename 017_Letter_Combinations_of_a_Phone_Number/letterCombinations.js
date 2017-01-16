/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    const charMap = [
        [' '],
        [''],
        ['a', 'b', 'c'],
        ['d', 'e', 'f'],
        ['g', 'h', 'i'],
        ['j', 'k', 'l'],
        ['m', 'n', 'o'],
        ['p', 'q', 'r', 's'],
        ['t', 'u', 'v'],
        ['w', 'x', 'y', 'z']
    ];
    const result = [];
    const search = function(map, x, tmpArr) {
        if(x < map.length) {
            for(let y=0;y<map[x].length;y++) {
                tmpArr.push(map[x][y]);
                search(map, x+1, tmpArr);
                tmpArr.pop();
            }
        }
        else if(tmpArr && tmpArr.length) {
            result.push(tmpArr.join(''));
        }
    };
    const toMap = function(digits) {
        let map = [];
        if(digits) {
            let arr = digits.split('');
            for(let digit of arr) {
                map.push(charMap[digit]);
            }
        }
        return map;
    };
    let map = toMap(digits);
    if(map.length) {
        search(map, 0, []);
    }
    return result;
};

var digits = '23';
// var digits = '8';
console.log(letterCombinations(digits));