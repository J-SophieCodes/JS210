function join(arr, delimiter) {
  let str = '';

  for (let idx = 0; idx < arr.length; idx++) {
    str += idx === 0 ? arr[idx] : (delimiter + arr[idx]);
  }

  return str;
}

console.log(join(['bri', 'tru', 'wha'], 'ck '));       // 'brick truck wha'
console.log(join([1, 2, 3], ' and '));                 // '1 and 2 and 3'