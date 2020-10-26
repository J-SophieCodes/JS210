logValue();   // prints 'Hello, world!'

function logValue() {     // when hoisted, function name and body moved on top of function call
  console.log('Hello, world!');
}


// Further exploration
var logValue = 'foo';

function logValue() {
  console.log('Hello, world!');
}

console.log(typeof logValue);
// prints string; functions are hoisted before variables
// logValue is subsequently reassigned to 'foo'
// WHEN HOISTED:
// function logValue() {
//   console.log('Hello, world!');
// }
// logValue = 'foo';  // redundant declaration omitted; reassignment here
// console.log(typeof logValue);