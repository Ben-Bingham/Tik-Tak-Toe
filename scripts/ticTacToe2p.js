const board = [0, 0, 0,
               0, 0, 0,
               0, 0, 0];

var playersTurn = 1;
var movesMade = 0;

function buttonClick(index) {
    if (playersTurn == 1) {
        document.getElementById(index.toString()).innerHTML = "<div class=\"ButtonDiv\"><button class=\"clickedButton Button\">X</button></div>";
    }
    else {
        document.getElementById(index.toString()).innerHTML = "<div class=\"ButtonDiv\"><button class=\"clickedButton Button\">O</button></div>";
    }

    if (index >= 9) {
        alert("Index out of range.");
        return;
    }

    board[index] = playersTurn;

    detectWin();

    if (playersTurn == 1) {
        playersTurn = 2;
    }
    else {
        playersTurn = 1;
    }

    movesMade++;
}

function playAgain() {
    for (var i = 0; i < 9; i++) {
        board[i] = 0;
        
        document.getElementById(i.toString()).innerHTML = "<div class=\"ButtonDiv\"><button class=\"clickedButton Button\" onclick=\"buttonClick(" + i.toString() + ")\"></button></div>";
    }

    playersTurn = 1;
    movesMade = 0;
}

function anounceWin() {
    setTimeout(alertWin, 1);
}

function alertWin() {
    if(confirm("Player " + playersTurn.toString() + " Wins!\nDo you want to play again?")) {
        playAgain();
    }
}

function anounceDraw() {
    setTimeout(alertDraw, 1);
}

function alertDraw() {
    if(confirm("Its a draw!\nDo you want to play again?")) {
        playAgain();
    }
}

function detectWin() {
    if (board[0] == board[1] && board[1] == board[2] && board[0] != 0) {
        anounceWin();
        return;
    }
    if (board[3] == board[4] && board[4] == board[5] && board[3] != 0) {
        anounceWin();
        return;
    }
    if (board[6] == board[7] && board[7] == board[8] && board[6] != 0) {
        anounceWin();
        return;
    }

    if (board[0] == board[3] && board[3] == board[6] && board[0] != 0) {
        anounceWin();
        return;
    }
    if (board[1] == board[4] && board[4] == board[7] && board[1] != 0) {
        anounceWin();
        return;
    }
    if (board[2] == board[5] && board[5] == board[8] && board[2] != 0) {
        anounceWin();
        return;
    }

    if (board[0] == board[4] && board[4] == board[8] && board[0] != 0) {
        anounceWin();
        return;
    }
    if (board[6] == board[4] && board[4] == board[2] && board[6] != 0) {
        anounceWin();
        return;
    }

    if (movesMade == 8) {
        anounceDraw();
    }
}