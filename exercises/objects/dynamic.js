const myObject = {
  prop1: '123',
  prop2: '234',
  'prop 3': '345',
};

const prop2 = '456';  // constant declaration
myObject['prop2'] = '456';  // reassigned property to '456'
myObject[prop2] = '678';  // an expression is used to create property '456'

console.log(myObject[prop2]);
// an expression is used to access property '456' and prints '678'
console.log(myObject.prop2);
// string literal 'prop2' used to access property and prints '456'


// further exploration
const myObj = {};
myObj[myFunc()] = 'hello, ';

function myFunc() {
  return 'funcProp';
}

console.log(myObj);  // { funcProp: 'hello, ', }
myObj[myFunc()] = 'world!';
console.log(myObj);  // { funcProp: 'world!', }