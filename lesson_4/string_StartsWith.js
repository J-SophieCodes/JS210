function startsWith(string, searchString) {
  for (let idx = 0; idx < searchString.length; idx++) {
    if (string[idx] !== searchString[idx]) {
      console.log(false);
      return false;
    }
  }
  console.log(true);
  return true;
}

let str = 'We put comprehension and mastery above all else';
startsWith(str, 'We');              // true
startsWith(str, 'We put');          // true
startsWith(str, '');                // true
startsWith(str, 'put');             // false

let longerString = 'We put comprehension and mastery above all else!';
startsWith(str, longerString);      // false