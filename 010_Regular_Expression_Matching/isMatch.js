/**
 * isMatch("aa","a") → false
 * isMatch("aa","aa") → true
 * isMatch("aaa","aa") → false
 * isMatch("aa", "a*") → true
 * isMatch("aa", ".*") → true
 * isMatch("ab", ".*") → true
 * isMatch("aab", "c*a*b") → true
 */

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
    var res = false,
        reg = new RegExp('^' + p + '$'),
        matches = s.match(reg);
    if (matches && matches.length) {
        res = true;
    }
    return res;
};

var tests = [
    ['aa', 'a'],
    ['aa', 'aa'],
    ['aaa', 'aa'],
    ['aa', 'a*'],
    ['aa', '.*'],
    ['ab', '.*'],
    ['aab', 'c*a*b']
];
for (var i = 0; i < tests.length; i++) {
    console.log(tests[i], ' => ', isMatch.apply(null, tests[i]));
}