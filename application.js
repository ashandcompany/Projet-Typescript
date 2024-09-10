"use strict";
function puissance(a, b) {
    let result = 1;
    for (let i = 0; i < b; i++) {
        result = result * a;
    }
    console.log(result);
    return result;
}
let calcul = 1 / puissance(2, 3);
console.log(calcul);
