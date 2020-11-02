const push = (arr, value) => {
  arr[arr.length] = value;
  return arr.length;
};

function concat(arr1, arr2) {
  let newArr = [];

  for (let idx = 0; idx < arr1.length; idx++) {
    push(newArr, arr1[idx]);
  }

  for (let idx = 0; idx < arr2.length; idx++) {
    push(newArr, arr2[idx]);
  }

  return newArr;
}

console.log(concat([1, 2, 3], [4, 5, 6]));       // [ 1, 2, 3, 4, 5, 6 ]