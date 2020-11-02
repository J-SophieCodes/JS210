// The indexOf function searches for the first instance of a substring in 
// firstString that matches the string secondString, and returns the index 
// of the character where that substring begins.

function indexOf(firstString, secondString) {
  let limit = firstString.length - secondString.length;
  let searchLength = secondString.length;

  for (let idx = 0; idx <= limit; idx++) {
    let spliced_str = '';

    for (let splice_idx = idx; splice_idx < idx + searchLength; splice_idx++) {
      spliced_str += firstString[splice_idx];
    }

    if (spliced_str === secondString) {
      console.log(idx);
      return;
    }
  }

  console.log(-1);
}

// he lastIndexOf function searches for the last instance of a substring in 
// firstString that matches the string secondString, and returns the index of 
// the character where that substring begins.

function lastIndexOf(firstString, secondString) {
  let limit = firstString.length - secondString.length;
  let searchLength = secondString.length;

  for (let idx = limit; idx >= 0; idx--) {
    let spliced_str = '';

    for (let splice_idx = idx; splice_idx < idx + searchLength; splice_idx++) {
      spliced_str += firstString[splice_idx];
    }

    if (spliced_str === secondString) {
      console.log(idx);
      return;
    }
  }

  console.log(-1);
}

indexOf('Some strings', 's');                      // 5
indexOf('Blue Whale', 'Whale');                    // 5
indexOf('Blue Whale', 'Blute');                    // -1
indexOf('Blue Whale', 'leB');                      // -1

lastIndexOf('Some strings', 's');                  // 11
lastIndexOf('Blue Whale, Killer Whale', 'Whale');  // 19
lastIndexOf('Blue Whale, Killer Whale', 'all');    // -1

// More efficient:
function indexOf(firstString, secondString) {
  let limit = firstString.length - secondString.length;
  let searchLength = secondString.length;

  for (let idx = 0; idx <= limit; idx++) {
    let match_count = 0;

    for (let idx2 = 0; idx2 < searchLength; idx2++) {
      if (firstString[idx + idx2] === secondString[idx2]) {
        match_count += 1;
      } else {
        break;
      }
    }

    if (match_count === searchLength) {
      console.log(idx);
      return;
    }
  }

  console.log(-1);
}