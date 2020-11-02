// Write a function that returns the last element of an array passed in as an argument.

function lastElementOf(arr) {
  let lastIndex = arr.length - 1;
  return arr[lastIndex];
}

lastElementOf(['U', 'S', 'A']);  // returns "A"