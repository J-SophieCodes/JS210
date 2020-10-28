// function logMultiples(number) {
//   start_num = 100 - (100 % number);

//   for (let i = start_num; i >= number; i -= number) {
//     if (i % 2 === 1) {
//       console.log(i);
//     }
//   }
// }

logMultiples(17);
// output (5x, 3x and 1x)
// 85
// 51
// 17

logMultiples(21);
// output (3x and 1x)
// 63
// 21

function logMultiples(number) {
  start_num = Math.floor(100 / number);

  for (let i = start_num; i >= 1; i--) {
    let multiple = i * number;

    if (multiple % 2 === 1) {
      console.log(multiple);
    }
  }
}