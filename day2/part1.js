const fs = require('fs')


function extractGameId(game) {
  return Number(game.split(' ')[1])
}

function parseSets(sets) {
  return sets.split(';').map(set => {
    const cubes = set.split(',')

    return cubes.map(cube => {
      const [_, key, color] = cube.split(' ')
      return { [key]: color }
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

function isValidSet(sets) {
  const MAX_VALUES = {
    red: 12,
    green: 13,
    blue: 14
  }

  return sets.every(set => {
    return set.every((cube) => {
      const [key, color] = Object.entries(cube)[0]
      return MAX_VALUES[color] >= key
    })
  })
}

function main(lines) {
  const parsed = parseLines(lines);
  const possiblesGames = new Set()

  for (const game of parsed) {
    possiblesGames.add(game.gameId)
    if (!isValidSet(game.sets)) possiblesGames.delete(game.gameId)
  }

  return [...possiblesGames].reduce((a, b) => a + b, 0)
}

const lines = fs.readFileSync('input1.txt', 'utf8').split('\n');
console.log(main(lines))