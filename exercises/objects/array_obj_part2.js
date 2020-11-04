const myArray = [5, 5];
myArray[-1] = 5;
myArray[-2] = 5;

function average(array) {
  let sum = 0;

  for (let i = -2; i < array.length; i += 1) {
    sum += array[i];
  }

  return sum / array.length; // sum returns 20, array.length returns 2
}

console.log(average(myArray)); // returns 10

// Further Exploration
// Refactor the average function so that it returns the result that the user
// expected, 5.

// LINE 12 => return sum / Object.keys(array).length;
