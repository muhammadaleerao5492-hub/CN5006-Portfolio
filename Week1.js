// Week 1 Portfolio: Arithmetic Operations
const prompt = require('prompt-sync')();

console.log("=== Week 1: Basic Arithmetic Program ===");

const num1 = parseFloat(prompt('Enter the first number: '));
const num2 = parseFloat(prompt('Enter the second number: '));

const add = num1 + num2;
const subtract = num1 - num2;
const multiply = num1 * num2;
const divide = num2 !== 0 ? (num1 / num2) : "Cannot divide by zero";

console.log(`\nResults for ${num1} and ${num2}:`);
console.log(`Addition (${num1} + ${num2}): ${add}`);
console.log(`Subtraction (${num1} - ${num2}): ${subtract}`);
console.log(`Multiplication (${num1} * ${num2}): ${multiply}`);
console.log(`Division (${num1} / ${num2}): ${divide}`);