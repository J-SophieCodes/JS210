const CONVERSION = 32;

function toLowerCase(string) {
  let lowerCaseStr = ''

  for (let idx = 0; idx < string.length; idx++) {
    let ascii = string.charCodeAt(idx);

    if (ascii >= 65 && ascii <= 90) {
      ascii += CONVERSION;
    }
    // } else if (ascii >=97 && ascii <= 122) {
    //   ascii -= CONVERSION;
    // }
    
    lowerCaseStr += String.fromCharCode(ascii);
  }
  
  console.log(lowerCaseStr);
}

toLowerCase('ALPHABET');    // "alphabet"
toLowerCase('123');         // "123"
toLowerCase('abcDEF');      // "abcdef"