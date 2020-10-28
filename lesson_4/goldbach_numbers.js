// Goldbach's Conjecture: 
// You can express every even integer greater than 2 as the sum of two primes

// Log all combinations of two prime numbers whose sum is expectedSum. 
// Log the prime pairs with the smaller number first. 
// If expectedSum is odd or less than 4, your function should log null.


function isPrime(num) {
  if (num <= 1 || num > 2 && num % 2 === 0) {   // guard clause
    return false;
  }

  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

function isOddAndLessThan4(num) {
  return (num % 2 === 1 && num < 4);
}

function checkGoldbach(expectedSum) {
  if (isOddAndLessThan4(expectedSum)) {
    console.log(null);
    return;
  }

  let max = expectedSum - 2;
  let midpt = expectedSum / 2;
  for (let num2 = max; num2 >= midpt; num2--) {
    if (isPrime(num2)) {
      num1 = expectedSum - num2;
      if (isPrime(num1)) {
        console.log(num1, num2);
      }
    }
  }
}

checkGoldbach(3);
// logs: null

checkGoldbach(4);
// logs: 2 2

checkGoldbach(12);
// logs: 5 7

checkGoldbach(100);
// logs:
// 3 97
// 11 89
// 17 83
// 29 71
// 41 59
// 47 53