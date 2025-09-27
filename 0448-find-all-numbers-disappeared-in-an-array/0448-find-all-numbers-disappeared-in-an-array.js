function findDisappearedNumbers(nums) {
  const n = nums.length;
  const fullSet = new Set(Array.from({ length: n }, (_, i) => i + 1));
  for (let num of nums) {
    fullSet.delete(num);
  }
  return Array.from(fullSet);
}