const { generateMatrix, printMatrixAndPaths } = require('./libs')

function getLeft(m, x, y) {
  return (m[y] || [])[x-1]
}

function getUp(m, x, y) {
  return (m[y-1] || [])[x]
}

function canMoveRight(cell) {
  return cell !== undefined && (cell.direction & 1) > 0
}

function canMoveDown(cell) {
  return cell !== undefined && (cell.direction & 2) > 0
}

function sumSurroundingCells(mem, matrix, x, y) {
  const leftCell = getLeft(matrix, x, y)
  const upCell = getUp(matrix, x, y)

  let numPaths = 0

  if(canMoveRight(leftCell)){
      numPaths += getLeft(mem, x, y) || 0
  }
  if(canMoveDown(upCell)) {
      numPaths += getUp(mem, x, y) || 0
  }
  return numPaths
}

function countPaths(matrix) {
  let mem = []
  for(let y=0; y<matrix.length; y++) {
    let row = []
    mem.push(row)
    for(let x=0; x<matrix[0].length; x++) {
      let blockPaths
      if(y == 0 && x == 0) {
        blockPaths = 1
      } else {
        blockPaths = sumSurroundingCells(mem, matrix, x, y)
      }
      row.push(blockPaths)
    }
  }
  return mem
}

function main() {
  let matrix = generateMatrix()
  let paths = countPaths(matrix)
  printMatrixAndPaths(matrix, paths)
}

if(typeof module !=  'undefined' && !module.parent) {
  main()
}

module.exports = {
  getLeft,
  getUp,
  canMoveRight,
  canMoveDown,
  countPaths
}