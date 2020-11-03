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

function signedIntegerToString(num) {
  switch (true) {
    case num === 0: return '0';
    case num > 0: return '+' + integerToString(num);
    case num < 0: return '-' + integerToString(-num);
  }
}


console.log(signedIntegerToString(4321));      // "+4321"
console.log(signedIntegerToString(-123));      // "-123"
console.log(signedIntegerToString(0));         // "0"