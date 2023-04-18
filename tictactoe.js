//DECLARATION DES VARIABLES NECESSAIRES
const cells = Array.from(document.getElementsByClassName("cell"));
const gameStatus = document.querySelector("#gameStatus");
const restartBtn = document.querySelector("#restartButton");

let X ="X"
let O = "O"
let currentPlayer = X
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
    cells.forEach(cell => cell.addEventListener("click", cellClicked)) 
}
function cellClicked(e){
    
    const cellId = e.target
    cellId.innerText = currentPlayer;
    //recherche d'un index spécifique dans un tableau
    const index = Array.from(cells).indexOf(cellId);
    gridFilling[index] = currentPlayer;
    //changement de joueur
    currentPlayer = currentPlayer == X ? O : X;
    gameStatus.textContent = `${currentPlayer}'s turn`;
}

//POUR RECOMMENCER LA PARTIE 
restartBtn.addEventListener("click", restartGame)
function restartGame() {
    gridFilling.fill(null)
    cells.forEach(cell => {cell.innerText = ""
})
//reinitiation par défaut du joueur
currentPlayer= X
gameStatus.textContent = `${currentPlayer}'s turn`
}

initializedGame()
