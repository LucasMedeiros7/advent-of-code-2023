const fs = require('fs')

function firstSolution() {
  const lines = fs.readFileSync('first-input.txt', 'utf8').split('\n');
  let sum = 0;

  for (const line of lines) {
    let firstDigit = '';
    let lastDigit = '';

    for (const char of line.split('')) {
      if (!isNaN(char) && !firstDigit) firstDigit = char;
      if (!isNaN(char)) lastDigit = char;
    }

    let combinedString = firstDigit + lastDigit;
    sum += parseInt(combinedString);
  }

  return sum;
}

console.log(firstSolution());

/*
  function firstSolution() {
    const lines = fs.readFileSync('first-input.txt', 'utf8').split('\n');
    let sum = 0;

    for (const line of lines) {
      let firstDigit = line.split('').find(c => parseInt(c));
      let secondDigit = line.split('').reverse().find(c => parseInt(c));
      let combinedString = firstDigit + secondDigit;
      
      sum += parseInt(combinedString);
    }

    return sum;
  }

  console.log(firstSolution());
*/