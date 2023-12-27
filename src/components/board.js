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

            const path = Knight.moves(this.knightPosition, [row, col]);
            path.forEach(pos => {
                this.path.push(pos);
            });
            console.log("Knigh path:", this.path);
            for (var i = 0; i < this.path.length; i++) {
                setTimeout(() => {
                    console.log(`Delayed for ${i * 1000} ms.`);
                    this.knightPosition = this.path.shift();
                    this.render();
                }, i * 1000);
            }
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