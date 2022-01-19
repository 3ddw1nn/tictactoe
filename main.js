//Setup your html and write a javascript function that
//render the contents of the gameboard array to the webpage
const board = document.querySelector(".gameBoard")

//make gameboard as an array and store some values inside
const gameModule = (()=>{
    const gameBoard =[
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
    ]
    console.log(gameBoard);
    return {
        gameBoard
        
    }

})();


const playerFactory = (player, marker, playerScore) => {
    const getPlayer = player;
    const getMarker = marker;
    const getPlayerScore = playerScore;

    return {getPlayer, getMarker, getPlayerScore
    };
};

let turn = 0;
const player1 = playerFactory("Player 1", "X", 0);
const player2 = playerFactory("Player 2", "O", 0);
console.log(player1);
let winningMarker = "";



const displayController = (()=>{
    'use strict';
    let p1Score = document.querySelector(".p1Score")
    p1Score.textContent = player1.getPlayer + " : "+ player1.getPlayerScore;
    let p2Score = document.querySelector(".p2Score")
    p2Score.textContent = player2.getPlayer + " : "+ player2.getPlayerScore;

    const winGame = function (){
        if(player1.getPlayerScore == 3){
            alert(player1.getPlayer + " Wins the Game")
            player1.getPlayerScore = 0;
            player2.getPlayerScore = 0;
            p1Score.textContent = player1.getPlayer + " : "+ player1.getPlayerScore;
            p2Score.textContent = player2.getPlayer + " : "+ player2.getPlayerScore;
        } else if(player2.getPlayerScore == 3){
            alert(player2.getPlayer + " Wins the Game")
            player1.getPlayerScore = 0;
            player2.getPlayerScore = 0;
            p1Score.textContent = player1.getPlayer + " : "+ player1.getPlayerScore;
            p2Score.textContent = player2.getPlayer + " : "+ player2.getPlayerScore;
        }
    }
    let userName1Select = document.querySelector(".userName1")
    userName1Select.addEventListener("click", () => {
        player1.getPlayer = prompt("Set Player 1 Name",player1.getPlayer);
        p1Score.textContent = player1.getPlayer + " : "+ player1.getPlayerScore;
        console.log(player1.getPlayer);

    })
    let userName2Select = document.querySelector(".userName2")
    userName2Select.addEventListener("click", () => {
        player2.getPlayer = prompt("Set Player 2 Name",player2.getPlayer);
        console.log(player2);
        p2Score.textContent = player2.getPlayer + " : "+ player2.getPlayerScore;
    })
    let quit = document.querySelector(".quit")
    quit.addEventListener("click", () => {
        if(turn % 2 == 0){
            player2.getPlayerScore++
            p1Score.textContent = player1.getPlayer + " : "+ player1.getPlayerScore;
            p2Score.textContent = player2.getPlayer + " : "+ player2.getPlayerScore;
        }else {
            player1.getPlayerScore++
            p1Score.textContent = player1.getPlayer + " : "+ player1.getPlayerScore;
            p2Score.textContent = player2.getPlayer + " : "+ player2.getPlayerScore;
        }
        _resetGame();

    })

    let xSelect = document.querySelector(".X")
    let oSelect = document.querySelector(".O")
    xSelect.addEventListener("click", () => {
        player1.getMarker = "X";
        player2.getMarker = "O";
        xSelect.style.background= "rgb(173, 250, 208)";
        oSelect.style.background= "rgb(255, 255, 255)"; 
        console.log(player1);
        console.log(player2);
        _resetGame();
    })
    oSelect.addEventListener("click", () => {
        player1.getMarker = "O";
        player2.getMarker = "X";
        oSelect.style.background= "rgb(173, 250, 208)";
        xSelect.style.background= "rgb(255, 255, 255)"; 
        console.log(player1);
        console.log(player2);
        _resetGame();
    })

    function _assignWinner(){
        if(winningMarker == player1.getMarker) {
            alert(player1.getPlayer + " Won Round")
            player1.getPlayerScore++;
            p1Score.textContent = player1.getPlayer + " : "+ player1.getPlayerScore;
            console.log(player1);
        }
        else if (winningMarker == player2.getMarker) {
            alert(player2.getPlayer + " Won Round")
            player2.getPlayerScore++;
            p2Score.textContent = player2.getPlayer + " : "+ player2.getPlayerScore;
            console.log(player2);
        }else{
            console.log("did not work")
        }
        winGame();
        _resetGame();
    }
    function _resetGame(){
        turn = 0;
        let resetList = document.querySelectorAll(".cell")
            resetList.forEach(eachReset => {
                eachReset.textContent = "";
            })
        
        gameModule.gameBoard = gameModule.gameBoard.map(x => "");
        console.log(gameModule.gameBoard); 
        console.log(turn);

    }    

    const createGameBoard = function(){
        for(let i = 0; i < gameModule.gameBoard.length ; i++) {
            let newCell = document.createElement("div")
            board.appendChild(newCell);
            newCell.classList.add("cell")
            newCell.setAttribute("data-cell",i + 1);
        }
    }

    const addMarkerGameBoard = function(){
        let cellList = document.querySelectorAll(".cell")
        cellList.forEach(eachCell => {
            eachCell.addEventListener("click", () => {
                if(turn % 2 == 0) {
                    if(!eachCell.textContent){
                        eachCell.textContent = player1.getMarker;
                        turn++;
                        let cellID = eachCell.getAttribute("data-cell");
                        console.log("cellID : " + cellID);
                        gameModule.gameBoard.splice(cellID - 1,1,player1.getMarker);
                    }
                }
                else {
                    if(!eachCell.textContent){
                        eachCell.textContent = player2.getMarker;
                        turn++;
                        let cellID = eachCell.getAttribute("data-cell");
                        console.log("cellID : " + cellID);
                        gameModule.gameBoard.splice(cellID - 1,1,player2.getMarker);
                    }
                }
                console.log("turn: " + turn);
                console.log(gameModule.gameBoard);
                displayController.columnWin();
                displayController.rowWin();
                displayController.diagonalWin();
            });
        })
    }
    const columnWin = function (){
        
        for(let i = 0; i < 3; i++){
            let columns = [];
            for (let j=0; j < 3; j++){
                let columnMarker = gameModule.gameBoard[ j * 3 + i]
                columns.push(columnMarker);
                }
                console.log(columns)
                if ((columns.every(val => val === "X")) || (columns.every(val => val === "O"))){
                    winningMarker = columns[0];
                    _assignWinner();
                }else {
                    console.log("did not win yet")
                }
          }
    
    }
    const rowWin = function (){
        for(let i = 0; i < 3; i++){
            let rows = [];
            for (let j=0; j < 3; j++){
                let rowMarker = gameModule.gameBoard[ j + i + i + i]
                rows.push(rowMarker);
            }
            console.log(rows);
            if ((rows.every(val => val === "X")) || (rows.every(val => val === "O"))) {
                winningMarker = rows[0];
                _assignWinner();

            }else {
                console.log("did not win yet")
            }
        }
    }
    const diagonalWin = function (){
            let diagonal1 = [];

            for (let i = 0; i < 3; i++){
                let diagonal1Marker = gameModule.gameBoard[ i * 4]
                diagonal1.push(diagonal1Marker);
            };

            if ((diagonal1.every(val => val === "X")) || (diagonal1.every(val => val === "O"))) {
                winningMarker = diagonal1[0];
                _assignWinner();
            } else {
                console.log("did not win yet")
            };

            let diagonal2 = [];

            for (let j = 0; j < 3; j++){
                let diagonal2Marker = gameModule.gameBoard[ j + j + 2]
                diagonal2.push(diagonal2Marker);
            }
            console.log("this is diagonal1: " + diagonal1);
            console.log("this is Diagonal2: " + diagonal2);

            if ((diagonal2.every(val => val === "X")) || (diagonal2.every(val => val === "O"))) {
                winningMarker = diagonal2[0];
                _assignWinner();
            }else {
                console.log("did not win yet")
            }
    }

    return {
        createGameBoard,
        addMarkerGameBoard,
        columnWin,
        rowWin,
        diagonalWin,
        winGame,
    }


})();
displayController.createGameBoard();
displayController.addMarkerGameBoard();



