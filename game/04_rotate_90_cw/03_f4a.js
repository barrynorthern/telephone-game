function rotateMatrix(arr) {
  const numRows = arr.length;
  const numCols = arr[0].length;
  const rotatedArr = [];

  for (let col = 0; col < numCols; col++) {
    rotatedArr[col] = [];
    for (let row = numRows - 1; row >= 0; row--) {
      rotatedArr[col].push(arr[row][col]);
    }
  }

  return rotatedArr;
}
