const DIGITS = {
  0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9,
};

let stringToInteger = function (str) {
  let num = 0;

  for (let idx = 0; idx < str.length; idx++) {
    let char = str[idx];
    num = (num * 10) + DIGITS[char];
  }

  console.log(num);
  return num;
};

stringToInteger('4321');      // 4321
stringToInteger('570');       // 570