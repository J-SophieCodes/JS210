const isCount = value => Number.isInteger(value) && value >=0;

function repeat(string, times) {
  if (!isCount(times)) {
    console.log(undefined);
    return;
  }

  let newString = '';
  
  for (let count = 1; count <= times; count++) {
    newString += string;
  }

  console.log(`"${newString}"`);
}

repeat('abc', 1);       // "abc"
repeat('abc', 2);       // "abcabc"
repeat('abc', -1);      // undefined
repeat('abc', 0);       // ""
repeat('abc', 'a');     // undefined
repeat('abc', false);   // undefined
repeat('abc', null);    // undefined
repeat('abc', '  ');    // undefined
