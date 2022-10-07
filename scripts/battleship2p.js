function makeBoard(width, height) {
    var html = "";
    html += "<table>"
    for (var y = 0; y < height; y++) {
        html += "<tr>";
        for (var x = 0; x < width; x++) {
            html += "<td class=\"ButtonTD\" id=" + x.toString() + "," + y.toString() + "><div class=\"ButtonDiv\"><button class=\"Button\" onclick=\"buildShips(" + x.toString() + ", " + y.toString() + ")\"></button></div></td>";
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

setActiveBoardHTML(getActivePlayerBoard());

var player1ShipsPlaced = false;
var player1ShipSegmentsPlaced = 0;
var player2ShipsPlaced = false;
var player2ShipSegmentsPlaced = 0;

function getActivePlayerBoard() {
    if (playerTurn = 1) {
        return player1Board;
    }
    else {
        return player2Board;
    }
}

function setActiveBoardHTML(board) {
    var activeBoard = getActivePlayerBoard();

    for (var x = 0; x < 10; x++) {
        for (var y = 0; y < 10; y++) {
            if (activeBoard[x][y] == "ship") {
                document.getElementById(x.toString() + "," + y.toString()).innerHTML = "<div class=\"ButtonDiv\"><button class=\"Button ship\" onclick=\"buttonClick(" + x.toString() + ", " + y.toString() + ")\"></button></div>";
            }
            else if (activeBoard[x][y] == "hitShip") {
                document.getElementById(x.toString() + "," + y.toString()).innerHTML = "<div class=\"ButtonDiv\"><button class=\"Button hitShip\" onclick=\"buttonClick(" + x.toString() + ", " + y.toString() + ")\"></button></div>";
            }
        }
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

function buildShips(x, y) {
    console.log("Build ship");
    if (!player1ShipsPlaced) {
        if (activeBoard[x][y] == 0) {
            console.log(player1ShipSegmentsPlaced);
            activeBoard[x][y] = "ship";
            player1ShipSegmentsPlaced++;

            if(player1ShipSegmentsPlaced > 20) {
                player1ShipsPlaced = true;
            }
        }

        changeTurn();
        setActiveBoardHTML(activeBoard);
        return;
    }

    if (!player2ShipsPlaced) {
        if (activeBoard[x][y] == 0) {
            console.log(player2ShipSegmentsPlaced);
            activeBoard[x][y] = "ship";
            player2ShipSegmentsPlaced++;

            if(player2ShipSegmentsPlaced > 20) {
                player2ShipsPlaced = true;
            }
        }

        changeTurn();
        setActiveBoardHTML(activeBoard);
        return;
    }

}

function buttonClick(x, y) {
    console.log("Button click");
    //var activeBoard = getActivePlayerBoard();

    //setActiveBoardHTML(activeBoard);
}