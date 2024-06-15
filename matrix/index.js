// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  const last = n * n;
  //  let next = 1;

  //prepare an array of arrays
  const matrix = [];
  for (let i = 0; i < n; i++) {
    const insideArr = new Array(n);
    matrix.push([...insideArr]);
  }
  let counter = 1;

  let startCol = 0;
  let endCol = n - 1;
  let startRow = 0;
  let endRow = n - 1;

  while (startCol <= endCol && startRow <= endRow) {
    for (let i = startCol; i <= endCol; i++) {
      matrix[startRow][i] = counter;
      counter = counter + 1;
    }
    startRow = startRow + 1;
    //down
    for (let i = startRow; i <= endRow; i++) {
      matrix[i][endRow] = counter;
      counter = counter + 1;
    }
    //left
    endCol = endCol - 1;
    for (let i = endCol; i >= startCol; i--) {
      matrix[endRow][i] = counter;
      counter = counter + 1;
    }
    //up
    endRow = endRow - 1;
    for (let i = endRow; i >= startRow; i--) {
      matrix[i][startCol] = counter;
      counter = counter + 1;
    }
    startCol = startCol + 1;
  }

  console.log(matrix);
  return matrix;
}

module.exports = matrix;
