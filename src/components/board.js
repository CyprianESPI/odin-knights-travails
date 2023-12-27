import Knight from "./knight";
import Utils from "./utils";

class Board {
    static SIZE = 8;

    constructor(knight_position) {
        const cont = document.createElement("div");
        cont.className = "board not-busy";
        cont.style.gridTemplateColumns = `repeat(${Board.SIZE}, minmax(0, 1fr))`;
        cont.style.gridAutoRows = "1fr";

        this.container = cont;
        this.knightPosition = knight_position;
        this.path = [];
    }

    createSquare(row, col) {
        const square = document.createElement("div");
        if ((row + col) % 2 === 0)
            square.className = "square light";
        else
            square.className = "square dark";

        square.addEventListener('click', (e) => {
            // Only execute one path at a time
            if (this.path.length !== 0)
                return;

            // Do not compute if same position as knight
            if (this.knightPosition[0] == row
                && this.knightPosition[1] == col)
                return;

            const path = Knight.moves(this.knightPosition, [row, col]);
            // Remove first position as its the kinght's one
            path.shift();
            path.forEach(pos => {
                this.path.push(pos);
            });
            console.debug("Knight path:", this.path);
            for (var i = 0; i < this.path.length; i++) {
                setTimeout(() => {
                    console.debug(`Delayed for ${i * 500} ms.`);
                    this.knightPosition = this.path.shift();
                    this.render();
                }, i * 500);
            }
        });
        return square;
    }

    render() {
        console.debug("Rendering board...");
        Utils.removeContent(this.container);

        for (let row = 0; row < Board.SIZE; row++) {
            for (let col = 0; col < Board.SIZE; col++) {
                const square = this.createSquare(row, col);
                // Add knight
                if (row == this.knightPosition[0]
                    && col == this.knightPosition[1]) {
                    square.innerText = "♞";
                    square.className += " busy";
                } else if (this.path.length !== 0) {
                    square.className += " busy";
                    if (row == this.path[this.path.length - 1][0]
                        && col == this.path[this.path.length - 1][1]) {
                        square.className += " target";
                    }
                }
                this.container.appendChild(square);
            }
        }

        console.debug("Rendered board!");
    }
}
export default Board;