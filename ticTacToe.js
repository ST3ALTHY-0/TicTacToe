//tic tac toe
//Luke Monroe   8/9/2023
let move = " ";
let isGameOver = false;
let playerTurn = true;// When true, first players move. When false, second players move.
const boardArray = new Array(9).fill("*");

console.log("Welcome to my Tic Tac Toe game!");
console.log("When it is your turn type 1-9 to place your marker.");
console.log("Here is the set up of the board.");
printBoard();

let firstPlayer = prompt("What is the first players name?");
let secondPlayer = prompt("What is the second players name?");

do {
    if (playerTurn) console.log("It is player " + firstPlayer + "'s turn.");
    if (!playerTurn) console.log("It is player " + secondPlayer + "'s turn.");
    makeMove();
    updateBoard();
    printBoard();
    checkWin();
    playerTurn = !playerTurn;
} while (!isGameOver);

function printBoard() {
    console.log(boardArray[0] + "|" + boardArray[1] + "|" + boardArray[2]);
    console.log(boardArray[3] + "|" + boardArray[4] + "|" + boardArray[5]);
    console.log(boardArray[6] + "|" + boardArray[7] + "|" + boardArray[8]);
}
function makeMove() {
    let isValid = true;
    while (isValid) {
        try {
            if (playerTurn) move = prompt("Where would you like to move " + firstPlayer);
            if (!playerTurn) move = prompt("Where would you like to move " + secondPlayer);

            if (isNaN(move)) throw "not a number!";
            if (move == "") throw "enter a value!";
            if (move >= 9 || move < 1) throw "not a valid number";
            if (boardArray[(move - 1)] != "*") throw "that move has already been played";
            isValid = false;
        }
        catch (err) {
            console.log("make a valid move!");
            isValid = true;
        }
    }
    move = parseInt(move);

}
function updateBoard() {
    if (playerTurn) boardArray[(move - 1)] = "X";
    if (!playerTurn) boardArray[(move - 1)] = "O";

}
function checkWin() {
    //fill it with different value ie 123456789 in the unplayed slots and just change it back after the comparison
    //TODO: find better way later
    for (let i = 0; i < 9; i++) {
        if (boardArray[i] == "*") boardArray[i] = i;
    }

    if (((boardArray[0] === boardArray[1]) && (boardArray[0] === boardArray[2])) || ((boardArray[3] === boardArray[4]) && (boardArray[3] === boardArray[5])) || ((boardArray[6] === boardArray[7]) && (boardArray[6] === boardArray[8])) || ((boardArray[0] === boardArray[4]) && (boardArray[0] === boardArray[8])) || ((boardArray[2] === boardArray[4]) && (boardArray[2] === boardArray[6])) || ((boardArray[0] === boardArray[3]) && (boardArray[0] === boardArray[6])) || ((boardArray[1] === boardArray[4]) && (boardArray[1] === boardArray[7])) || ((boardArray[2] === boardArray[5]) && (boardArray[2] === boardArray[8]))) {
        if (!playerTurn) console.log("Congrats player " + secondPlayer);
        if (playerTurn) console.log("Congrats player " + firstPlayer);
        isGameOver = true;
    }
    //change unused squares back to '*'
    for (let i = 0; i < 9; i++) {
        if (boardArray[i] == i) boardArray[i] = "*";
    }

    if (!boardArray.includes("*")) console.log("The game ending in a tie!");
}

