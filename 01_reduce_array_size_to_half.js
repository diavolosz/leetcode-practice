// You are given an integer array arr. You can choose a set of integers and remove all the occurrences of these integers in the array.

// Return the minimum size of the set so that at least half of the integers of the array are removed.

// Input: arr = [3,3,3,3,5,5,5,2,2,7]
// Output: 2
// Input: arr = [7,7,7,7,7,7]
// Output: 1


const minSetSize = function (arr) {

  const halfThreshhold = arr.length / 2
  // console.log('halfThreshhold is:', halfThreshhold)

  let outputArr = []
  for (let each of [...arr]) {
    if (!outputArr.includes(each)) {
      outputArr.push(each)
    }
  }
  // console.log('outputArr is:', outputArr)



  const getCombinations = function(valuesArray) {
    let combi = [];
    let temp = [];
    let slent = Math.pow(2, valuesArray.length);
    for (let i = 0; i < slent; i++) {
      temp = [];
      for (let j = 0; j < valuesArray.length; j++) {
        if ((i & Math.pow(2, j))) {
          temp.push(valuesArray[j]);
        }
      }
      if (temp.length > 0) {
        combi.push(temp);
      }
    }
    combi.sort((a, b) => a.length - b.length);
    return combi;
  }
  // console.log('conbinations are:', getCombinations(outputArr))
  let setCombination = getCombinations(outputArr)


  for (let set of setCombination) {
    let tempArr = [...arr]
    let filteredArr = tempArr.filter(each => !set.includes(each))
    // console.log('filteredArr is:', filteredArr)
    if (filteredArr.length <= halfThreshhold) {
      let minSetLength = 0
      minSetLength = set.length
      // console.log('minSetLength is:', minSetLength)
      // console.log('minSetLength type is:', typeof minSetLength)

      return minSetLength
    }
  }
};


// theoretical model answer 

var minSetSizeModel = function(arr) {
  const map = new Map();
  
  for (const num of arr) {
      if (!map.has(num)) map.set(num, 0);
      map.set(num, map.get(num) + 1);
  }
  
  // because javascript doesn't have built-in priority queue data structure, we need to just sort descending based on count to mimic maxHeap
  const countPairs = [...map].sort((a, b) => b[1] - a[1]); 
  
  const target = arr.length / 2; // we know its even, so we don't have to worry about remainders
  
  let index = 0;
  let counts = 0;
  let sum = 0;
  
  while (sum < target) {
      sum += countPairs[index++][1];
      counts++;
  }
  
  return counts;
};
