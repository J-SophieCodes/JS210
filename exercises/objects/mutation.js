const array1 = ['Moe', 'Larry', 'Curly', 'Shemp', 'Harpo', 'Chico', 'Groucho', 'Zeppo'];
const array2 = [];

for (let i = 0; i < array1.length; i += 1) {
  array2.push(array1[i]);
}

for (let i = 0; i < array1.length; i += 1) {
  if (array1[i].startsWith('C')) {
    array1[i] = array1[i].toUpperCase();
  }
}

console.log(array2);

/*
line 1 - global constant array1 assigned to array of names
line 2 - global constant array2 assigned to empty array
lines 4-6 - for loop copies the variable references in array1 into array2
lines 8-12 - for loop finds elements pointing to strings that start with 'C',
  and reassigns the elements to new strings composed of the uppercase value.
  This mutates array1 but not the strings (primitive and immutable).
line 14 - logs array2 = ['Moe', 'Larry', 'Curly', 'Shemp', ...

<Further Exploration>
What would happen if an object literal was part of the array1 elements pushed 
to array2? Would changes made to the object literal in array1 be reflected in
array2? ---- YES

How would you change the code so that any changes made to array1 in the second
for loop get reflected to array2? --- assign array1 to array2 (array2 = array1)
*/