import {player} from './modules/player.js';

const player1 = player(true);
const player2 = player(false);

const boardOne = document.querySelector('#board1');
const boardTwo = document.querySelector('#board2');

const playerOneBoard = player1.game;
const playerTwoBoard = player2.game;

let gameStart = false
let player1Turn = true;
let gameFinished = false;
let horizontal = true;
let choosenShipLength;
let choosenShip;
let numShipsPlayerOne = 0;
let numShipsPlayerTwo = 0;

const hdirection = document.querySelector('.horizontal');
hdirection.classList.add('current-selected');


const vdirection = document.querySelector('.vertical');
vdirection.classList.add('current-selected');
vdirection.classList.toggle('current-selected');

hdirection.addEventListener('click', ()=>{
    if (horizontal !== true) {
        horizontal = true;
        hdirection.classList.toggle('current-selected');
        vdirection.classList.toggle('current-selected');
    };
});

vdirection.addEventListener('click', ()=>{
    if (horizontal !== false) {
        horizontal = false;
        hdirection.classList.toggle('current-selected');
        vdirection.classList.toggle('current-selected');
    };
});
 

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
                if (gameStart) {
                   if ((! player1Turn) && (! gameFinished)) {
                        playerOneBoard.receiveAttack(x,y);
                        player1Turn = true
                    }; 
                } else if (numShipsPlayerOne < 5) {
                    if ((horizontal) && (x<=(10-choosenShipLength))){
                        const shipLocation = [];
                        for (let i=0; i<choosenShipLength; i++) {
                            shipLocation.push([x+i,y])
                        }
                        playerOneBoard.createShip(choosenShip, shipLocation);
                        numShipsPlayerOne  = playerOneBoard.getNumShips()
                    } else if ((! horizontal) && (y<=(10-choosenShipLength))){
                        const shipLocation = [];
                        for (let i=0; i<choosenShipLength; i++) {
                            shipLocation.push([x,y+i])
                        }
                        playerOneBoard.createShip(choosenShip, shipLocation);
                        numShipsPlayerOne = playerOneBoard.getNumShips()
                    }
                    console.log(numShipsPlayerOne);
                    checkGameStart()
                }
                
            });

            const gridElement2 = document.createElement('div')
            gridElement2.id = `g${x}${y}`;
            gridElement2.classList.add('grid-element');
            boardTwo.appendChild(gridElement2);
            gridElement2.addEventListener('click', ()=>{
                if (gameStart) {
                  if (player1Turn && (! gameFinished)) {
                    playerTwoBoard.receiveAttack(x,y);
                    gameFinished = playerTwoBoard.getAllShipSunk();
                        if (! gameFinished) {
                            player1Turn = false;
                            setTimeout(computerPlay, 1000); 
                        };  
                
                    }; 
                }  else if (numShipsPlayerTwo < 5) {
                        if ((horizontal) && (x<=(10-choosenShipLength))){
                            const shipLocation = [];
                            for (let i=0; i<choosenShipLength; i++) {
                                shipLocation.push([x+i,y])
                            }
                            playerTwoBoard.createShip(choosenShip, shipLocation);
                            numShipsPlayerTwo = playerTwoBoard.getNumShips();
                        } else if ((! horizontal) && (y<=(10-choosenShipLength))){
                            const shipLocation = [];
                            for (let i=0; i<choosenShipLength; i++) {
                                shipLocation.push([x,y+i])
                            }
                            playerTwoBoard.createShip(choosenShip, shipLocation);
                            numShipsPlayerTwo = playerTwoBoard.getNumShips();
                        };
                        console.log(numShipsPlayerTwo);
                        checkGameStart()
                }
            })
        };
    };
};

createGrid()
const shipDict = {
    carrier:5,
    battleship:4,
    destroyer:3,
    submarine:3,
    patrol:2
};

const allShips = document.querySelectorAll('.ship-names');

function clearAllSelected () {
    allShips.forEach((ship)=>{
        ship.classList.remove('current-selected');
        ship.classList.add('current-selected');
        ship.classList.toggle('current-selected');
    })
}

allShips.forEach((ship)=>{
    ship.classList.add('current-selected');
    ship.classList.toggle('current-selected');
    ship.addEventListener('click', ()=>{
        clearAllSelected()
        choosenShipLength = shipDict[ship.textContent];
        choosenShip = ship.textContent;
        ship.classList.toggle('current-selected')
    });
});

function checkGameStart() {
    if((numShipsPlayerOne+numShipsPlayerTwo) === 10) {
        gameStart = true;
        
        allShips.forEach((ship)=>{
            ship.classList.remove('current-selected');
        });
        hdirection.classList.remove('current-selected');
        vdirection.classList.remove('current-selected');
    };
};