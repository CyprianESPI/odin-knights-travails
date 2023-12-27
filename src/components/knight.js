class Knight {
    static getPosKey(position) {
        const key = `${position[0]}_${position[1]}`;
        console.log(key, position);
        return key;
    }

    // origin/destination is an array of numbers [x, y]
    static moves(origin, destination) {
        console.log(origin, destination);
        const max_depth = 2;
        const origin_key = Knight.getPosKey(origin);
        const result = {};
        result[origin_key] = [origin];

        for (let d = 0; d < max_depth; d++) {
            for (const [key, value] of Object.entries(result)) {
                console.log("Start move...");
                console.log(`${key}: ${value}`);

                Knight.POSSIBLE_MOVES.forEach(possible_move => {
                    console.log("Moving...");
                    const start_pos = value[value.length - 1];
                    const end_pos = [
                        start_pos[0] + possible_move[0],
                        start_pos[1] + possible_move[1],
                    ];
                    console.log("s>e", start_pos, end_pos);
                    // Copy the path array
                    const new_path = value.slice(); //.push(end_pos);
                    new_path.push(end_pos);
                    console.log("new_path", new_path);
                    const new_key = Knight.getPosKey(end_pos);
                    result[new_key] = new_path;
                    console.log("res:", result);
                });
            }
        }

        console.log(result);
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