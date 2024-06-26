import { ship } from "./ship.js";

export const gameBoard = function (firstMove) {
    let numOfShips = 0;
    const getNumShips = () => numOfShips;

    let allShipSunk = false;
    const getAllShipSunk = () => allShipSunk;

    const shipStorage = {};
    const board = [];
    const getBoard = () => board;

    for (let y=0; y<10; y++) {
        board[y] = [];
        for (let x=0; x<10; x++) {
            board[y].push('o');
        };
    };

    const checkIfBoardEmpty = (positions) => {
        let empty = true;
        positions.forEach((position)=>{
            if (board[position[1]][position[0]] !== 'o') {
                empty = false;
            }
        })

        return empty
    };


    const createShip = (shipName, positions) => {
        
        const newShip = ship(shipName);
        const isEmpty = checkIfBoardEmpty(positions)


        if ((isEmpty) && (positions.length === newShip.length)) {
            numOfShips++;
            shipStorage[`ship${numOfShips}`] = newShip;
            positions.forEach((position) => {
                board[position[1]][position[0]] = `ship${numOfShips}`;
                if (firstMove) {
                    const grid = document.querySelector(`#board1 #g${position[0]}${position[1]}`);
                    grid.setAttribute('style', 'background:red');
                } else {
                    // const grid = document.querySelector(`#board2 #g${position[0]}${position[1]}`);
                    // grid.setAttribute('style', 'background:green');
                }
            });
        };
                
    };

    const receiveAttack = (x, y) => {
        const coordinateIcon = board[y][x];
        let shipHit;
        const end = document.querySelector('.end');
        if ((coordinateIcon === 'o') || (coordinateIcon === 'x')) {
            shipHit = false;
            end.textContent = 'miss!'
        } else {
            shipHit = true;
            end.textContent = 'hit!'

        };

        if (shipHit) {
            const ship = shipStorage[coordinateIcon];
            ship.hit();
            if (ship.isSunk()) {
                numOfShips--;
            };

            if(numOfShips === 0) {
                allShipSunk = true;
                end.textContent = "Game Over!"
            };
        };

        if (firstMove) {
            const grid = document.querySelector(`#board1 #g${x}${y}`)
            grid.setAttribute('style', 'background:black');
        } else {
            const grid = document.querySelector(`#board2 #g${x}${y}`);
            grid.setAttribute('style', 'background:black');
        }
        
        board[y][x] = 'x'
        
    };

    return {getNumShips , getBoard, createShip, receiveAttack, getAllShipSunk}
}