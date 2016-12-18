/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
    const DIM = 9;
    const SUB_DIM = 3;
    const CHARS = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const EMPTY_CHAR = '.';
    // initialize board
    const _initBoard = function (board) {
        let _board = [];
        for (var i = 0; i < DIM; i++) {
            _board.push(board[i].split(''));
        }
        return _board;
    }
    // judge row
    const _rowCanPlace = function (board, row, elem) {
        let rowElems = board[row];
        if (rowElems.indexOf(elem) >= 0) {
            return false;
        }
        else {
            return true;
        }
    }
    // judge column
    const _columnCanPlace = function (board, column, elem) {
        let colElems = [];
        for (var i = 0; i < DIM; i++) {
            colElems.push(board[i][column]);
        }
        if (colElems.indexOf(elem) >= 0) {
            return false;
        }
        else {
            return true;
        }
    }
    // judge sudoku
    const _sudokuCanPlace = function (board, row, column, elem) {
        let r_seq = parseInt(row / SUB_DIM, 10), c_seq = parseInt(column / SUB_DIM, 10);
        let rStart = r_seq * SUB_DIM, rEnd = rStart + SUB_DIM;
        let cStart = c_seq * SUB_DIM, cEnd = cStart + SUB_DIM;
        let elems = [];
        for (let r = rStart; r < rEnd; r++) {
            for (let c = cStart; c < cEnd; c++) {
                elems.push(board[r][c]);
            }
        }
        if (elems.indexOf(elem) >= 0) {
            return false;
        }
        else {
            return true;
        }
    }
    // can place
    const _canPlace = function (board, row, column, elem) {
        return (_rowCanPlace(board, row, elem) && _columnCanPlace(board, column, elem) && _sudokuCanPlace(board, row, column, elem));
    }
    const _isOkay = function(board) {
        for(let i=0;i<DIM;i++) {
            for(let j=0;j<DIM;j++) {
                if(board[i][j] === EMPTY_CHAR) {
                    return false;
                }
            }
        }
        return true;
    }
    // place
    const _place = function (board, row, column) {
        if(row >= DIM) {
            return;
        }
        if (board[row][column] === EMPTY_CHAR) {
            for (let char of CHARS) {
                if (_canPlace(board, row, column, char)) {
                    board[row][column] = char;
                    _place(board, row, column + 1);
                    if(!_isOkay(board)) {
                        board[row][column] = EMPTY_CHAR;
                    }
                }
            }
        }
        else if (column < DIM) {
            _place(board, row, column + 1);
        }
        else if (row < DIM) {
            _place(board, row + 1, 0);
        }
        else {
            return;
        }
    }
    // deal board to result
    const _dealBoard = function (originBoard, resultBoard) {
        for(let i=0;i<DIM;i++) {
            originBoard[i] = resultBoard[i].join('');
        }
    }

    let _board = _initBoard(board);
    _place(_board, 0, 0);
    _dealBoard(board, _board);
};

var board = ["..9748...", "7........", ".2.1.9...", "..7...24.", ".64.1.59.", ".98...3..", "...8.3.2.", "........6", "...2759.."];
solveSudoku(board);
console.info('Board: ', board);