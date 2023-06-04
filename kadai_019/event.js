'use strict';

const text = document.getElementById("text");
const btn = document.getElementById("btn");

btn.addEventListener('click', () => {
    text.innerText = "ボタンをクリックしました";
});
