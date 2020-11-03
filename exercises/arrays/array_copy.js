// part 1 - copy reference

// let myArray = [1, 2, 3, 4]; // variable declaration and initialization
// const myOtherArray = myArray; // myOtherArray restricted to referencing myArray

// myArray.pop();  // mutates array referenced by myArray
// console.log(myArray); // [1,2,3]
// console.log(myOtherArray);  // references same array as myArray, [1,2,3]

// myArray = [1, 2]; // variable reassignment
// console.log(myArray); // [1,2]
// console.log(myOtherArray);  //  [1,2,3]


// part 2 - copy values only

let myArray = [1, 2, 3, 4];
// const myOtherArray = [...myArray];
const myOtherArray = myArray.splice(0);

myArray.pop();
console.log(myArray); 
console.log(myOtherArray);

myArray = [1, 2];
console.log(myArray); 
console.log(myOtherArray);