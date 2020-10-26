const myBoolean = true;
const myString = 'hello';
const myArray = [];
const myOtherString = '';

// myBoolean evaluates true
if (myBoolean) {
  console.log('Hello');
}

// myString is a string and is truthy. !myString coerce it into false.
if (!myString) {
  console.log('World!');
}

// myArray is an empty array and is truthy. !!myArray coerces it into true.
if (!!myArray) {
  console.log('World');
}

// myOtherString is an empty string and is falsy. So second operand myArray is returned.
if (myOtherString || myArray) {
  console.log('!');
}