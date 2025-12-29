findMaxAverage = (nums, k) => {
  let sum = 0, maxSum = -Infinity
  for (let i = 0; i < k; i++) sum += nums[i]
  maxSum = sum
  for (let i = k; i < nums.length; i++) {
    sum += nums[i] - nums[i - k]
    if (sum > maxSum) maxSum = sum
  }
  return maxSum / k
}
