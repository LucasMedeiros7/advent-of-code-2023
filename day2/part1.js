const fs = require('fs')

const MAX_VALUES = {
  red: 12,
  green: 13,
  blue: 14
}

function solution() {
  const lines = fs.readFileSync('input1.txt', 'utf8').split('\n');
  const possiblesGames = new Set()

  for (let line of lines) {
    let [game, sets] = line.split(':')
    sets = sets.split(';')

    let NUMBER_OF_GAME = Number(game.split(' ')[1])
    possiblesGames.add(NUMBER_OF_GAME)

    for (let i = 0; i < sets.length; i++) {
      let cubes = sets[i].split(',')

      for (let i = 0; i < cubes.length; i++) {
        let [, qnt, cube] = cubes[i].split(' ')
        if (Number(qnt) > MAX_VALUES[cube]) {
          possiblesGames.delete(NUMBER_OF_GAME)
          break
        }
      }
    }
  }

  return Array.from(possiblesGames).reduce((a,b) => Number(a) + Number(b), 0)
}

console.log(solution())