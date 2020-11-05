let i = 0;
while (i < 10) {
  if (i % 3 === 0) {  // counter won't increment; infinite loop with i = 0;
    console.log(i);
  }// else {
    i += 1;
  // }
}