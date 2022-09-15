// function findMinOpeartion(matrix, n) {
//   // Initialize the sumRow[] and sumCol[] array to 0
//   let sumRow = new Array(n);
//   let sumCol = new Array(n);

//   for (let i = 0; i < n; i++) {
//     sumRow[i] = 0;
//     sumCol[i] = 0;
//   }

//   // Calculate sumRow[] and sumCol[] array
//   for (let i = 0; i < n; ++i) {
//     for (let j = 0; j < n; ++j) {
//       sumRow[i] += matrix[i][j];
//       sumCol[j] += matrix[i][j];
//     }
//   }



//   // Find maximum sum value in either row or in column
//   let maxSum = 0;
//   for (let i = 0; i < n; ++i) {
//     maxSum = Math.max(maxSum, sumRow[i]);
//     maxSum = Math.max(maxSum, sumCol[i]);
//   }


//   let count = 0;
//   for (let i = 0, j = 0; i < n && j < n;) {
//     // Find minimum increment required in either row or column
//     let diff = Math.min(maxSum - sumRow[i],
//       maxSum - sumCol[j]);

//     // Add difference in corresponding cell, sumRow[] and sumCol[] array
//     matrix[i][j] += diff;
//     sumRow[i] += diff;
//     sumCol[j] += diff;

//     // Update the count variable
//     count += diff;

//     // If ith row satisfied, increment ith value for next iteration
//     if (sumRow[i] == maxSum)
//       ++i;

//     // If jth column satisfied, increment jth value for next iteration
//     if (sumCol[j] == maxSum)
//       ++j;
//   }
//   return count;
// }


let input = [[1, 2, 3], [4, 2, 3], [3, 2, 1]]

let matrixOpp = function (matrix) {

  let outputMatrix = matrix
  let operation = 0

  for (let r = 0; r < outputMatrix.length; r++) {
    for (let c = 0; c < outputMatrix[r].length; c++) {

      if (outputMatrix[r][c] !== outputMatrix[c][r] && outputMatrix[r][c] < outputMatrix[c][r]) {
        let diff = outputMatrix[c][r] - outputMatrix[r][c]
        outputMatrix[r][c] += diff
        operation += diff
      } else if (outputMatrix[r][c] !== outputMatrix[c][r] && outputMatrix[r][c] > outputMatrix[c][r]) {
        let diff = outputMatrix[r][c] - outputMatrix[c][r]
        outputMatrix[c][r] += diff
        operation += diff
      }

    }
  }
  console.log('outputMatrix is', outputMatrix)
  console.log('operation needed is', operation)
  return outputMatrix
}

matrixOpp(input);


// [[1, 2, 3], [4, 2, 3], [3, 2, 1]]

// [
  // [1, 2, 3]
  // [4, 2, 3]
  // [3, 2, 1]
//]


// [
  // [1, 4, 3]
  // [4, 2, 3]
  // [3, 3, 1]
//]