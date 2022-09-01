
// You are given an array of strings nums and an integer k. Each string in nums represents an integer without leading zeros.

// Return the string that represents the kth largest integer in nums.





const kthLargestNumber = function (nums, k) {

  console.log(("38272299275037314530").valueOf())

  let convertedArr = nums.map((num) => {
    return (num).valueOf()
  })
  let sortedArr = convertedArr.sort((a, z) => z - a)
  return sortedArr[k - 1].toString()

};

// kthLargestNumber(["3","6","7","10"], 4)

// model answer 


const kthLargestNumberModel = function (nums, k) {

  nums.sort((a, b) => b.length - a.length || b.localeCompare(a));
  return nums[k - 1];

};