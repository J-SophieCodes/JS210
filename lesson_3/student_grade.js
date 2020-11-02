// Write a program to determine a student’s grade based on the average of 
// three scores you get from the user. Use these rules to compute the grade:

// If the average score is greater than or equal to 90 
//   then the grade is 'A'
// If the average score is greater than or equal to 70 and less than 90 
//   then the grade is 'B'
// If the average score is greater than or equal to 50 and less than 70 
//   then the grade is 'C'
// If the average score is less than 50 
//   then the grade is 'F'

// You may assume that all input values are valid positive integers.

function calculateAverage(scores) {
  let sum = 0;

  for (let idx = 0; idx < scores.length; idx++) {
    sum += scores[idx];
  }

  return (sum / scores.length);
}

function calculateGrade(average) {
  if (average >= 90) {
    return 'A';
  } else if (average >= 70) {
    return 'B';
  } else if (average >= 50) {
    return 'C';
  } else {
    return 'F';
  }
}

function studentGrade() {
  let count = Number(prompt('Total number of scores: '));
  let scores = [];

  for (let idx = 0; idx < count; idx++) {
    scores[idx] = Number(prompt(`Enter score ${idx + 1}: `));
  }

  let average = calculateAverage(scores);
  let grade = calculateGrade(average);

  console.log(`Based on the average of your 3 scores your letter grade is "${grade}".`) 
}

studentGrade();

// prompts to get the 3 scores
// Enter score 1: 90
// Enter score 2: 50
// Enter score 3: 78

// log to the console
// Based on the average of your 3 scores your letter grade is "B".