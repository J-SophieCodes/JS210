function p(result) {
  console.log(result);
}

function average(arr) { 
  return sum(arr) / arr.length;
}

function sum(arr) {
  let total = 0;
  for (let idx = 0; idx < arr.length; idx++) {
    total += arr[idx];
  }

  return total;
}

let arr = [3, 3, 8, 3, 3];

p(`average is ${average(arr)}`);
p(`sum is ${sum(arr)}`);

let temperatures = [73, 58, 81, 64, 67];
p(`The average temperature is ${average(temperatures)}`);