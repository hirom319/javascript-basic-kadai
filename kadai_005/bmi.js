'use strict';

let weight;
let height;

function bmiCalc(weight, height) {
    const bmi = weight / (height * height)
    console.log(bmi)
    return bmi
}

bmiCalc(70, 1.7)