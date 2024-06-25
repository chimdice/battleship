//test ship factory
import { ship } from "./ship.js";

describe("Carrier ship", ()=>{
    const carrier = ship('carrier');
    carrier.hit()
    carrier.hit()

    test("The ship is not sunken", ()=>{
        expect(carrier.isSunk()).toBe(false);
    });
    
});

describe("Patrol ship", ()=>{
    const patrol = ship('patrol');

    test("The ship is not sunken", ()=>{
        expect(patrol.isSunk()).toBe(false);
    });
    
});

describe("Submarine", ()=>{
    const sub = ship('submarine');
    sub.hit()
    sub.hit()
    sub.hit()

    test("The ship sunk", ()=>{
        expect(sub.isSunk()).toBe(true);
    });
    
});