productExceptSelf = nums => {
  let n = nums.length, res = Array(n).fill(1), p = 1
  for (let i = 0; i < n; i++) {
    res[i] = p
    p *= nums[i]
  }
  p = 1
  for (let i = n - 1; i >= 0; i--) {
    res[i] *= p
    p *= nums[i]
  }
  return res
}
