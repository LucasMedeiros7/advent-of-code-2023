const fs = require('fs')

function parseSets(sets) {
  return sets.split(';').map(set => {
    const cubes = set.split(',')

    return cubes.map(cube => {
      const [amount, color] = cube.trim().split(' ')
      return { [color]: Number(amount) }
    })
  })
}

function parseLines(lines) {
  return lines.map((line) => {
    const input = line.split(":")[1]
    return parseSets(input.trim())
  })
}

function getMinSetPower(sets) {
  const minSet = {
    red: 0,
    green: 0,
    blue: 0,
  };

  for (const draw of sets.flat()) {
    const [color, amount] = Object.entries(draw)[0];

    if (amount > minSet[color]) {
      minSet[color] = amount;
    }
  }

  return minSet.red * minSet.green * minSet.blue;
}


function main(lines) {
  const games = parseLines(lines)
  return games
    .map(getMinSetPower)
    .reduce((a, b) => a + b, 0)
}

const lines = fs.readFileSync('input2.txt', 'utf8').split('\n');
console.log(main(lines))