import {player} from './modules/player.js';

const player1 = player();
const player2 = player();

const boardOne = document.querySelector('#board1');
const boardTwo = document.querySelector('#board2');

function createGrid() {
    for (let y=9; y>=0; y--) {
        for (let x=0; x<10; x++) {
            const gridElement1 = document.createElement('div')
            gridElement1.id = `[${x},${y}]`;
            gridElement1.classList.add('grid-element');
            boardOne.appendChild(gridElement1);

            const gridElement2 = document.createElement('div')
            gridElement2.id = `[${x},${y}]`;
            gridElement2.classList.add('grid-element');
            boardTwo.appendChild(gridElement2);
        };
    };
};

createGrid()

