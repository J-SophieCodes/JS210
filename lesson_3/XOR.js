// Write a function named isXor that takes two arguments, 
// and returns true if exactly one argument is truthy, false otherwise. 
// Your function should work with the boolean values of true and false, 
// but also any JavaScript values based on their "truthiness".

// function isXor(arg1, arg2) {
//   return !!(arg1 && !arg2 || !arg1 && arg2)
// }

function isXor(value1, value2) {
  return !!value1 !== !!value2;
}

function evaluate(actual, expected) {
  console.log(actual === expected);
}


evaluate(isXor(false, true), true);
evaluate(isXor(true, false), true);
evaluate(isXor(false, false), false);
evaluate(isXor(true, true), false);


evaluate(isXor(false, 3), true);
evaluate(isXor('a', undefined), true);
evaluate(isXor(null, ''), false);
evaluate(isXor('2', 23), false);