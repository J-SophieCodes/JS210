'use strict';

const STR_NUMS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function integerToString(num) {
  let str = '';

  do {
    str = STR_NUMS[num % 10] + str;
    num = Math.trunc(num / 10);
  } while (num > 0);

  return str;
}

console.log(integerToString(4321));      // "4321"
console.log(integerToString(0));         // "0"
console.log(integerToString(5000));      // "5000"