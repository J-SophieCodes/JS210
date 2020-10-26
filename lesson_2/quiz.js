console.log(foo());   // no explicit return; prints undefined (3)

function foo() {   // entirely skipped
  console.log('Waiting for bar!');
}

function foo() {
  console.log(foo);  // [Function: foo] (1)
  function bar() {   // entirely skipped
    console.log('bar again');
  }

  bar();  // prints 'bar again and again' (2)

  function bar() {
    console.log('bar again and again');
  }
}