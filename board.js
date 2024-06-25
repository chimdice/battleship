import { ship } from "./ship.js";

export const gameBoard = function () {

    let numOfShips = 0;
    const getNumShips = () => numOfShips;

    const shipStorage = {};
    const board = [];
    const getBoard = () => board;

    for (let y=0; y<10; y++) {
        board[y] = [];
        for (let x=0; x<10; x++) {
            board[y].push('o');
        };
    };


    const createShip = (shipName, position, direction) => {
        
        const newShip = ship(shipName);
        

        if (direction === 'vertical') {
            const maxPosition = 10 - newShip.length;
            if (position[1] < maxPosition) {
                numOfShips++;
                shipStorage[`ship${numOfShips}`] = newShip;
                for (let i=0; i<newShip.length; i++) {
                    board[position[1]+i][position[0]] = `ship${numOfShips}`
                };
            };
        } else if (direction === 'horizontal') {
            const maxPosition = 10 - newShip.length;
            if (position[0] < maxPosition) {
                numOfShips++;
                shipStorage[`ship${numOfShips}`] = newShip;
                for (let i=0; i<newShip.length; i++) {
                    board[position[1]][position[0]+i] = `ship${numOfShips}`
                };
            };
        };
    };

    return {getNumShips , getBoard, createShip}
}