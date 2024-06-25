const shipDict = {
    carrier:5,
    battleship:4,
    destroyer:3,
    submarine:3,
    patrol:2
};

export function ship (shipType) {

    const length = shipDict[shipType];
    let numHit = 0;

    const hit = () => numHit++;
    const showHit = () => numHit;
    const isSunk = () => numHit === length;

    return {length, hit, isSunk};
};