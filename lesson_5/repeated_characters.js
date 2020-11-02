// function repeatedCharacters(str) {
//   let characters = {};

//   for (let idx = 0; idx < str.length; idx++) {
//     let char = str[idx].toLowerCase();
//     let count = str.match(new RegExp(char, 'gi')).length;

//     if (count >= 2) {
//       characters[char] = count;
//     }
//   }

//   console.log(characters);
//   return characters;
// }

function repeatedCharacters(str) {
  str = str.toLowerCase();
  let chars = {};

  for (let idx = 0; idx < str.length; idx++) {
    let char = str[idx];
    chars[char] ? chars[char]++ : chars[char] = 1;
  }

  for (let char in chars) {
    if (chars[char] < 2) {
      delete chars[char];
    }
  }

  console.log(chars);
  return chars;
}

repeatedCharacters('Programming');    // { r: 2, g: 2, m: 2 }
repeatedCharacters('Combination');    // { o: 2, i: 2, n: 2 }
repeatedCharacters('Pet');            // {}
repeatedCharacters('Paper');          // { p: 2 }
repeatedCharacters('Baseless');       // { s: 3, e: 2 }