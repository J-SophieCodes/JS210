function greetings(name, info) {
  let fullName = name.join(' ');
  let description = info.title + ' ' + info.occupation
  console.log(`Hello, ${fullName}! Nice to have a ${description} around.`)
}


greetings(['John', 'Q', 'Doe'], { title: 'Master', occupation: 'Plumber' });

// console output
// Hello, John Q Doe! Nice to have a Master Plumber around.