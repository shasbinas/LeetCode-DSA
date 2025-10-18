function findShortestSubArray(nums) {
  const freq = {};
  const firstIndex = {};
  const lastIndex = {};
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if (firstIndex[n] === undefined) {
      firstIndex[n] = i;
    }
    lastIndex[n] = i;
    freq[n] = (freq[n] || 0) + 1;
  }
  const degree = Math.max(...Object.values(freq));
  let minLength = Infinity;
  for (let num in freq) {
    if (freq[num] === degree) {
      minLength = Math.min(minLength, lastIndex[num] - firstIndex[num] + 1);
    }
  }
  return minLength;
}
