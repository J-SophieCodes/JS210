// part 1
var myVar = 'This is global';

function someFunction() {   // function declaration creates new inner scope
  var myVar = 'This is local';  // no effect on global scope
}

someFunction();
console.log(myVar); // prints 'This is global'


// part 2
var myVar = 'This is global';

function someFunction() {
  var myVar = 'This is local';  // variable shadowing, global myVar can't be accessed
  console.log(myVar);   // local scope myVar given priority, prints 'This is local'
}

someFunction();


// part 3
var myVar = 'This is global';

function someFunction() {
  myVar = 'This is local';   // no local myVar found; found global myVar and reassigned to 'This is local'
}

someFunction();
console.log(myVar);   // prints 'This is local'