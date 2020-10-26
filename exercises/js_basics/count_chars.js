// in cml
const rlSync = require("readline-sync");
const phrase = rlSync.question("Please enter a phrase: ");
const regex = /\s/g; // with g, replace all matches
const count = phrase.replace(regex, '').length;

console.log(`There are ${count} characters in "${phrase}".`)