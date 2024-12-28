"use strict";

const submissionBtn = document.getElementById("submission-btn");
const remainderElement = document.getElementById("remainder");
const checkIfEvenElement = document.getElementById("check-if-even");
const lostNumbersElement = document.getElementById("lost-numbers");

const lostNumbers = [4, 8, 15, 16, 23, 42];

// Create a function called `returnTheRemainder` that returns the remainder of the division of two numbers.
function returnTheRemainder(num1, num2) { 
    return num1 % num2;
 } 

 // Create a function called `checkIfEven`. This function should return `true` or `false` based on the input. 
 function checkIfEven(num) { 
    return num % 2 === 0;
 }

 // Create a function called `getTheFourthElement`. This function should take in the existing array, `lostNumbers`, and return the fourth element of the array.
function getTheFourthElement(array) {
     return array[3]; // Arrays are zero-indexed, so the fourth element is at index 3.
 } 
 function render() {
    // Get the remainder of 17 divided by 5
    const remainder = returnTheRemainder(17, 5); 

    remainderElement.innerText = `The remainder of 17 divided by 5 is ${remainder}.`;
    // Check if the number 17 is even 
    const isEven = checkIfEven(17);
    checkIfEvenElement.innerText = `Is 17 even? ${isEven}`;

    // Get the fourth element of the lostNumbers array
    const fourthElement = getTheFourthElement(lostNumbers); 
    lostNumbersElement.innerText = `The fourth element of the lost numbers is ${fourthElement}.`;
 } 
 
 submissionBtn.addEventListener("click", function () {
     render();
 });