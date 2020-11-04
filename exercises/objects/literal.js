const myObject = {
  a: 'name',
  'b': 'test',
  123: 'c',
  1: 'd',
};

console.log(myObject[1]);
console.log(myObject[a]);  // should be myObject['a']
console.log(myObject.a);