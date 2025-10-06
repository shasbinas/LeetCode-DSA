function findLengthOfLCIS(nums) {
  if (nums.length === 0) return 0;
  let maxLen = 1;
  let currentLen = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      currentLen++;
      maxLen = Math.max(maxLen, currentLen);
    } else {
      currentLen = 1;
    }
  }
  return maxLen;
}