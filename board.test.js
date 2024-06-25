import { gameBoard } from "./board.js"

describe("Test game board functionality", ()=>{

    const board = gameBoard();
    board.createShip("destroyer", [[0,0],[1,0],[2,0]]);
    board.createShip("patrol", [[6,3],[6,4]]);

    test("Check Both ships were created", ()=>{
        expect(board.getNumShips()).toBe(2);
    });

    test("Check destroyer if destroyer is at position [0,0]", ()=>{
        expect(board.getBoard()[0][0]).toBe('ship1');
    });

    test("Check destroyer if destroyer is at position [0,2]", ()=>{
        expect(board.getBoard()[0][2]).toBe('ship1');
    });

    test("Check destroyer if destroyer is not at position [0,3]", ()=>{
        expect(board.getBoard()[0][3]).not.toBe('ship1');
    });

    
    test("Check if patrol is at position [6,3]", ()=>{
        expect(board.getBoard()[3][6]).toBe('ship2');
    });

    test("Check if patrol is at position [6,5]", ()=>{
        expect(board.getBoard()[4][6]).toBe('ship2');
    });

    test("Check if patrol is not at position [0,3]", ()=>{
        expect(board.getBoard()[3][0]).not.toBe('ship2');
    });
})