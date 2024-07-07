const knightTravailsFunc  = require('../knightsTravails');

test('knight moves starting at (1, 1) and ending at (2, 2)', () => {
    const result = knightTravailsFunc([1, 1], [2, 2]);
    expect(result.numberOfMoves).toBe(2);
});

test('knight moves starting at (7, 7) and ending at (0, 0)', () => {
    const result = knightTravailsFunc([7, 7], [0, 0]);
    expect(result.numberOfMoves).toBe(6);
});


test('knight cannot move outside the board (starting at -1, -1)', () => {
    const result = knightTravailsFunc([-1, -1], [3, 3]);
    expect(result.numberOfMoves).toBe(-1); 
});

test('knight cannot move outside the board (ending at 8, 8)', () => {
    const result = knightTravailsFunc([0, 0], [8, 8]);
    expect(result.numberOfMoves).toBe(-1);
});
