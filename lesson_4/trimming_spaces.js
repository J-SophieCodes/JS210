// function trim(str) {
//   let idxStart;
//   for (let idx = 0; idx < str.length; idx++) {
//     if (str[idx] !== ' ') {
//       idxStart = idx;
//       break;
//     }
//   }

//   let idxEnd;
//   for (let idx = str.length - 1; idx >= 0; idx--) {
//     if (str[idx] !== ' ') {
//       idxEnd = idx;
//       break;
//     }
//   }

//   let processed_str = '';
//   for (let idx = idxStart; idx <= idxEnd; idx++) {
//     processed_str += str[idx];
//   }
//   console.log(`"${processed_str}"`);
// }


trim('  abc  ');  // "abc"
trim('abc   ');   // "abc"
trim(' ab c');    // "ab c"
trim(' a b  c');  // "a b  c"
trim('      ');   // ""
trim('');         // ""


function leftTrim(str) {
  let trimmed_str = '';
  let copyMode = false;

  for (let idx = 0; idx < str.length; idx++) {
    if (str[idx] !== ' ') {
      copyMode = true;
    }

    if (copyMode) {
      trimmed_str += str[idx];
    }
  }

  return trimmed_str;
}

function rightTrim(str) {
  let trimmed_str = '';
  let copyMode = false;

  for (let idx = str.length - 1; idx >= 0; idx--) {
    if (str[idx] !== ' ') {
      copyMode = true;
    }

    if (copyMode) {
      trimmed_str = str[idx] + trimmed_str;
    }
  }

  return trimmed_str;
}

function trim(str) {
  let processed_str = rightTrim(str);
  processed_str = leftTrim(processed_str);

  console.log(`"${processed_str}"`);
}