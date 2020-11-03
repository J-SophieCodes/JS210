function shift(arr) {
  let shifted = arr.splice(0, 1)[0];
  return shifted;
}

function unshift(arr, ...args) {
  for (let idx = 0; idx < args.length; idx++) {
    arr.splice(idx, 0, args[idx]);
  }

  return arr.length;
}


console.log(shift([1, 2, 3]));                // 1
console.log(shift([]));                       // undefined
console.log(shift([[1, 2, 3], 4, 5]));        // [1, 2, 3]

console.log(unshift([1, 2, 3], 5, 6));        // 5
console.log(unshift([1, 2, 3]));              // 3
console.log(unshift([4, 5], [1, 2, 3]));      // 3

const testArray = [1, 2, 3];
console.log(shift(testArray));                // 1
console.log(testArray);                       // [2, 3]
console.log(unshift(testArray, 5, 6));           // 3
console.log(testArray);                       // [5, 2, 3]

// other approaches
// function shift(arr) {
//   if (arr.length === 0) return undefined;

//   let shifted = arr[0];

//   for (let idx = 1; idx < arr.length; idx++) {
//     arr[idx - 1] = arr[idx];
//   }

//   arr.length--;
//   return shifted;
// }

// function unshift(arr, ...args) {
//   let newArr = args.concat(arr);

//   for (let idx = 0; idx < newArr.length; idx++) {
//     arr[idx] = newArr[idx];
//   }

//   return arr.length;
// }