// code snippet 1
// function hoisted here
var counter = 5;  // counter reassigned to 5
var rate = 3;
console.log('The total value is ' + String(counter * rate));  // 15

function counter(count) {
  // ...
}


// code snippet 2
function counter(count) {
  // ...
}
// var counter and rate hoisted here. Both equal undefined

console.log('The total value is ' + String(counter * rate));  // NaN

var counter = 5;
var rate = 3;


// code snipper 3
// function hoisted here
var counter = 5;
var rate = 3;

function counter(count) {
  // ...
}

console.log('The total value is ' + String(counter * rate));  // 15


// code snippet 4
// function hoisted here
// let counter and rate hoisted here with no values here
let counter = 5;  // throws error because can't have variable and function with same name
let rate = 3;

function counter(count) {
  // ...
}

console.log('The total value is ' + String(counter * rate));