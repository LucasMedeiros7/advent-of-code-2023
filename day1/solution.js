const fs = require('fs')

const mapNumbers = {
  zero: 0,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9
};
const rgx = /(one|two|three|four|five|six|seven|eight|nine)/g;

function solution() {
  const lines = fs.readFileSync('input2.txt', 'utf8').split('\n');

  let sum = 0;
  let spelledNumber = '';
  let numbers = '';

  for (const line of lines) {

    for (let i = 0; i < line.length; i++) {
      spelledNumber += line[i];

      if (spelledNumber.match(rgx)) {
        numbers += mapNumbers[spelledNumber.match(rgx)].toString()
        spelledNumber = ''
        i--
      }

      if (!isNaN(line[i])) numbers += line[i]
    }

    let combinedString = numbers[0] + numbers[numbers.length - 1]
    numbers = '';
    sum += parseInt(combinedString);
  }

  return sum;
}

console.log(solution());