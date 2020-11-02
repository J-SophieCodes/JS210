const ARR = [1, 'a', 4];

function join(arr) {
  let str = '';

  for (let idx = 0; idx < arr.length; idx++) {
    str += arr[idx];
  }

  return str;
}

console.log(join(ARR));