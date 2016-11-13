/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    var board = [];
    var ans = [];
    // 初始化棋盘
    function _initBoard(n) {
        var board = [];
        if(n) {
            for(var i=0;i<n;i++) {
                board[i] = [];
                for(var j=0;j<n;j++) {
                    board[i][j] = 0;
                }
            }
        }
        return board;
    };
    // 判断行能否放置
    function _judgeRow(x) {
        for(var j=0;j<n;j++) {
            if(board[x][j]) {
                return false;
            }
        }
        return true;
    };
    // 判断列能否放置
    function _judgeCol(y) {
        for(var i=0;i<n;i++) {
            if(board[i][y]) {
                return false;
            }
        }
        return true;
    };
    // 判断是否对角线能否放置
    function _judgeDia(x, y) {
        // 左上对角
        for(var i=x-1,j=y-1;i>=0&&j>=0;i--,j--) {
            if(board[i][j]) {
                return false;
            }
        }
        // 右上对角
        for(var i=x-1,j=y+1;i>=0&&j<n;i--,j++) {
            if(board[i][j]) {
                return false;
            }
        }
        // 左下对角
        for(var i=x+1,j=y-1;i<n&&j>=0;i++,j--) {
            if(board[i][j]) {
                return false;
            }
        }
        // 右下角
        for(var i=x+1,j=y+1;i<n&&j<n;i++,j++) {
            if(board[i][j]) {
                return false;
            }
        }
        return true;
    };
    // 判断是否可以摆放
    function _canPlace(x, y) {
        return (_judgeRow(x) && _judgeCol(y) && _judgeDia(x,y));
    }
    // 处理当前结果
    function _deal(board) {
        var strArr = [];
        for(var i=0;i<n;i++) {
            var tmpStr = '';
            for(var j=0;j<n;j++) {
                tmpStr += board[i][j]? 'Q':'.';
            }
            strArr.push(tmpStr);
        }
        return strArr;
    }
    // 按行放置皇后
    function _place(row) {
        if(row >= n) {
            ans.push(_deal(board));
            return 0;
        }
        else {
            for(var j=0;j<n;j++) {
                if(_canPlace(row, j)) {
                    board[row][j] = 1;
                    _place(row+1);
                }
                board[row][j] = 0;
            }
            return 1;
        }
    };
    // 开始计算
    for(var j=0;j<n;j++) {
        board = _initBoard(n);
        board[0][j] = 1;
        _place(1);
    }
    return ans;
};

console.log(solveNQueens(5));