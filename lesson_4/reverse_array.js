const NUMBERS = [1, 2, 3, 4, 5];

function reverse(arr) {
  let newArr = [];

  for (let idx = arr.length - 1; idx >= 0; idx--) {
    newArr.push(arr[idx]);
  }

  return newArr;
}

console.log(reverse(NUMBERS));