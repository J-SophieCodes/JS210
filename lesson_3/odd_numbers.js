// function logOddNumbers(num) {
//   for (let counter = 1; counter <= num; counter += 2) {
//     console.log(counter);
//   }
// }

logOddNumbers(19);

// Further exploration
function logOddNumbers(num) {
  for (let counter = 1; counter <= num; counter++) {
    if (counter % 2 === 0) {
      continue;
    }

    console.log(counter);
  }
}