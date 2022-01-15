//Setup your html and write a javascript function that
//render the contents of the gameboard array to the webpage
const board = document.querySelector(".gameBoard")

//make gameboard as an array and store some values inside
const gameModule = (()=>{
    const gameBoard =[
        "X",
        "O",
        "X",
        "O",
        "X",
        "O",
        "X",
        "O",
        "X",
    ]
    console.log(gameBoard);
    return {
        gameBoard
        
    }

})();

const playerFactory = (player, marker) => {
    const getPlayer = player;
    const getMarker = marker;
    const win = {}
    return {getPlayer, getMarker};
  };
const player1 = playerFactory("player1", "X");
console.log(player1);
createGameBoard();
function createGameBoard(){
    for(i = 0; i < gameModule.gameBoard.length ; i++) {
        let cell = document.createElement("div")
        board.appendChild(cell);
        cell.classList.add("cell")
        cell.setAttribute("data-cell",i + 1);

    }
}
function addMarkerGameboard (){
    let cellList = document.querySelectorAll(".cell")
    cellList.forEach(eachCell => {
        eachCell.addEventListener("click", () => {
            eachCell.textContent = "X"
        });
    })
}
addMarkerGameboard();

let turn = 0
// add turn variable where it incriments ++


// build the functions that allow the players to add marks to a specific
// spot on the board. and then tie it to the DOM
//letting players click on the gameboard to place their marker

// let n = 3;
// let board = document.querySelector(".board")
// function makecell() {
//     for (let i = 0; i < n; i++) {
//         let row = document.createElement("div");
//         row.classList.add("gridRow");
//         board.append(row);
//     };
// };
// makecell();

// function makeColumns() {
//     const gridcell = document.querySelectorAll(".gridRow")
//     gridcell.forEach(forEachRow => {
//     for(let i = 0; i < n; i++) {
//         let newColumn = document.createElement("div");
//         newColumn.classList.add("gridColumn");
//         forEachRow.append(newColumn);
//     };}   
// );};
// makeColumns();
// selectGrid();
// function selectGrid(){
//     const gridCell = document.querySelectorAll(".gridColumn");
//     gridCell.forEach(cell => { 
//         cell.addEventListener("click", e => {
//             //put marker in  this grid
//             cell.textContent = "";
//         });
//     }
//     )};
// hoverColor();
// const gameBoard = (() => {
//     const add = (a, b) => a + b;
//     const sub = (a, b) => a - b;
//     const mul = (a, b) => a * b;
//     const div = (a, b) => a / b;
//     return {
//       add,
//       sub,
//       mul,
//       div,
//     };
//   })();
  
//   calculator.add(3,5)

// const playerFactory = (name, age) => {
//     const sayHello = () => console.log('hello!');
//     return { name, age, sayHello };
//   };
  
//   const jeff = playerFactory('jeff', 27);
  
//   console.log(jeff.name); // 'jeff'
  
//   jeff.sayHello();
