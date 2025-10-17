function wiggleSort(nums) {
  const sorted = [...nums].sort((a, b) => a - b);
  const n = nums.length;
  let mid = Math.floor((n - 1) / 2);
  let end = n - 1;         
  for (let i = 0; i < n; i++) {
    nums[i] = i % 2 === 0 ? sorted[mid--] : sorted[end--];
  }
}