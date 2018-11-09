
var FreqStack = function () {
    this._elems = [];
    this._cache = {};
};

/** 
 * @param {number} x
 * @return {void}
 */
FreqStack.prototype.push = function (x) {
    this._cache[x] = this._cache[x] || [];
    this._cache[x].push(this._elems.length);
    this._elems.push(x);
    return null;
};

/**
 * @return {number}
 */
FreqStack.prototype.pop = function () {
    let targets = [], count = 0;
    for(let num in this._cache) {
        if(this._cache[num].length > count) {
            targets = [parseInt(num, 10)];
        }
        else if(this._cache[num].length == count) {
            targets.push(parseInt(num, 10));
        }
    }
};

/** 
 * Your FreqStack object will be instantiated and called as such:
 * var obj = Object.create(FreqStack).createNew()
 * obj.push(x)
 * var param_2 = obj.pop()
 */