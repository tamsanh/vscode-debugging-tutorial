const { generateMatrix, printMatrixAndPaths } = require('./libs')

function countPaths(matrix) {
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
  countPaths
}