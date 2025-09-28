// Given data
const nums = [2, 4, 7, 8, 11, 14];
const target = 18;

// Function to find pairs of indices
function findPairs(nums, target) {
  let results = []; // Step 1: Initialize empty array

  // Step 2: Nested loop
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      // Step 3: Check if sum equals target
      if (nums[i] + nums[j] === target) {
        // Step 4: Add indices to results
        results.push([i, j]);
      }
    }
  }

  // Step 5: Return results
  return results;
}

// Call the function
console.log(findPairs(nums, target));
