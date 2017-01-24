/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {boolean}
 */
var canMeasureWater = function (x, y, z) {
	const findDivisor = function (a, b) {
		while (b) {
			let c = a % b;
			a = b;
			b = c;
		}
		return a;
	};
	const divisor = findDivisor(x, y);
	if (z > x + y) {
		return false;
	}
	else if (z === x || z === y || z === 0) {
		return true;
	}
	return (z % divisor === 0);
};

// let x = 3, y = 5, z = 4; // true
// let x = 2, y = 6, z = 5; // false;
// let x = 1, y = 1, z = 12; // false
let x = 1, y = 2, z = 3; // true
// let x = 4, y = 6, z =8; // true
console.log(canMeasureWater(x, y, z));