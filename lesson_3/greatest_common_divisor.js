// function gcd(a, b) {
//   let max = a > b ? b : a;

//   for (let num = max; num > 0; num--) {
//     if (a % num === 0 && b % num === 0) {
//       return num;
//       break;
//     }
//   }
// }

// gcd(12, 4);   // 4
// gcd(15, 10);  // 5
// gcd(9, 2);    // 1


function euclid_gcd(a, b) {
  let numbers = [a, b].sort();
  let remainder;

  while (true) {
    remainder = numbers[1] % numbers[0];
    if (remainder === 0) break;
    numbers.unshift(remainder);
  }
  
  return numbers[0];
}

// euclid_gcd(12, 4);   // 4
// euclid_gcd(15, 10);  // 5
// euclid_gcd(9, 2);    // 1
// euclid_gcd(12, euclid_gcd(4, 8));  // 4
console.log(euclid_gcd(12, euclid_gcd(4, 8)));  // 4
console.log(euclid_gcd(euclid_gcd(12, 4), 8));  // 4
console.log(euclid_gcd(euclid_gcd(12, 6), 4));  // 2