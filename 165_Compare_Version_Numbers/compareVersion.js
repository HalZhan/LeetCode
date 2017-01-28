/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {
    const alpha = '.';
    let verArr1 = version1.split(alpha);
    let verArr2 = version2.split(alpha);
    let len1 = version1.length;
    let len2 = version2.length;
    const compareArrays = function (arr1, arr2) {
        for (let i = 0; i < arr1.length; i++) {
            let num1 = parseInt(arr1[i]);
            let num2 = parseInt(arr2[i]);
            if (num1 < num2) {
                return -1;
            }
            else if(num1 > num2) {
                return 1;
            }
        }
        return 0;
    };
    if (len1 < len2) {
        for (let i = len1; i <= len2; i++) {
            verArr1.push('0');
        }
    }
    else if (len1 > len2) {
        for (let i = len2; i <= len1; i++) {
            verArr2.push('0');
        }
    }
    return compareArrays(verArr1, verArr2);
};

var version1 = '1.2', version2 = '13.37';
console.log(compareVersion(version1, version2));