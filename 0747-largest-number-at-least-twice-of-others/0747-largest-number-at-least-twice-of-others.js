function dominantIndex(nums) {
  let max = Math.max(...nums);
  let index = nums.indexOf(max);
  for (let num of nums) {
    if (num !== max && max < 2 * num) {
      return -1;
    }
  }
  return index;
}