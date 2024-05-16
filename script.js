let boxes = document.querySelectorAll(".box");

let turn = "X";
let scoreX = 0;
let scoreO = 0;
let isGameOver = false;

boxes.forEach(e => {
    e.innerHTML = "";
    e.addEventListener("click", () => {
        if (!isGameOver && e.innerHTML === "") {
            e.innerHTML = turn === "X" ? svgX : svgO; // e.innerHTML = turn;
            e.style.cursor = "auto";
            checkWin();
            checkDraw();
            updateTurn();
        }
    })
})

function updateTurn() {
    if (turn === "X") {
        turn = "O";
        document.querySelector(".bg").style.left = "85px";
        document.querySelector(".turn-name").innerHTML = "O's Turn";
    }
    else {
        turn = "X";
        document.querySelector(".bg").style.left = "0";
        document.querySelector(".turn-name").innerHTML = "X's Turn";
    }
}

function checkWin() {
    let winConditions = [
        [0, 1, 2], 
        [0, 4, 8], 
        [3, 4, 5], 
        [6, 7, 8], 
        [2, 4, 6], 
        [0, 3, 6], 
        [1, 4, 7], 
        [2, 5, 8]
    ]
    for (let i = 0; i < winConditions.length; i++) {
        let v0 = boxes[winConditions[i][0]].innerHTML;
        let v1 = boxes[winConditions[i][1]].innerHTML;
        let v2 = boxes[winConditions[i][2]].innerHTML;

        if (v0 != "" && v0 === v1 && v0 === v2) {
            isGameOver = true;
            if (turn === "X") {
                scoreX++;
                document.getElementById("scoreX").textContent = scoreX;
            } else {
                scoreO++;
                document.getElementById("scoreO").textContent = scoreO;
            }
            document.querySelector("#results").innerHTML = turn + " wins!";
            document.querySelector("#replay").style.display = "inline";
            document.querySelector(".bg").style.animationPlayState = "paused";
            document.querySelector(".bg").style.backgroundColor = "#FF2E63";
            document.querySelector("#replay").style.animationPlayState = "running";


            for (j = 0; j < 3; j++) {
                boxes[winConditions[i][j]].style.backgroundColor = "#08D9D6";
                boxes[winConditions[i][j]].style.color = "#000";
                // boxes[winConditions[i][j]].style.border = "2px solid gold";
            }
        }
    }
}

function checkDraw() {
    if (!isGameOver) {
        let isDraw = true;
        boxes.forEach(e => {
            if(e.innerHTML === "") isDraw = false;
        })

        if (isDraw) {
            isGameOver = true;
            document.querySelector("#results").innerHTML = "Draw!";
            document.querySelector("#replay").style.display = "inline";
        }
    }
}

const svgX = `
    <svg viewBox="0 0 81 81">
        <line x1="1" y1="1" x2="80" y2="80" stroke="black" stroke-width="5"/>
        <line x1="1" y1="80" x2="80" y2="1" stroke="black" stroke-width="5"/>
    </svg>`;

const svgO = `
    <svg viewBox="0 0 81 81">
        <circle cx="40.5" cy="40.5" r="36" stroke="black" stroke-width="5" fill="none" />
    </svg>`;

document.querySelector("#replay").addEventListener("click", () => {
    isGameOver = false;
    document.querySelector("#results").innerHTML = "";
    document.querySelector("#replay").style.display = "none";
    document.querySelector(".bg").style.animationPlayState = "running";
    document.querySelector("#replay").style.animationPlayState = "paused";

    boxes.forEach(e => {
        e.innerHTML = "";
        e.style.removeProperty("background-color");
        e.style.color = "#fff";
        e.style.cursor = "pointer";
        // e.style.border = "2px solid black";
    })
})