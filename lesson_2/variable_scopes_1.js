// // Q1
// let a = 'outer';

// function testScope() {
//   let a = 'inner';
//   console.log(a);
// }

// console.log(a); // prints 'outer'
// testScope(); // variable shadowing, prints 'inner'
// console.log(a); // prints 'outer'


// // Q2
// let a = 'outer';

// function testScope() {
//   a = 'inner';
//   console.log(a);
// }

// console.log(a); // invocation of console.log. Here, 'a' resolves as global variable a = 'outer' on line 14 
// testScope(); // testScope function invoked; Here, 'a' resolves as global variable 'a' and reassigned 'inner'
// console.log(a); // 'a' resolves as the global variable 'a' and its new value of 'inner'


// // Q3
// let basket = 'empty';

// function goShopping() {
//   function shop1() {
//     basket = 'tv';  // not invoked here
//   }

//   console.log(basket);  // prints 'empty'

//   let shop2 = function() {
//     basket = 'computer';  // not invoked here
//   };

//   const shop3 = () => {
//     let basket = 'play station';  // local variable
//     console.log(basket);  
//   };

//   shop1();  // global variable 'basket' reassigned to 'tv'
//   shop2();  // global variable 'basket' reassigned to 'computer'
//   shop3();  // prints 'play station'

//   console.log(basket);  // prints 'computer'
// }

// goShopping(); // goShopping function is invoked


// // Q4
// function hello() {
//   a = 'hi';
// }

// hello();  // 'hello' function is invoked; no local or global var 'a' found; so global var 'a' is created and initialized 'hi'
// console.log(a); // 'hi' printed to screen


// // Q5
// function hello() {
//   let a = 'hello';  // local variable declaration
// }

// hello();  // function invoked
// console.log(a); // no 'a' declared at a global level
// // Uncaught ReferenceError: a is not defined


// // Q6
// console.log(a); // prints undefined

// var a = 1;  // 'a is hoisted on top of console.log and assigned 'undefined'


// // Q7
// console.log(a);  // ReferenceError: Cannot access 'a' before initialization

// let a = 1;  // 'a' is hoisted on top of console.log but doesn't have an initial value


// // Q8
// console.log(a);   // Function is not invoked; ReferenceError: a is not defined

// function hello() {    // function is hoisted on top of console.log
//   a = 1;  // if function is invoked, creates global variable 'a = 1'
// }

function hello() {
  a = 1;
}
hello();
console.log(a); // prints 1