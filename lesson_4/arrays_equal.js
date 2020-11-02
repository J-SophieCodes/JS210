function indexOf(arr, value) {
  for (let idx = 0; idx < arr.length; idx++) {
    if (arr[idx] === value) return idx;
  }

  return -1;
}

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

function arraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  let tempArr = slice(arr1, 0, arr1.length);
  for (let idx = 0; idx < arr2.length; idx++) {
    let idxMatched = indexOf(tempArr, arr2[idx]);
    if (idxMatched === -1) return false;
    splice(tempArr, idxMatched, 1);
  }

  return true;
}

console.log(arraysEqual([1], [1]));                               // true
console.log(arraysEqual([1], [2]));                               // false
console.log(arraysEqual([1, 2], [1, 2, 3]));                      // false
console.log(arraysEqual([1, 'hi', true], [1, 'hi', true]));       // true
console.log(arraysEqual([1, 'hi', true], [1, 'hi', false]));      // false
console.log(arraysEqual([1, 'hi', true], [1, 'hello', true]));    // false
console.log(arraysEqual([1, 'hi', true], [2, 'hi', true]));       // false
console.log(arraysEqual([1, 'hi', 'hi', true], [1, 'hi', true, true]));       // false