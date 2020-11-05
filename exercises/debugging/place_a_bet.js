function placeABet(guess) {
  function generateRandomInt() {
    return Math.floor(Math.random() * 25) + 1;
  };

  const winningNumber = generateRandomInt();

  if (guess < 1 || guess > 25) {
    return 'Invalid guess. Valid guesses are between 1 and 25.';
  }

  if (guess === winningNumber) {
    return "Congratulations, you win!";
  } else {
    return `Wrong-o! You lose. Winning number is ${winningNumber}.`;
  }
}

const userGuess = parseInt(prompt('Input a guess between 1-25'), 10);
alert(placeABet(userGuess));

// wrapping function definition within parentheses turn it into a
// function expression. Function expression name is only accessible
// inside the function local scope, therefore, it cannot be called
// on line 6.