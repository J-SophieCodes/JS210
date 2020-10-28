// function generatePattern(nStars) {
//   let pattern = '*'.repeat(nStars);
//   for (let row = 1; row <= nStars; row++) {
//     pattern = pattern.replace('*', row);
//     console.log(pattern);
//   }
// }

// generatePattern(7);

// console output
// 1******
// 12*****
// 123****
// 1234***
// 12345**
// 123456*
// 1234567

// Further Exploration
function generateNumbers(nStars) {
  let numbers = [];

  for (let idx = 0; idx < nStars; idx++) {
    last_num = numbers[idx - 1] ? numbers[idx - 1] : '';
    current_num = last_num + String(idx + 1);
    numbers.push(current_num); 
  }

  return numbers;
}

function generatePattern(nStars) {
  let numbers = generateNumbers(nStars);
  let totalWidth = numbers[nStars - 1].length;

  for (let row = 1; row <= nStars; row++) {
    let number = numbers[row - 1];
    console.log(number.padEnd(totalWidth, '*'));
  }
}

generatePattern(7);
generatePattern(12);
