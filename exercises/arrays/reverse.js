function reverse(input) {
  if (Array.isArray(input)) {
    return reverseArray(input);
  } else {
    return reverseString(input);
  }
}

function reverseArray(arr) {
  let result = [];

  for (let idx = arr.length - 1; idx >= 0; idx--) {
    result.push(arr[idx]);
  }

  return result;
}

function reverseString(str) {
  let strArray = str.split('');
  return reverseArray(strArray).join('');
}

console.log(reverse('Hello'));           // "olleH"
console.log(reverse('a'));               // "a"
console.log(reverse([1, 2, 3, 4]));      // [4, 3, 2, 1]
console.log(reverse([]));                // []

const array = [1, 2, 3];
console.log(reverse(array));             // [3, 2, 1]
console.log(array);                      // [1, 2, 3]