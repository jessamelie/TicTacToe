//DECLARATION DES VARIABLES NECESSAIRES
const cell = document.querySelectorAll(".cell");
const gameStatus = document.querySelector("#gameStatus");
const restartBtn = document.querySelector("#restartButton");
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
let options =["", "", "", "", "", "", "", "", ""];  //une option pour chaque cellule
let realPlayer= "X";
let gameRun = false;   //tant que le jeu continue

//INITIALISATION DU JEU
const initializedGame = () => {
    cell.forEach(cell => cell.addEventListener("click",cellClicked));   //pour chaque cellule cliquée, lancement de la f° "cellClicked"
    restartBtn.addEventListener("click",restartGame);             //dès que le bouton "restart" cliqué, lancement de la f° pour recommencer le game
    gameStatus.textContent = `${realPlayer}'s turn`; 
    gameRun = true                                               //le jeu est en cours
}

//CLICK SUR UNE CELLULE
const cellClicked = () => {
    const cellIndex = this.getAttribute("cell");   //attribution des index à chaque cell -> index attribué dans html
        if (options[cellIndex] != "" || !gameRun){
            return;
        }else{
            updateCell(this,cellIndex)
            checkWinner()
        }

}

//MISE A JOUR CELLULE
const updateCell = (cell,index) => {
    options[index] = realPlayer;
    cell.textContent = realPlayer;

}

//CHANGEMENT DE JOUEUR REAL PLAYER <-> BOT PLAYER
const changePlayer = () => {

}

//VERIFICATION DU GAGNANT (des conditions pour gagner)
const checkWinner = () => {

}

//REJOUER
const restartGame = () => {

}

initializedGame()