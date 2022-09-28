//Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

function moveZeros(arr) {
  let zeroArr = []
  
  for (let x = 0; x < arr.length; x++) {
    if (arr[x] === 0) {
      zeroArr.push(arr[x])
      arr.splice(x, 1)
      x--
    }
  }
  return arr.concat(zeroArr)
}
