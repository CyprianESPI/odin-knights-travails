import Utils from "./utils";

class Board {
    static SIZE = 8;

    createSquare(color_val) {
        const square = document.createElement("div");
        if (color_val % 2 === 0)
            square.className = "light";
        else
            square.className = "dark";
        return square;
    }

    render(parent) {
        Utils.removeContent(parent);

        for (let row = 0; row < Board.SIZE; row++) {
            for (let col = 0; col < Board.SIZE; col++) {
                const square = this.createSquare(row + col);
                parent.appendChild(square);
            }
        }

    }
}
export default Board;