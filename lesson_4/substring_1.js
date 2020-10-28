// Write a function that returns a substring of a string based on a starting index and length.

// The start argument is the starting index. If negative, treat it as strLength + start where 
// strLength is the length of the string. For example, if start is -3, treat it as strLength - 3.

// The length argument is the maximum length of the desired substring. If length exceeds the 
// number of characters available, just use the available characters.

function substr(string, start, length) {
  let newStr = '';

  if (length < 0) {
    console.log(newStr);
    return;
  }

  let idxStart = start < 0 ? string.length + start : start;
  
  for (let idx = idxStart; idx < string.length; idx++) {
    if (newStr.length === length) break;
    newStr += string[idx];
  }

  console.log(newStr);
}

let string = 'hello world';

substr(string, 2, 4);      // "llo "
substr(string, -3, 2);     // "rl"
substr(string, 8, 20);     // "rld"
substr(string, 0, -20);    // ""
substr(string, 0, 0);      // ""
