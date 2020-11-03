// part 1

let a = 7;  // primitive value; immutable

function myValue(b) {   // local variable argument created
  b += 10;  // local variable argument reassigned; not mutating
}

myValue(a);   
console.log(a);   // prints 7

// The code logs 7 to the console. The value assigned to variable a 
// is 7 and it is a primitive value. Primitive values in JavaScript 
// are immutable. Therefore, passing the variable a that is assigned 
// a primitive value as an argument to a function, and consequently 
// using it on any operation in the body of the function does not 
// have any effect on the value assigned to a.


// part 2
let a = 7;

function myValue(a) {   // local variable argument created
  a += 10;  // variable shadowing - no access to global 'a'; local 'a' reassigned
}

myValue(a);
console.log(a);   // prints 7


// part 3
let a = [1, 2, 3];

function myValue(b) { // local variable b references array 'a'
  b[2] += 7;  // reassignment of array element is mutating
}

myValue(a); // array passed in to function as argument
console.log(a); // prints [1, 2, 10]