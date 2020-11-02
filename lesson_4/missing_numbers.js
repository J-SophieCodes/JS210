// function missing(arr) {
//   let missing_numbers = [];
  
//   for (let idx = 0; idx < arr.length; idx++) {
//     let last_num = arr[idx - 1];
//     let this_num = arr[idx];
//     if (last_num === undefined || this_num - last_num === 1) continue;

//     for (let value = last_num + 1; value < this_num; value++) {
//       missing_numbers.push(value);
//     }
//   }

//   return missing_numbers;
// }

console.log(missing([-3, -2, 1, 5]));                  // [-1, 0, 2, 3, 4]
console.log(missing([1, 2, 3, 4]));                    // []
console.log(missing([1, 5]));                          // [2, 3, 4]
console.log(missing([6]));                             // []

function missing(arr) {
  let missing_numbers = [];
  let start = arr[0] + 1;
  let end = arr[arr.length - 1];

  for (let value = start; value < end; value++) {
    if (arr.indexOf(value) === -1) {
      missing_numbers.push(value);
    }
  }

  return missing_numbers;
}