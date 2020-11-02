function isAlphabetFirstHalf(char) {
  return (char >= 'A' && char <= 'M' || char >= 'a' && char <= 'm');
}

function isAlphabetSecondHalf(char) {
  return (char >= 'N' && char <= 'Z' || char >= 'n' && char <= 'z');
}

function rotate(char) {
  let charAscii = char.charCodeAt(0);

  if (isAlphabetFirstHalf(char)) {
    charAscii += 13;
  } else if (isAlphabetSecondHalf(char)) {
    charAscii -= 13;
  }

  return String.fromCharCode(charAscii);
}

function rot13(string) {
  let cipher = '';

  for (let idx = 0; idx < string.length; idx++) {
    cipher += rotate(string[idx]);
  }
  
  return cipher;
}

console.log(rot13('Teachers open the door, but you must enter by yourself.'));

// logs:
// Grnpuref bcra gur qbbe, ohg lbh zhfg ragre ol lbhefrys.

console.log(rot13(rot13('Teachers open the door, but you must enter by yourself.')));

// logs:
// Teachers open the door, but you must enter by yourself.