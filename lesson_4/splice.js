const push = (arr, value) => {
  arr[arr.length] = value;
  return arr.length;
};

function slice(arr, start, end) {
  let newArr = [];

  for (let idx = start; idx < end; idx++) {
    push(newArr, arr[idx]);
  }
  
  return newArr;
}

function splice(arr, start, length) {
  let removedValues = slice(arr, start, start + length);

  for (let idx = start + length; idx < arr.length; idx++) {
    arr[idx - length] = arr[idx];
  }

  arr.length -= length;
  return removedValues;
}

let count = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(splice(count, 2, 5));                   // [ 3, 4, 5, 6, 7 ]
console.log(count);                                 // [ 1, 2, 8 ]