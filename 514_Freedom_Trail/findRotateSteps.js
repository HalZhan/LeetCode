/**
 * @param {string} ring
 * @param {string} key
 * @return {number}
 */
var findRotateSteps = function (ring, key) {
    const
        RING_LEGNTH = ring.length,
        KEY_LENGTH = key.length,
        CACHE = new Array(RING_LEGNTH).fill(null).map(() => new Array(KEY_LENGTH).fill(null));

    const findLeft = function (beginIdx = 0, kIdx) {
        let i = beginIdx + 1;
        // find left
        do {
            i--;
            if (i < 0) {
                i += RING_LEGNTH;
            }
        }
        while (ring[i] != key[kIdx])
        return i;
    }

    const findRight = function (beginIdx = 0, kIdx) {
        let j = beginIdx - 1;
        // find right
        do {
            j++;
            j %= RING_LEGNTH;
        }
        while (ring[j] != key[kIdx])
        return j;
    }

    const rotate = function (rIdx, kIdx) {
        if (kIdx >= KEY_LENGTH) {
            return 0;
        }
        if (CACHE[rIdx][kIdx] != null) {
            return CACHE[rIdx][kIdx];
        }
        // console.log(`rIdx: ${rIdx}, cur_ring_char: ${ring[rIdx]}, kIdx: ${kIdx}, cur_key_char: ${key[kIdx]}`);
        let i = findLeft(rIdx, kIdx),
            j = findRight(rIdx, kIdx);

        let distI = rIdx - i, distJ = j - rIdx;
        while (distI < 0) {
            distI += RING_LEGNTH;
        }
        while (distJ < 0) {
            distJ += RING_LEGNTH;
        }
        let countI = distI + 1 + rotate(i, kIdx + 1),
            countJ = distJ + 1 + rotate(j, kIdx + 1);
        // countCur = (ring[rIdx] == key[kIdx]) ? rotate(rIdx, kIdx + 1, count + 1) : Infinity;

        return CACHE[rIdx][kIdx] = Math.min(countI, countJ);
    }

    return rotate(0, 0);
};

const
    // ring = "godding",
    // key = "godding"
    // => 13

    // ring = "godding",
    // key = "gd"
    // => 4

    // ring = "godding",
    // key = "gdo"
    // => 6

    // ring = "iotfo",
    // key = "fioot"
    // => 11

    // ring = "eogoddhing",
    // key = "gdo"
    // => 8

    ring = "xrrakuulnczywjs",
    key = "jrlucwzakzussrlckyjjsuwkuarnaluxnyzcnrxxwruyr"
// => 204

console.log(`Result: ${findRotateSteps(ring, key)}`)