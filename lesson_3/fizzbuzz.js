// function fizzbuzz() {
//   for (let num = 1; num <= 100; num++) {
//     let message = num;
    
//     if (num % 15 === 0) {
//       message = 'FizzBuzz';
//     } else if (num % 3 === 0) {
//       message = 'Fizz';
//     } else if (num % 5 === 0) {
//       message = 'Buzz';
//     }

//     console.log(message);
//   }
// }


// Further Exploration
let fizzbuzz = () => {
  for (let index = 1; index <= 100; index += 1) {
    let message = '';

    if (index % 3 === 0) {
      message += 'Fizz';
    }

    if (index % 5 === 0) {
      message += 'Buzz';
    }

    console.log(message || index);
  }
};

fizzbuzz();
