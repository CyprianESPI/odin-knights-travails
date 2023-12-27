import Styles from "./styles.css";
import Knight from "./components/knight";

// ================= //
// DOM interaction
// ================= //
const MAIN = document.querySelector("main");

// ================= //
// Main
// ================= //
function main() {
    console.log("Initialazing...");

    // Get url param location
    const params = new URLSearchParams(document.location.search);
    console.log(params);

    const res = Knight.move([0, 0], [3, 3]);
    console.log(res);

    console.log("Initialazed!");
}

main();