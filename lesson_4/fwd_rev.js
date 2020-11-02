function forwardReverse(arr) {
  let reversedArr = arr.slice(0).reverse();
  return arr.concat(reversedArr);
}

let arr = [1,2,3,4];
console.log(forwardReverse(arr));