import Knight from "./knight";
import Utils from "./utils";

class Board {
    static SIZE = 8;

    constructor(knight_position) {
        const cont = document.createElement("div");
        cont.className = "board";
        cont.style.gridTemplateColumns = `repeat(${Board.SIZE}, minmax(0, 1fr))`;
        cont.style.gridAutoRows = "1fr";

        this.container = cont;
        this.knightPosition = knight_position;
    }

    createSquare(row, col) {
        const square = document.createElement("div");
        if ((row + col) % 2 === 0)
            square.className = "square light";
        else
            square.className = "square dark";

        square.addEventListener('click', (e) => {
            const path = Knight.moves(this.knightPosition, [row, col]);
            console.log("Knigh path:", path);
        });
        return square;
    }

    render() {
        Utils.removeContent(this.container);

        for (let row = 0; row < Board.SIZE; row++) {
            for (let col = 0; col < Board.SIZE; col++) {
                const square = this.createSquare(row, col);
                // Add knight
                if (row == this.knightPosition[0]
                    && col == this.knightPosition[1]) {
                    square.innerText = "♞";
                }
                this.container.appendChild(square);
            }
        }

    }
}
export default Board;