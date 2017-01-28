/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function (area) {
    const root = Math.ceil(Math.sqrt(area));
    for (let l = root; l <= area; l++) {
        if (area % l === 0) {
            return [l, area / l];
        }
    }
    return [area, 1];
};

var area = 2;
console.log(constructRectangle(area));