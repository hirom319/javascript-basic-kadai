"use strict";

let num;
num = 15;

if (Number.isInteger(num) && num > 0) {
  if (num % 3 === 0 && num % 5 === 0) {
    console.log("３と５の倍数です");
  } else if (num % 3 === 0) {
    console.log("３の倍数です");
  } else if (num % 5 === 0) {
    console.log("５の倍数です");
  } else {
    console.log(num);
  }
} else {
  console.log("正の整数ではありません");
}
