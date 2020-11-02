function uniqueElements(arr) {
  let newArr = [];

  for (let idx = 0; idx < arr.length; idx++) {
    let value = arr[idx];
    if (newArr.indexOf(value) === -1) newArr.push(value);
  }
  
  return newArr;
}

console.log(uniqueElements([1, 2, 4, 3, 4, 1, 5, 4]));  // returns [1, 2, 4, 3, 5]