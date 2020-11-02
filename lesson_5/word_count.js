function wordCount(str) {
  let words = str.split(' ');
  let wordsObj = {}

  for (let word of words) {
    wordsObj[word] ? wordsObj[word] += 1 : wordsObj[word] = 1;
  }

  return wordsObj;
}

console.log(wordCount('box car cat bag box'));  // { box: 2, car: 1, cat: 1, bag: 1 }