const DIGITS = {
  0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9,
};

const SIGNS = {
  '+': 1, '-': -1,
};

function stringToInteger(str) {
  let num = 0;

  for (let idx = 0; idx < str.length; idx++) {
    let char = str[idx];
    num = (num * 10) + DIGITS[char];
  }

  return num;
}

function stringToSignedInteger (str) {
  let prefix;

  if (str[0] in SIGNS) {
    [prefix, ...str] = str;
  }

  let sign = SIGNS[prefix] || 1;

  return sign * stringToInteger(str);
}

console.log(stringToSignedInteger('4321'));      // 4321
console.log(stringToSignedInteger('-570'));      // -570
console.log(stringToSignedInteger('+100'));      // 100

/* SOLUTION

function stringToSignedInteger(string) {
  switch (string[0]) {
    case '-': return -stringToInteger(string.slice(1));
    case '+': return stringToInteger(string.slice(1));
    default:  return stringToInteger(string);
  }
}

*/