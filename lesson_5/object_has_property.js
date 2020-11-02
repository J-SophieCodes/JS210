// function objectHasProperty(obj, prop) {
//   return obj[prop] !== undefined;
// }

function objectHasProperty(obj, prop) {
  let key = Object.keys(obj);
  return key.indexOf(prop) !== -1;
}

let pets = {
  cat: 'Simon',
  dog: 'Dwarf',
  mice: null,
};

console.log(objectHasProperty(pets, 'dog'));       // true
console.log(objectHasProperty(pets, 'lizard'));    // false
console.log(objectHasProperty(pets, 'mice'));      // true