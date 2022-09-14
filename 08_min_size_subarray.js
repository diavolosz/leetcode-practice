//Given an array of positive integers nums and a positive integer target, return the minimal length of a contiguous subarray [numsl, numsl+1, ..., numsr-1, numsr] of which the sum is greater than or equal to target. If there is no such subarray, return 0 instead.



let minSubArrayLen = function(s, nums) {
  let arrayLength = Number.MAX_SAFE_INTEGER;
  let leftNumIndex = 0;
  let sum = 0;

  for (let rightNumIndex = 0; rightNumIndex < nums.length; rightNumIndex++) {
    sum += nums[rightNumIndex];
    while (sum >= s) {
      arrayLength = Math.min(arrayLength, rightNumIndex - leftNumIndex + 1);
      sum -= nums[leftNumIndex];
      leftNumIndex += 1;
    }
  }
  return arrayLength === Number.MAX_SAFE_INTEGER ? 0 : arrayLength;
}

// basically moving from left to right. 
// when a number is reached, we measure the length of array selected using right and left value 
// move the left arm now when the number is too large
// move the right arm when the number is too low



// var minSubArrayLen = function(s, nums) {
//   let distance = Number.MAX_SAFE_INTEGER;
//   let left = 0;
//   let sum = 0;
//   // left pointer and right pointer defines the window. 
//   // the goal is to find the smallest window that has a sum of s or larger.
//   for (let right = 0; right < nums.length; right++) {
//       sum += nums[right]; 
//       while (sum >= s) {
//           distance = Math.min(distance, right - left + 1);
//           sum -= nums[left];
//           left += 1;
//       }
//   }

//   return distance === Number.MAX_SAFE_INTEGER ? 0 : distance;
// };

// minSubArrayLen(7, [2,3,1,2,4,3])