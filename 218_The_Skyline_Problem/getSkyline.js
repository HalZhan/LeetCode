/**
 * @param {number[][]} buildings
 * @return {number[][]}
 */
var getSkyline = function (buildings) {
    const getDim = function (map, func, dimIdx) {
        let args = [];
        if (map && map.length && typeof func === 'function') {
            map.forEach(arr => {
                args.push(arr[dimIdx]);
            });
            return func.apply(undefined, args);
        }
        else {
            return undefined;
        }
    }
    const getMaxDim = function (map, dimIdx) {
        return getDim(map, Math.max, dimIdx);
    };
    const getMinDim = function (map, dimIdx) {
        return getDim(map, Math.min, dimIdx);
    }
    const createBitmap = function (width, height) {
        let bitmap = null;
        if (width && height) {
            bitmap = [];
            for (let i = 0; i <= height; i++) {
                let str = '';
                for (let j = 0; j <= width; j++) {
                    str += '0';
                }
                bitmap.push(str);
            }
        }
        return bitmap;
    };
    const updateString = function (str, index, char) {
        if (str && index < str.length) {
            return str.slice(0, index) + char + str.slice(index + 1);
        }
        return str;
    }
    const drawBitmap = function (bitmap, tuples, minX, maxX) {
        if (bitmap && tuples && bitmap.length && tuples.length) {
            minX = minX == undefined ? getMinDim(tuples, 0) : minX;
            maxX = maxX == undefined ? getMaxDim(tuples, 1) : maxX;
            for (let tuple of tuples) {
                for (let y = 0; y <= tuple[2]; y++) {
                    for (let x = tuple[0]; x <= tuple[1]; x++) {
                        bitmap[y] = updateString(bitmap[y], x, '1');
                    }
                }
            }
            for (let x = minX; x <= maxX; x++) {
                bitmap[0] = updateString(bitmap[0], x, '1');
            }
        }
    };
    const isIntersection = function (bitmap, point, minX, maxX) {
        let is = false;
        if (point && point.length && bitmap && bitmap.length) {
            minX = minX == undefined ? 0 : minX;
            maxX = maxX == undefined ? bitmap[0].length - 1 : maxX;
            let maxY = bitmap.length - 1, x = point[0], y = point[1];
            if (x === minX) {
                if (y === maxY) {
                    is = true;
                }
                else if (y > 0 && y < maxY && bitmap[y + 1][x] == 0) {
                    is = true;
                }
            }
            else if (x < maxX) {
                if (y === maxY) {
                    if (bitmap[y][x - 1] == 0) {
                        is = true;
                    }
                }
                else if (y >= 0 && y < maxY) {
                    if (bitmap[y + 1][x] == 0 && bitmap[y][x - 1] == 0) {
                        is = true;
                    }
                    else if (bitmap[y + 1][x] == 1 && bitmap[y][x + 1] == 1 && bitmap[y + 1][x + 1] == 0) {
                        is = true;
                    }
                }
            }
            else if (x === maxX && y === 0) {
                is = true;
            }
        }
        return is;
    }
    const getIntersections = function (bitmap, minX, maxX) {
        let intersections = [],
            height = bitmap.length,
            width = bitmap[0].length;
        minX = minX == undefined ? 0 : minX;
        maxX = maxX == undefined ? width - 1 : maxX;
        for (let x = minX; x <= maxX; x++) {
            for (let y = 0; y < height; y++) {
                let point = [x, y];
                if (bitmap[y][x] == '1' && isIntersection(bitmap, point, minX, maxX)) {
                    intersections.push(point);
                }
            }
        }
        return intersections;
    }
    let maxR = getMaxDim(buildings, 1),
        maxH = getMaxDim(buildings, 2),
        minX = getMinDim(buildings, 0),
        maxX = maxR;
    if (maxX && maxH) {
        bitmap = createBitmap(maxR, maxH);
        drawBitmap(bitmap, buildings, minX, maxX);
        return getIntersections(bitmap, minX, maxX);
    }
    else {
        return [];
    }
};

// let buildings = [];
let buildings = [
    [2, 9, 10],
    [3, 7, 15],
    [5, 12, 12],
    [15, 20, 10],
    [19, 24, 8]
];
let buildings = [
    [0, 2147483647, 2147483647]
];
// [ [2 10], [3 15], [7 12], [12 0], [15 10], [20 8], [24, 0] ]
console.log(getSkyline(buildings))