/**
 * @constructor
 */
var MedianFinder = function() {
    this.nums = [];
};

/**
 * @param {integer} word
 * @return {void}
 * Adds a num into the data structure.
 */
MedianFinder.prototype.addNum = function(num) {
    let nums = this.nums;
    let numsLen = nums.length;
    if(numsLen) {
        for(var i=0;i<numsLen;i++) {
            if(i===numsLen-1) {
                
            }
        }
    }
    else {
        nums.push(num);
    }
};

/**
 * @return {double}
 * Return median of current data stream
 */
MedianFinder.prototype.findMedian = function() {
    if(this.nums.length) {
        let numsLen = nums.length;
        // odd
        if(numsLen % 2) {
            return nums[(numsLen-1)/2];
        }
        // even
        else {
            return (nums[numsLen/2]+nums[numsLen/2-1])/2;
        }
    }
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var mf = new MedianFinder();
 * mf.addNum(1);
 * mf.findMedian();
 */