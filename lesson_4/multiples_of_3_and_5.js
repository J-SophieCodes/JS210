function multiplesOfThreeAndFive(min = 1, max = 100) {
  for (let num = min; num <= max; num++) {
    if (num % 15 === 0) {
      console.log(`${num}!`);
    } else if (num % 3 === 0 || num % 5 === 0) {
      console.log(`${num}`);
    }
  }
}

multiplesOfThreeAndFive();

