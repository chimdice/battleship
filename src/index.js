import {player} from './modules/player.js';

const player1 = player(true);
const player2 = player(false);

const boardOne = document.querySelector('#board1');
const boardTwo = document.querySelector('#board2');

const playerOneBoard = player1.game;
const playerTwoBoard = player2.game;


function createGrid() {
    for (let y=9; y>=0; y--) {
        for (let x=0; x<10; x++) {
            const gridElement1 = document.createElement('div')
            gridElement1.id = `g${x}${y}`;
            gridElement1.classList.add('grid-element');
            boardOne.appendChild(gridElement1);
            gridElement1.addEventListener('click', ()=>{
                playerOneBoard.receiveAttack(x,y)
            })

            const gridElement2 = document.createElement('div')
            gridElement2.id = `g${x}${y}`;
            gridElement2.classList.add('grid-element');
            boardTwo.appendChild(gridElement2);
        };
    };
};

createGrid()
playerOneBoard.createShip('destroyer', [[0,0], [1,0], [2,0]])
playerOneBoard.createShip('carrier', [[9,0], [9,1], [9,2], [9,3], [9,4]])
playerTwoBoard.createShip('battleship', [[2,2], [3,2], [4,2], [5,2]])
