function someFunction() {
  myVar = 'This is global';
  // not a variable declaration; local scope myVar not found; JS binds myVar to be a "property" of the global object.
}

someFunction();
console.log(myVar);  // prints 'This is global'


