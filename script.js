const board = [0, 0, 0,
               0, 0, 0,
               0, 0, 0];

var playersTurn = 1;

function buttonClick(index) {
    console.log(index.toString());

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
}

function anounceWin() {
    alert(playersTurn.toString() + " Wins!");
}

function detectWin() { //TODO
    console.log(board);
    if (board[0] == board[1] == board[2] && board[0] != 0) {
        anounceWin();
        return;
    }
    if (board[3] == board[4] == board[5] && board[3] != 0) {
        anounceWin();
        return;
    }
    if (board[6] == board[7] == board[8] && board[6] != 0) {
        anounceWin();
        return;
    }

    if (board[0] == board[3] == board[4] && board[0] != 0) {
        anounceWin();
        return;
    }
    if (board[1] == board[4] == board[7] && board[1] != 0) {
        anounceWin();
        return;
    }
    if (board[2] == board[5] == board[8] && board[2] != 0) {
        anounceWin();
        return;
    }

    if (board[0] == board[4] == board[8] && board[0] != 0) {
        anounceWin();
        return;
    }
    if (board[6] == board[5] == board[2] && board[6] != 0) {
        anounceWin();
        return;
    }
}