'use strict';

let weight;
let height;

function bmiCalc(weight, height) {
    const bmi = weight / (height * height)
    return bmi;
}

console.log(bmiCalc(68, 1.7));
