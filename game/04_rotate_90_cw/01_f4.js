/**
 * Rotates a matrix 90 degrees clockwise.
 *
 * @param {Array<Array<any>>} matrix - The matrix to rotate.
 * @returns {Array<Array<any>>} The rotated matrix.
 */
export default function function4(matrix) {
  const result = [];
  for (let i = 0; i < matrix[0].length; i++) {
    const row = [];
    for (let j = matrix.length - 1; j >= 0; j--) {
      row.push(matrix[j][i]);
    }
    result.push(row);
  }
  return result;
}
