
function knightTravails(start: [number, number], end: [number, number]): { numberOfMoves: number; path: [number, number][] } {


    if (!checkPosition(start[0], start[1])) {
        return {
            numberOfMoves: -1,
            path: []
        }
    }
    const moves: [number, number][] = [
        [1, 2], [-1, 2],
        [1, -2], [-1, -2],
        [2, 1], [2, -1],
        [-2, 1], [-2, -1],
    ]


    const boardSize: number = 8;

    const board: boolean[][] = Array.from({ length: boardSize }, () => Array(boardSize).fill(false));

    board[start[0]][start[1]] = true;

    const queue: [[number, number, number, [number, number][]]] = [[...start, 0, []]]

    while (queue.length > 0) {
        const [x, y, numberOfMoves, path] = queue.shift()!;



        if (x === end[0] && y === end[1]) {
            return {
                numberOfMoves,
                path
            }

        }

        for (let i = 0; i < moves.length; i++) {
            const move = moves[i];
            const newX = x + move[0];
            const newY = y + move[1];

            if (checkPosition(newX, newY) && !board[newX][newY]) {
                board[newX][newY] = true;
                queue.push([newX, newY, numberOfMoves + 1, [...path, [newX, newY]]]);
            }
        }
    }

    return { numberOfMoves: -1, path: [] }

}


function checkPosition(x: number, y: number) {
    if (x >= 0 && x < 8 && y >= 0 && y < 8) {
        return true;
    }

    return false;
}

module.exports = knightTravails;

