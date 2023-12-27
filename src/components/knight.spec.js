const { default: Knight } = require('./knight');

describe('ll', () => {
    test('moves test 1', () => {
        //If it should pass with deep equality, replace "toBe" with "toStrictEqual"
        expect(Knight.moves([0, 0], [3, 3])).toStrictEqual([[0, 0], [2, 1], [3, 3]]);
    });
});
