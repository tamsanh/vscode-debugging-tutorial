const seedrandom = require('seedrandom')

const random = seedrandom('tamu1')

const Direction = {
  "STOP": 0,
  "RIGHT": 1,
  "DOWN": 2,
  "EITHER": 3,
}

const PrintableDirection = {
  1: "➡️",
  2: "⬇️",
  3: "↘️",
  0: "✋",
}

class Cell {
  constructor(direction) {
    this.direction = direction
  }

  static create(dir) {
    if (dir == undefined) {
      const rnd = random()
      if(rnd > 0.75) {
        dir = Direction.RIGHT;
      } else if (rnd > 0.5) {
        dir = Direction.DOWN
      } else if (rnd > 0.25) {
        dir = Direction.EITHER
      } else {
        dir = Direction.STOP
      }
    }
    return new Cell(dir)
  }
}

function findLongestPath(paths) {
  let largest = 0
  for(let i=0; i<paths.length; i++) {
    const row = paths[i]
    for(let j=0; j<row.length; j++) {
      const curr = row[j]
      largest = curr > largest? curr: largest;
    }
  }
  return largest
}

function leftPad(zeros, num) {
  const numStr = num.toString()
  let ret = ""
  for(let i=numStr.length; i<zeros; i++) {
    ret += "0"
  }
  return ret + numStr
}

function printMatrixAndPaths(matrix, paths) {
  let longestPath = findLongestPath(paths)
  let numLength = longestPath.toString().length
  paths = paths || []
  for(let i=0; i<matrix.length; i++) {
    const row = matrix[i]
    const pathRow = paths[i] || []
    let line = ""
    for(let j=0; j<row.length; j++) {
      const col = row[j]
      line += PrintableDirection[col.direction] + " "
    }
    line += "      "
    for(let j=0; j<pathRow.length; j++) {
      const col = pathRow[j]
      line += leftPad(numLength, col) + " "
    }
    console.log(line)
  }
}

function generateMatrix(n) {
  n = n || 10
  let matrix = []
  for(let i=0; i < n; i++){
    let row = []
    for(let j=0; j < n; j++){
      row.push(Cell.create())
    }
    matrix.push(row)
  }
  return matrix
}

module.exports = {
  Cell: Cell,
  Direction: Direction,
  printMatrixAndPaths: printMatrixAndPaths,
  generateMatrix: generateMatrix
}
