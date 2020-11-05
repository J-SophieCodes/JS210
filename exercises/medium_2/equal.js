let person = { name: 'Victor' };
let otherPerson = { name: 'Victor' };

console.log(person === otherPerson);    // false -- expected: true
// logs false because === compares object reference; person and otherPerson
// reference two separate objects

otherPerson = person;
console.log(person === otherPerson);  // returns true