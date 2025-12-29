pivotIndex = nums => {
  let total = nums.reduce((a,b)=>a+b,0), left = 0
  for (let i = 0; i < nums.length; i++) {
    if (left === total - left - nums[i]) return i
    left += nums[i]
  }
  return -1
}
