const fs = require('fs')

function extractGameId(game) {
  return Number(game.split(' ')[1])
}

function parseSets(sets) {
  return sets.split(';').map(set => {
    const cubes = set.split(',')

    return cubes.map(cube => {
      const [amount, color] = cube.trim().split(' ')
      return { [amount]: color }
    })
  })
}

function parseLines(lines) {
  return lines.map((line) => {
    const [game, sets] = line.split(':')

    return {
      gameId: extractGameId(game),
      sets: parseSets(sets)
    }
  })
}

function isValidSet(set) {
  const MAX_VALUES = {
    red: 12,
    green: 13,
    blue: 14
  }
  return set.every((cube) => {
    const [amount, color] = Object.entries(cube)[0]
    return MAX_VALUES[color] >= amount
  })
}

function isValidGame(game) {
  return game.sets.every(isValidSet)
}

function main(lines) {
  return parseLines(lines)
    .filter(game => isValidGame(game))
    .reduce((acc, current) => acc + current.gameId, 0)
}

const lines = fs.readFileSync('input1.txt', 'utf8').split('\n');
console.log(main(lines))