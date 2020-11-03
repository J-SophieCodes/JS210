function concat(...rest) {
  let newArray = [];

  for (let idx1 = 0; idx1 < rest.length; idx1++) {
    let current = rest[idx1];

    if (Array.isArray(current)) {
      for (let idx2 = 0; idx2 < current.length; idx2++) {
        // newArray.push(current[idx2]);
        newArray = concat(newArray, current[idx2]);
      }
    } else {
      newArray.push(current);
    }
  }

  return newArray;
}


console.log(concat([1, 2, 3], [4, 5, 6], [7, 8, 9]));    // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(concat([1, 2], 'a', ['one', 'two']));        // [1, 2, "a", "one", "two"]
console.log(concat([1, 2], ['three'], 4));               // [1, 2, "three", 4]