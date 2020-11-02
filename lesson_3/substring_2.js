function processIndex(string, idx) {
  if (idx === undefined || idx > string.length - 1) {
    return string.length;
  } else if (idx < 0 || !Number.isInteger(idx)) {
    return 0;
  } else {
    return idx;
  }
}

function substring(string, start, end) {
  start = processIndex(string, start);
  end = processIndex(string, end);

  if (end < start) {
    [start, end] = [end, start];
  }

  let newStr = '';
  for (let idx = start; idx < end; idx++) {
    newStr += string[idx];
  }

  console.log(newStr);
}

let string = 'hello world';

substring(string, 2, 4);    // "ll"
substring(string, 4, 2);    // "ll"
substring(string, 0, -1);   // ""
substring(string, 2);       // "llo world"
substring(string, 'a');     // "hello world"
substring(string, 8, 20);   // "rld"