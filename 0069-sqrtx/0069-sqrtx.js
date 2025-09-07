function mySqrt(x) {
  if (x < 2) return x;
  let left = 1, right = Math.floor(x / 2), ans = 0;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const sq = mid * mid;

    if (sq === x) return mid;
    if (sq < x) {
      ans = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return ans;
}