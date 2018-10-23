const { expect} = require('chai');
const { describe } = require('mocha');
const { Cell, Direction } = require('./libs')
const isBonus = process.env.IS_BONUS === "TRUE"
let meme
if(isBonus) {
  meme = require('./bonus')
} else {
  meme = require('./index')
}

if(!isBonus) {
  describe('Cell Utilities', () => {
    it('should know if you can move to the right, from a given cell', async() => {
      expect(meme.canMoveRight(Cell.create(Direction.RIGHT))).to.equal(true)
      expect(meme.canMoveRight(Cell.create(Direction.EITHER))).to.equal(true)
      expect(meme.canMoveRight(Cell.create(Direction.STOP))).to.equal(false)
      expect(meme.canMoveRight(Cell.create(Direction.DOWN))).to.equal(false)
    });
    it('should know if you can move down, from a given cell', async() => {
      expect(meme.canMoveDown(Cell.create(Direction.RIGHT))).to.equal(false)
      expect(meme.canMoveDown(Cell.create(Direction.EITHER))).to.equal(true)
      expect(meme.canMoveDown(Cell.create(Direction.STOP))).to.equal(false)
      expect(meme.canMoveDown(Cell.create(Direction.DOWN))).to.equal(true)
    });
  });

  describe('Cell Matrix Utilities', () => {
    it('should properly get the top cell', async() => {
      const matrix = [
        [Cell.create(Direction.RIGHT), Cell.create(Direction.DOWN)],
        [Cell.create(Direction.EITHER), Cell.create(Direction.STOP)],
      ]
      expect(meme.getUp(matrix, 0, 0)).to.deep.equal(undefined)
      expect(meme.getUp(matrix, 0, 1)).to.deep.equal(Cell.create(Direction.RIGHT))
      expect(meme.getUp(matrix, 1, 1)).to.deep.equal(Cell.create(Direction.DOWN))
      expect(meme.getUp(matrix, 1, 0)).to.deep.equal(undefined)
      expect(meme.getUp(matrix, 9, 9)).to.deep.equal(undefined)
    });
    it('should properly get the left cell', async() => {
      const matrix = [
        [Cell.create(Direction.RIGHT), Cell.create(Direction.DOWN)],
        [Cell.create(Direction.EITHER), Cell.create(Direction.STOP)],
      ]
      expect(meme.getLeft(matrix, 0, 0)).to.deep.equal(undefined)
      expect(meme.getLeft(matrix, 0, 1)).to.deep.equal(undefined)
      expect(meme.getLeft(matrix, 1, 1)).to.deep.equal(Cell.create(Direction.EITHER))
      expect(meme.getLeft(matrix, 1, 0)).to.deep.equal(Cell.create(Direction.RIGHT))
      expect(meme.getLeft(matrix, 9, 9)).to.deep.equal(undefined)
    });
  })
}

describe('Path Counter', () => {
  it('should properly count the ways to get to a path', async() => {
    const matrix = [
      [Cell.create(Direction.EITHER), Cell.create(Direction.EITHER), Cell.create(Direction.EITHER)],
      [Cell.create(Direction.EITHER), Cell.create(Direction.EITHER), Cell.create(Direction.EITHER)],
      [Cell.create(Direction.EITHER), Cell.create(Direction.EITHER), Cell.create(Direction.EITHER)],
    ]
    expect(meme.countPaths(matrix)).to.deep.equal( [
      [1, 1, 1],
      [1, 2, 3],
      [1, 3, 6]
    ]);
  });
  it('should properly count the ways to get to a path with stops', async() => {
    const matrix = [
      [Cell.create(Direction.STOP), Cell.create(Direction.STOP), Cell.create(Direction.STOP)],
      [Cell.create(Direction.STOP), Cell.create(Direction.STOP), Cell.create(Direction.STOP)],
      [Cell.create(Direction.STOP), Cell.create(Direction.STOP), Cell.create(Direction.STOP)],
    ]
    expect(meme.countPaths(matrix)).to.deep.equal( [
      [1, 0, 0],
      [0, 0, 0],
      [0, 0, 0]
    ]);
  });
  it('should properly count the ways to get to a path with rights', async() => {
    const matrix = [
      [Cell.create(Direction.RIGHT), Cell.create(Direction.RIGHT), Cell.create(Direction.RIGHT)],
      [Cell.create(Direction.RIGHT), Cell.create(Direction.RIGHT), Cell.create(Direction.RIGHT)],
      [Cell.create(Direction.RIGHT), Cell.create(Direction.RIGHT), Cell.create(Direction.RIGHT)],
    ]
    expect(meme.countPaths(matrix)).to.deep.equal( [
      [1, 1, 1],
      [0, 0, 0],
      [0, 0, 0]
    ]);
  });
  it('should properly count the ways to get to a path with downs', async() => {
    const matrix = [
      [Cell.create(Direction.DOWN), Cell.create(Direction.DOWN), Cell.create(Direction.DOWN)],
      [Cell.create(Direction.DOWN), Cell.create(Direction.DOWN), Cell.create(Direction.DOWN)],
      [Cell.create(Direction.DOWN), Cell.create(Direction.DOWN), Cell.create(Direction.DOWN)],
    ]
    expect(meme.countPaths(matrix)).to.deep.equal( [
      [1, 0, 0],
      [1, 0, 0],
      [1, 0, 0]
    ]);
  });
})