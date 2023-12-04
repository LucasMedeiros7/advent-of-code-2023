const fs = require('fs')

const numberMap = {
  "zero": "ze0o",
  "one": "on1e",
  "two": "tw2o",
  "three": "th3ree",
  "four": "fo4ur",
  "five": "fi5ve",
  "six": "si6x",
  "seven": "se7ven",
  "eight": "ei8ght",
  "nine": "ni9ne"
};

function solution() {
  const lines = fs.readFileSync('input2.txt', 'utf8').split('\n');
  let sum = 0;

  for (const line of lines) {
    let modStr = line;

    for (const [key, value] in numberMap) {
      modStr = modStr.replace(new RegExp(key, 'g'), value);
    }

    let firstDigit = -1;
    let lastDigit = -1;

    for (const c of modStr) {
      const digit = parseInt(c, 10);
      if (!isNaN(digit)) {
        firstDigit = (firstDigit === -1) ? digit * 10 : firstDigit;
        lastDigit = digit;
      }
    }

    sum += firstDigit + lastDigit;
  }

  return sum
}

console.log(solution());