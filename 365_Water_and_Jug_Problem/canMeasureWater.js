/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {boolean}
 */
var canMeasureWater = function(x, y, z) {
	if(z === 0) {
		return true;
	}
	if(x+y < z || (x === 0 && y === 0)) {
		return false;
	}
	// var big = Math.max(x, y);
	// var small = Math.min(x, y);
	// var gap = big - small;
	// if(z === x || z === y || z === x+y || z === gap || (z+big)%small === 0 || z%gap === 0) {
	// 	return true;
	// }
	return true;
};