function one() {
  function log(result) {
    console.log(result);  // 'to', 'the'
  }

  function anotherOne(...args) {
    let result = '';
    for (let i = 0; i < args.length; i += 1) {
      result += String.fromCharCode(args[i]);
    }

    log(result); 
  }

  function anotherAnotherOne() {
    console.log(String.fromCharCode(87, 101, 108, 99, 111, 109, 101));  // 'Welcome'
    anotherOne(116, 111);
  }

  anotherAnotherOne();  // 'Welcome', 'to'
  anotherOne(116, 104, 101);  // 'the'
  return anotherOne;  // 'Matrix!'
}

one()(77, 97, 116, 114, 105, 120, 33);
// Actually two successive function calls (because the one function returns
// the anotherOne function). Notice that when the anotherOne function is
// returned, it still has access to the log function that is declared in its
// enclosing scope (closure) inside the one function.
