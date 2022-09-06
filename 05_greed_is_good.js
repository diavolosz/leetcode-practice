function score(dice) {

  // dice is an array 

  let tripleScoreTracker = {
    "1": 1000,
    "6": 600,
    "5": 500,
    "4": 400,
    "3": 300,
    "2": 200,
  }

  let rollObj = {}

  for (let roll of dice) {
    if (!rollObj[roll]) {
      rollObj[roll] = 1
    } else {
      rollObj[roll] += 1
    }
  }

  let maxScore = 0

  Object.keys(rollObj).forEach((eachNum) => {
    if (rollObj[eachNum] >= 3 && (eachNum === '1' || eachNum === '5')) {
      maxScore += tripleScoreTracker[eachNum]
      let remainingDice = rollObj[eachNum] - 3

      if (eachNum === '1') {
        maxScore += 100 * remainingDice
      }
      if (eachNum === '5') {
        maxScore += 50 * remainingDice
      }
    } else if (rollObj[eachNum] >= 3) {
      maxScore += tripleScoreTracker[eachNum]
    } else if (rollObj[eachNum] <= 3 && eachNum === '1') {
      maxScore += 100 * rollObj[eachNum]
    } else if (rollObj[eachNum] <= 3 && eachNum === '5') {
      maxScore += 50 * rollObj[eachNum]
    }
  })

  // console.log(maxScore)
  return maxScore
}

score([2, 3, 4, 6, 2])
score([4, 4, 4, 3, 3])
score([2, 4, 4, 5, 4])
score([1, 1, 1, 3, 1])
