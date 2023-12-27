import Knight from './knight';

describe('Knight', () => {
    test('moves test 1', () => {
        //If it should pass with deep equality, replace "toBe" with "toStrictEqual"
        expect(Knight.moves([0, 0], [3, 3])).toStrictEqual([[0, 0], [1, 2], [3, 3]]);
    });
});
