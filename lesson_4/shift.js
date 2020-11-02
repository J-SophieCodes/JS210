function shift(arr) {
  if (arr.length === 0) return undefined;

  let temp = arr[0];

  for (let idx = 1; idx < arr.length; idx++) {
    arr[idx - 1] = arr[idx];
  }

  arr.length--;
  return temp;
}

let count = [1, 2, 3];
console.log(shift(count),          // 1
count);                  // [ 2, 3 ]