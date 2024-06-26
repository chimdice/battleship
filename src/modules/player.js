import {gameBoard } from "./board.js";

export function player(firstMove) {
    const game = gameBoard(firstMove);


    return {game}
};