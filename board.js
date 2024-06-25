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
            });
        };
                
    };

    return {getNumShips , getBoard, createShip}
}