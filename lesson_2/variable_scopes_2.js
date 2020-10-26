// // Q1
// function say() {
//   if (false) {
//     var a = 'hello from inside a block';  // 'var a' is declared at function-level, and initialized to 'undefined' when hoisted
//   }

//   console.log(a);   // prints undefined
// } 

// say();  // invokes function


// // Q2
// function say() {
//   if (false) {
//     let a = 'hello from inside a block';  // 'let a' is declared at block-level, not accessible outside of block
//   }

//   console.log(a);   // ReferenceError: a is not defined
// }

// say();


// // Q3
// function hello() {
//   a = 'hello';  // local var reassigned to 'hello'
//   console.log(a); // prints hello

//   if (false) {
//     var a = 'hello again';  // 'var a' is declared at function-level, and initialized to 'undefined' when hoisted
//   }
// }

// hello();  // function invoked
// console.log(a); // 'var a' is a local variable inside of function, not accessible outside. ReferenceError.


// // Q4
// function hello() {
//   a = 'hello';  // global variable created
//   console.log(a); // prints 'hello'

//   if (false) {
//     let a = 'hello again';  // 'let a' is declared at block-level, not accessible outside of block
//   }
// }

// hello();  // function invoked
// console.log(a); // prints hello


// // Q5
// var a = 'hello';

// for (var index = 0; index < 5; index += 1) {
//   var a = index;  // 'var a' is declared at function-level, since global variable 'a' already exists, hoisting has no effect on operation
//   console.log(index);
// }

// console.log(a); // prints 4


// // Q6
// let a = 'hello';

// for (let index = 0; index < 5; index += 1) {
//   let a = index;  // 'let a' is declared at block-level
// }

// console.log(a); // prints 'hello'


// // Q7
// let a = 1;

// function foo() {
//   a = 2;  // reassignment
//   let bar = function() {
//     a = 3;  // reassignment
//     return 4;
//   };

//   return bar(); // invokes bar() and returns 4
// }

// console.log(foo()); // invokes foo() and prints 4
// console.log(a); // prints 3


// // Q8
// var a = 'global';

// function checkScope() {
//   var a = 'local'; 

//   const nested = function() {
//     var a = 'nested';
//     let superNested = () => {
//       a = 'superNested';  // 'var a' existing; reassignment here
//       return a;   // returns a = 'superNested'
//     };

//     console.log(a);   // a = 'nested' here (2)
//     return superNested();   // returns a = 'superNested'
//   };

//   console.log(a); // a = 'local' here (1)
//   return nested();   // returns a = 'superNested'
// }

// console.log(checkScope());  // invokes checkScope() and prints 'superNested' (3)
// console.log(a);   // prints 'global' (4)


// // Q9
// let a = 'outer';
// let b = 'outer';

// console.log(a);   // prints 'outer'
// console.log(b);   // prints 'outer'
// setScope(a);    // invokes function; reassigns global var b = 'inner'
// console.log(a);   // prints 'outer'
// console.log(b);   // prints 'inner'

// function setScope(foo) {    // moved to top of function call when hoisted
//   foo = 'inner';
//   b = 'inner';
// }


// // Q10
// let total = 50;
// let increment = 15;

// function incrementBy(increment) {    // moved to top of function call when hoisted
//   total += increment;   // function argument 'increment' used here; variable shadowing prevented access to global variable 'increment'
// }

// console.log(total);   // prints 50
// incrementBy(10);    // invoked function and incremented global var 'total' to 60
// console.log(total);   // prints 60
// console.log(increment);   // prints 15


// Q11
let a = 'outer';

console.log(a);   // prints 'outer'
setScope();   // at this point, 'setScope = undefined'
console.log(a);   // prints 'inner'

var setScope = function () {  // when hoisted, 'setScope = undefined'
  a = 'inner';
};