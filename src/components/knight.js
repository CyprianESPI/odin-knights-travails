import Board from "./board";

class Knight {
    static getPosKey(position) {
        const key = `${position[0]}_${position[1]}`;
        console.log(key, position);
        return key;
    }

    // origin/destination is an array of numbers [x, y]
    static moves(origin, destination) {
        console.log(origin, destination);
        // TODO: compute what's the real max depth...
        const max_depth = 15;
        const origin_key = Knight.getPosKey(origin);
        const result = {};
        result[origin_key] = [origin];

        for (let d = 0; d < max_depth; d++) {
            console.log("Depth:", d);
            // TODO: do not recompute already computed keys
            for (const [key, value] of Object.entries(result)) {
                console.log("Start move...", `${key}: ${value}`);

                // We use a regular for loop instead of foreach.
                // Foreach cannot be stopped with a simple return
                for (const possible_move of Knight.POSSIBLE_MOVES) {
                    const start_pos = value[value.length - 1];
                    const end_pos = [
                        start_pos[0] + possible_move[0],
                        start_pos[1] + possible_move[1],
                    ];
                    // Check move is valid (within board 8x8 - range is 0-7)
                    if (end_pos[0] < 0 || end_pos[0] >= Board.SIZE
                        || end_pos[1] < 0 || end_pos[1] >= Board.SIZE) {
                        continue;
                    }

                    // Copy the path array
                    const new_path = value.slice(); //.push(end_pos);
                    new_path.push(end_pos);

                    // Add to dict
                    const new_key = Knight.getPosKey(end_pos);
                    result[new_key] = new_path;

                    // Check if we reached destination
                    if (end_pos[0] === destination[0]
                        && end_pos[1] === destination[1]) {
                        console.log("Found path:", new_path);
                        console.log("All paths:", result);
                        return new_path;
                    }
                }
            }
        }

        console.log("Path not found...", result);
        return result;
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