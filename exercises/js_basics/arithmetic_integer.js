// in browser
// let num1 = Number(prompt("==> Enter the first number:"));
// let num2 = Number(prompt("==> Enter the second number:"));

// in cml
const rlSync = require("readline-sync");
let num1 = Number(rlSync.question("==> Enter the first number:"));
let num2 = Number(rlSync.question("==> Enter the second number:"));

console.log(`==> ${num1} + ${num2} = ${num1 + num2}`);
console.log(`==> ${num1} - ${num2} = ${num1 - num2}`);
console.log(`==> ${num1} * ${num2} = ${num1 * num2}`);
console.log(`==> ${num1} / ${num2} = ${num1 / num2}`);
console.log(`==> ${num1} % ${num2} = ${num1 % num2}`);
console.log(`==> ${num1} ** ${num2} = ${num1 ** num2}`);