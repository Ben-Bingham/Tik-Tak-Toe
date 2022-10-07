function makeBoard(width, height) {
    var html = "";
    html += "<table>"
    for (var y = 0; y < height; y++) {
        html += "<tr>";
        for (var x = 0; x < width; x++) {
            html += "<td class=\"ButtonTD\" id=" + x.toString() + "," + y.toString() + "><div class=\"ButtonDiv\"><button class=\"Button\" onclick=\"buttonClick(" + x.toString() + ", " + y.toString() + ")\"></button></div></td>";
        }
        html += "</tr>";
    }
    html += "</table>"

    document.getElementById("Board").innerHTML = html;
}

const player1Board = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
]

const player2Board = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
]

makeBoard(10, 10);
var playerTurn = 1;

//setActiveBoardHTML(getActivePlayerBoard());

var player1ShipsPlaced = false;
var player1ShipSegmentsPlaced = 0;
var player2ShipsPlaced = false;
var player2ShipSegmentsPlaced = 0;

function updateHTMLForBoardCordinate(x, y, board) {
    if (board[x][y] == "ship") {
        document.getElementById(x.toString() + "," + y.toString()).innerHTML = "<div class=\"ButtonDiv\"><button class=\"Button ship\" onclick=\"buttonClick(" + x.toString() + ", " + y.toString() + ")\"></button></div>";
    }
    else if (board[x][y] == "hitShip") {
        document.getElementById(x.toString() + "," + y.toString()).innerHTML = "<div class=\"ButtonDiv\"><button class=\"Button hitShip\" onclick=\"buttonClick(" + x.toString() + ", " + y.toString() + ")\"></button></div>";
    }
    else if (board[x][y] == "miss") {
        document.getElementById(x.toString() + "," + y.toString()).innerHTML = "<div class=\"ButtonDiv\"><button class=\"Button miss\" onclick=\"buttonClick(" + x.toString() + ", " + y.toString() + ")\"></button></div>";
    }
    else {
        document.getElementById(x.toString() + "," + y.toString()).innerHTML = "<div class=\"ButtonDiv\"><button class=\"Button\" onclick=\"buttonClick(" + x.toString() + ", " + y.toString() + ")\"></button></div>";
    }
}

function setBoardHTML(board) {
    for (var x = 0; x < 10; x++) {
        for (var y = 0; y < 10; y++) {
            updateHTMLForBoardCordinate(x, y, board);
        }
    }
}

function displayPlayer1Board() {
    setBoardHTML(player1Board);
}

function displayPlayer2Board() {
    setBoardHTML(player2Board);
}

function getActivePlayerBoard() {
    if (playerTurn == 1) {
        return player1Board;
    }
    else {
        return player2Board;
    }
}

function changeTurn() {
    if (playerTurn == 1) {
        playerTurn = 2;
    }
    else {
        playerTurn = 1;
    }
}

function buttonClick(x, y) {
    if (!player1ShipsPlaced) {
        displayPlayer1Board();
        if (player1Board[x][y] == 0) {
            player1Board[x][y] = "ship";
            player1ShipSegmentsPlaced++;

            if(player1ShipSegmentsPlaced > 3) {
                player1ShipsPlaced = true;
                displayPlayer2Board();
                playerTurn = 2;
                return;
            }

            displayPlayer1Board();
        }
        return;
    }

    if (!player2ShipsPlaced) {
        displayPlayer2Board();
        if (player2Board[x][y] == 0) {
            player2Board[x][y] = "ship";
            player2ShipSegmentsPlaced++;

            if(player2ShipSegmentsPlaced > 3) {
                player2ShipsPlaced = true;
                displayPlayer1Board();
                playerTurn = 1;
                return;
            }

            displayPlayer2Board();
        }
        return;
    }

    console.log("Button click");
    setBoardHTML(getActivePlayerBoard());
    console.log(playerTurn);
    console.log("gameplay");

    changeTurn();
}