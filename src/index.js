import {player} from './modules/player.js';

const player1 = player(true);
const player2 = player(false);

const boardOne = document.querySelector('#board1');
const boardTwo = document.querySelector('#board2');

const playerOneBoard = player1.game;
const playerTwoBoard = player2.game;

let player1Turn = true;
let gameFinished = false;

function computerPlay () {
    const x = Math.floor(Math.random()*9)
    const y = Math.floor(Math.random()*9)
    playerOneBoard.receiveAttack(x, y);
    gameFinished = playerOneBoard.getAllShipSunk();
    player1Turn = true;
}

function createGrid() {
    for (let y=9; y>=0; y--) {
        for (let x=0; x<10; x++) {
            const gridElement1 = document.createElement('div')
            gridElement1.id = `g${x}${y}`;
            gridElement1.classList.add('grid-element');
            boardOne.appendChild(gridElement1);
            gridElement1.addEventListener('click', ()=>{
                if ((! player1Turn) && (! gameFinished)) {
                    playerOneBoard.receiveAttack(x,y);
                    player1Turn = true
                };
            })

            const gridElement2 = document.createElement('div')
            gridElement2.id = `g${x}${y}`;
            gridElement2.classList.add('grid-element');
            boardTwo.appendChild(gridElement2);
            gridElement2.addEventListener('click', ()=>{
                if (player1Turn && (! gameFinished)) {
                    playerTwoBoard.receiveAttack(x,y);
                    gameFinished = playerTwoBoard.getAllShipSunk();
                    if (! gameFinished) {
                       player1Turn = false;
                        setTimeout(computerPlay, 1000); 
                    };  
                };
            })
        };
    };
};

createGrid()
playerOneBoard.createShip('destroyer', [[0,0], [1,0], [2,0]])
playerOneBoard.createShip('carrier', [[9,0], [9,1], [9,2], [9,3], [9,4]])
playerTwoBoard.createShip('battleship', [[2,2], [3,2], [4,2], [5,2]])

