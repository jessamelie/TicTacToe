//DECLARATION DES VARIABLES NECESSAIRES
const cells = Array.from(document.getElementsByClassName("cell"));
const gameStatus = document.querySelector("#gameStatus");
const restartBtn = document.querySelector("#restartButton");

const playerX ="X"
const playerO = "O"
let currentPlayer= playerX;
let gridFilling = Array(9).fill(null)

const winConditions = [                      
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],           
    [1,4,7],                    
    [2,5,8],
    [0,4,8],
    [2,4,6],
]


//INITIALISATION DU JEU
const initializedGame = () => {
    cells.forEach(cell => cell.addEventListener("click", cellClicked));    
}

function cellClicked(e){
    const cellIndex = e.target.cellIndex

    if(!gridFilling[cellIndex]){
        gridFilling[cellIndex]=currentPlayer;
        e.target.innerText = currentPlayer;
    }
}

initializedGame()
