function padLeft(number) {
  const stringNumber = String(number);
  switch (stringNumber.length) {
    case 1:  return `  ${stringNumber}`;
    case 2:  return ` ${stringNumber}`;
    default: return stringNumber;
  }
}

for (let i = 1; i < 10; i += 1) {  // only 1 to 9
  let row = '';
  for (let j = 1; j <= 10; j += 1) {  // 1 to 10
    row += `${padLeft(i * j)} `;
  }

  console.log(row);
}