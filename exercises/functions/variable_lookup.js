var myVar = 'This is global';

function someFunction() {
  console.log(myVar);   // prints 'This is global'
}

someFunction();

// When console.log tries to log the value of myVar, JavaScript 
// first attempts to find a variable with that name in the current 
// scope (i.e., the local scope of someFunction). Since myVar does 
// not exist in this scope, JavaScript then starts looking for myVar 
// in the next outer scope, which happens to be the global scope in 
// this case. Here, JavaScript finds the global myVar and logs its 
// value, "This is global".
