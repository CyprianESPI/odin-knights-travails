class Knight {
    // origin/destination is an array of numbers [x, y]
    static moves(origin, destination) {
        console.log(origin, destination);
        return true;
    }

    // List all possible moves x,y moves
    static POSSIBLE_MOVES = [
        [1, 2], [2, 1],
        [2, -1], [1, -2],
        [-1, -2], [-2, -1],
        [-2, 1], [-1, 2],
    ];
}
export default Knight;