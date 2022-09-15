

let input = [[1, 2, 3], [4, 2, 3], [3, 2, 1]]

let matrixOpp = function (matrix) {

  let outputMatrix = matrix
  let operation = 0

  let finalSum = 0

  for (let r = 0; r < outputMatrix.length; r++) {

    let Sum = matrix[r].reduce((partial, a) => partial + a)
    if (Sum >= finalSum) {
      finalSum = Sum
    }

    for (let r = 0; r < outputMatrix.length; r++) {
      for (let c = 0; c < outputMatrix[r].length; c++) {

        let rowSum = matrix[r].reduce((partial, a) => partial + a)

        let colSum = 0
        for (let row = 0; row < outputMatrix.length; row++) {
          colSum += matrix[row][c]
        }

        // console.log('row sum is ', rowSum)
        // console.log('col sum is', colSum)
        while (rowSum <  finalSum && colSum < finalSum) {
          matrix[r][c] += 1
          rowSum += 1
          console.log('rowSum', rowSum)
          colSum += 1
          console.log('colSum', colSum)
        }

      }
    }


  }
  console.log('outputMatrix is', outputMatrix)
  console.log('operation needed is', operation)
  // console.log('final row sum is', finalRowSum)

  return outputMatrix
}

matrixOpp(input);


// [[1, 2, 3], [4, 2, 3], [3, 2, 1]]


//input
// [
  // [1, 2, 3] 6
  // [4, 2, 3] 9
  // [3, 2, 1] 6
//]   8  6  7


//expected
// [
  // [2, 4, 3] 9
  // [4, 2, 3] 9
  // [3, 3, 3] 9
//]   9  9  9


