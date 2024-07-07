var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function knightTravails(start, end) {
    if (!checkPosition(start[0], start[1])) {
        return {
            numberOfMoves: -1,
            path: []
        };
    }
    var moves = [
        [1, 2], [-1, 2],
        [1, -2], [-1, -2],
        [2, 1], [2, -1],
        [-2, 1], [-2, -1],
    ];
    var boardSize = 8;
    var board = Array.from({ length: boardSize }, function () { return Array(boardSize).fill(false); });
    board[start[0]][start[1]] = true;
    var queue = [__spreadArray(__spreadArray([], start, true), [0, []], false)];
    while (queue.length > 0) {
        var _a = queue.shift(), x = _a[0], y = _a[1], numberOfMoves = _a[2], path = _a[3];
        if (x === end[0] && y === end[1]) {
            return {
                numberOfMoves: numberOfMoves,
                path: path
            };
        }
        for (var i = 0; i < moves.length; i++) {
            var move = moves[i];
            var newX = x + move[0];
            var newY = y + move[1];
            if (checkPosition(newX, newY) && !board[newX][newY]) {
                board[newX][newY] = true;
                queue.push([newX, newY, numberOfMoves + 1, __spreadArray(__spreadArray([], path, true), [[newX, newY]], false)]);
            }
        }
    }
    return { numberOfMoves: -1, path: [] };
}
function checkPosition(x, y) {
    if (x >= 0 && x < 8 && y >= 0 && y < 8) {
        return true;
    }
    return false;
}
module.exports = knightTravails;
