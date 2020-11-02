function randomNumber(min, max) {
  if (min === max) {
    return min;
  } else if (min > max) {
    [min, max] = [max, min];
  }

  let delta = max - min + 1;

  return Math.floor(Math.random() * delta) + min;
}

console.log(randomNumber(3, 3))