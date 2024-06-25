//test ship factory
import { ship } from "./ship.js";

describe("Carrier ship", ()=>{
    const carrier = ship('carrier');
    carrier.hit()
    carrier.hit()

    test("The length of a Carrier is 5", ()=>{
        expect(carrier.length).toBe(5);
    });

    test("The number os hits should be 2", ()=>{
        expect(carrier.showHit()).toBe(2);
    });
    
});

describe("Patrol ship", ()=>{
    const patrol = ship('patrol');

    test("The length of a Patrol is 2", ()=>{
        expect(patrol.length).toBe(2);
    });

    test("The number os hits should be 0", ()=>{
        expect(patrol.showHit()).toBe(0);
    });
    
});

describe("Submarine", ()=>{
    const sub = ship('submarine');
    sub.hit()
    sub.hit()
    sub.hit()

    test("The length of a Submarine is 3", ()=>{
        expect(sub.length).toBe(3);
    });

    test("The number os hits should be 3", ()=>{
        expect(sub.showHit()).toBe(3);
    });
    
});