function matrixSums(arr) {
  let sums = [];
  let addition = (sum, value) => sum + value;

  for (let idx = 0; idx < arr.length; idx++) {
    sums.push(arr[idx].reduce(addition));
  }

  return sums;
}

console.log(matrixSums([[2, 8, 5], [12, 48, 0], [12]]));  // returns [15, 60, 12]