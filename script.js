let firstHeader = document.getElementById("first");
let secondHeader = document.getElementById("second");
let sumEl = document.getElementById("sum-el");

let a = 8;
let b = 2;

firstHeader.textContent = a;
secondHeader.textContent = b;


function add() {
    let sum = a + b
    sumEl.textContent = "The result is: " + sum
}

function subtract(){
    let minus = a - b
    sumEl.textContent =  "The result is: " + minus
}

function divide(){
    let quotient = a / b
    sumEl.textContent = "The result is: " + quotient
}

function mutiply(){
    let multi = a * b
    sumEl.textContent = "The result is: " + multi
}

add();
subtract();
divide();
mutiply();