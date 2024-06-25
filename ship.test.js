//test ship factory
import { ship } from "./ship.js";

describe("Carrier ship", ()=>{
    const carrier = ship('carrier');

    test("The length of a Carrier is 5", ()=>{
        expect(carrier.length).toBe(5);
    });
    
});

describe("Patrol ship", ()=>{
    const patrol = ship('patrol');

    test("The length of a Patrol is 2", ()=>{
        expect(patrol.length).toBe(2);
    });
    
});

describe("Submarine", ()=>{
    const sub = ship('submarine');

    test("The length of a Submarine is 3", ()=>{
        expect(sub.length).toBe(3);
    });
    
});