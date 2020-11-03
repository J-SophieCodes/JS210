function pop(arr) {
  let removed = arr[arr.length - 1];
  arr.splice(arr.length - 1);
  return removed;
}

function push(arr, ...args) {
  for (let idx = 0; idx < args.length; idx++) {
    arr[arr.length] = args[idx];
  }

  return arr.length;
}

// pop
const array1 = [1, 2, 3];
console.log(pop(array1));                        // 3
console.log(array1);                // [1, 2]
console.log(pop([]));                           // undefined
console.log(pop([1, 2, ['a', 'b', 'c']]));      // ["a", "b", "c"]

// push
const array2 = [1, 2, 3];
console.log(push(array2, 4, 5, 6));              // 6
console.log(array2);                // [1, 2, 3, 4, 5, 6]
console.log(push([1, 2], ['a', 'b']));          // 3
console.log(push([], 1));                       // 1
console.log(push([]));                          // 0

// further exploration

// function pop(arr) {
//   if (arr.length === 0) return undefined;
//   let removed = arr[arr.length - 1];
//   arr.length--;
//   return removed;
// }