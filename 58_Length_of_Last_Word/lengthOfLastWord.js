/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    s = s.trim();
    if(s.length) {
    	var sArr = s.split(/\s+/);
    	return sArr[sArr.length - 1].length;
    }
    else {
    	return 0;
    }
};