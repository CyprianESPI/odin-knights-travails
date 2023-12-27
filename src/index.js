import Styles from "./styles.css";
import Knight from "./components/knight";
import Board from "./components/board";

// ================= //
// DOM interaction
// ================= //
const BOARD = new Board();
const MAIN = document.querySelector("main");
MAIN.appendChild(BOARD.container);

function render() {
    console.log("Rendering...");

    BOARD.render();

    console.log("Rendered!");
}

// ================= //
// Main
// ================= //
function main() {
    console.log("Initialazing...");

    // Get url param location
    const params = new URLSearchParams(document.location.search);
    console.log(params);

    const res = Knight.moves([0, 0], [3, 3]);
    console.log(res);

    console.log("Initialazed!");

    render();
}

main();