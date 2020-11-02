function lastIndexOf(arr, value) {
  for (let idx = arr.length - 1; idx >= 0; idx--) {
    if (arr[idx] === value) return idx;
  }

  return -1;
}

console.log(lastIndexOf([1, 2, 3, 3], 3));     // 3
console.log(lastIndexOf([1, 2, 3], 4));        // -1