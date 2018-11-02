/**
 * @param {string} ring
 * @param {string} key
 * @return {number}
 */
var findRotateSteps = function (ring, key) {
    const RING_LEGNTH = ring.length, KEY_LENGTH = key.length;
    let result = Infinity;

    const rotate = function (rIdx, kIdx, count) {
        count = count || 0;
        if (kIdx >= KEY_LENGTH) {
            return count;
        }
        console.log(`rIdx: ${rIdx}, cur_ring_char: ${ring[rIdx]}, kIdx: ${kIdx}, cur_key_char: ${key[kIdx]}`);
        // rIdx = rIdx % RING_LEGNTH;
        if (ring[rIdx] == key[kIdx]) {
            count += 1;
            return rotate(rIdx, kIdx + 1, count);
        }
        else {
            let i = j = rIdx;

            // find left
            do {
                i--;
                if (i < 0) {
                    i += RING_LEGNTH;
                }
            }
            while (ring[i] != key[kIdx])

            // find right
            do {
                j++;
                j %= RING_LEGNTH;
            }
            while (ring[j] != key[kIdx])

            let distI = rIdx - i, distJ = j - rIdx;
            while (distI < 0) {
                distI += RING_LEGNTH;
            }
            while (distJ < 0) {
                distJ += RING_LEGNTH;
            }
            let countI = count + distI + 1,
                countJ = count + distJ + 1;
            console.log(distI + 1, distJ + 1);
            countI = rotate(i, kIdx + 1, countI);
            countJ = rotate(j, kIdx + 1, countJ);

            return Math.min(countI, countJ);
        }
    }

    // for (let i = 0; i < RING_LEGNTH; i++) {
    //     let tempCount = rotate(i, 0, i);
    //     if (tempCount < result) {
    //         result = tempCount;
    //     }
    // }

    result = rotate(0, 0, 0);

    return result;
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

    ring = "eogoddhing",
    key = "gdo"
    // => 8

console.log(`Result: ${findRotateSteps(ring, key)}`)