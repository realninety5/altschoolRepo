// ========================
// DO NOT EDIT THIS BLOCK
const assignment = {};
// ========================



function sumOfNumbers(arrayOfNumbers) {
    return arrayOfNumbers.reduce((a, b) => a+b, 0);
}



function evenOut(value) {
    return value % 2 == 0;
}
function countEvenNumbers(arrayOfNumbers) {
    return arrayOfNumbers.filter(evenOut).length;
}


function celsiusToFahrenheit(arrayOfNumbers) {
    return arrayOfNumbers.map(toF);
}

function toF(value) {
    return Math.trunc((value * 9/5) + 32)
}


// ========================
// DO NOT EDIT THIS BLOCK
module.exports = assignment;
// ========================

