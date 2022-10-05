const board = [0, 0, 0,
               0, 0, 0,
               0, 0, 0];

var playersTurn = 1;
var movesMade = 0;

function botMove() {
    var moveNotMade = true;
    while(moveNotMade) {
        var randomNumber = Math.floor(Math.random() * 9);
        if (board[randomNumber] == 0) {
            buttonClick(randomNumber, true);
            moveNotMade = false;
        }
    }
}

function buttonClick(index, bot) {
    if (index >= 9) {
        alert("Index out of range.");
        return;
    }

    if (playersTurn == 1) {
        document.getElementById(index.toString()).innerHTML = "<div class=\"ButtonDiv\"><button class=\"clickedButton Button\">X</button></div>";
    }
    else {
        document.getElementById(index.toString()).innerHTML = "<div class=\"ButtonDiv\"><button class=\"clickedButton Button\">O</button></div>";
    }

    board[index] = playersTurn;
    console.log(playersTurn);

    var win = detectWin();
    console.log(playersTurn);

    if (playersTurn == 1) {
        playersTurn = 2;
    }
    else {
        playersTurn = 1;
    }
    console.log(playersTurn);

    movesMade++;
    if (!bot && !win) {
        botMove();
    }
}

function playAgain() {
    for (var i = 0; i < 9; i++) {
        board[i] = 0;
        
        document.getElementById(i.toString()).innerHTML = "<div class=\"ButtonDiv\"><button class=\"clickedButton Button\" onclick=\"buttonClick(" + i.toString() + ")\"></button></div>";
    }

    playersTurn = 1;
    movesMade = 0;
}

function anouncePlayerWin() {
    setTimeout(alertPlayerWin, 1);
}

function anounceBotWin() {
    setTimeout(alertBotWin, 1);
}

function alertPlayerWin() {
    if(confirm("The Player Wins!\nDo you want to play again?")) {
        playAgain();
    }
}

function alertBotWin() {
    if(confirm("The AI Wins!\nDo you want to play again?")) {
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
    //console.log(playersTurn);

    if (board[0] == board[1] && board[1] == board[2] && board[0] != 0) {
        if (board[0] == 1) {
            anouncePlayerWin();
        }
        else {
            anounceBotWin();
        }
        return true;
    }
    if (board[3] == board[4] && board[4] == board[5] && board[3] != 0) {
        if (board[3] == 1) {
            anouncePlayerWin();
        }
        else {
            anounceBotWin();
        }        
        return true;
    }
    if (board[6] == board[7] && board[7] == board[8] && board[6] != 0) {
        if (board[6] == 1) {
            anouncePlayerWin();
        }
        else {
            anounceBotWin();
        }        
        return true;
    }

    if (board[0] == board[3] && board[3] == board[6] && board[0] != 0) {
        if (board[0] == 1) {
            anouncePlayerWin();
        }
        else {
            anounceBotWin();
        }        
        return true;
    }
    if (board[1] == board[4] && board[4] == board[7] && board[1] != 0) {
        if (board[1] == 1) {
            anouncePlayerWin();
        }
        else {
            anounceBotWin();
        }        
        return true;
    }
    if (board[2] == board[5] && board[5] == board[8] && board[2] != 0) {
        if (board[2] == 1) {
            anouncePlayerWin();
        }
        else {
            anounceBotWin();
        }
        return true;
    }

    if (board[0] == board[4] && board[4] == board[8] && board[0] != 0) {
        if (board[0] == 1) {
            anouncePlayerWin();
        }
        else {
            anounceBotWin();
        }
        return true;
    }
    if (board[6] == board[4] && board[4] == board[2] && board[6] != 0) {
        if (board[6] == 1) {
            anouncePlayerWin();
        }
        else {
            anounceBotWin();
        }
        return true;
    }

    if (movesMade == 8) {
        anounceDraw();
        return true;
    }
}