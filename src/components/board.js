import Utils from "./utils";

class Board {
    static SIZE = 8;

    constructor() {
        const cont = document.createElement("div");
        cont.className = "board";
        cont.style.gridTemplateColumns = "1fr ".repeat(Board.SIZE);
        this.container = cont;
    }

    createSquare(row, col) {
        const square = document.createElement("div");
        if ((row + col) % 2 === 0)
            square.className = "light";
        else
            square.className = "dark";
        return square;
    }

    render() {
        Utils.removeContent(this.container);

        for (let row = 0; row < Board.SIZE; row++) {
            for (let col = 0; col < Board.SIZE; col++) {
                const square = this.createSquare(row, col);
                this.container.appendChild(square);
            }
        }

    }
}
export default Board;