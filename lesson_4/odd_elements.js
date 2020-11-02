function oddElementsOf(arr) {
  // let oddElements = [];

  // for (let idx = 1; idx < arr.length; idx += 2) {
  //   oddElements.push(arr[idx]);
  // }

  // return oddElements;

  return arr.filter((_, idx) => idx % 2 === 1);
}

let digits = [4, 8, 15, 16, 23, 42];

console.log(oddElementsOf(digits));    // returns [8, 16, 42]