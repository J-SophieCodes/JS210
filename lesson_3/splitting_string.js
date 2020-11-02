// function splitString(string, delimiter) {
//   if (delimiter === undefined) {
//     console.log('ERROR: No delimiter');
//     return;
//   }

//   let substr = '';

//   for (let idx = 0; idx < string.length; idx++) {
//     if (string[idx] !== delimiter) {
//       substr += string[idx];
//       if (!(delimiter === '' || idx === string.length - 1)) {
//         continue;
//       }
//     }

//     console.log(substr);
//     substr = '';
//   }
// }

splitString('abc,123,hello world', ',');
// logs:
// abc
// 123
// hello world

splitString('hello');
// logs:
// ERROR: No delimiter

splitString('hello', '');
// logs:
// h
// e
// l
// l
// o

splitString('hello', ';');
// logs:
// hello

splitString(';hello;', ';');
// logs:
//  (this is a blank line)
// hello

function splitString(string, delimiter) {
  if (delimiter === undefined) {
    console.log('ERROR: No delimiter');
    return;
  }

  let substr = '';

  for (let idx = 0; idx < string.length; idx++) {
    if (string[idx] === delimiter) {
      console.log(substr);
      substr = '';
    } else if (delimiter === '') {
      console.log(string[idx]);
    } else {
      substr += string[idx];
    }
  }

  if (substr) {
    console.log(substr);
  }
}