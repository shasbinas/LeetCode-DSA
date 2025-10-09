function reverse(x) {
  const INT_MAX = 2 ** 31 - 1; 
  const INT_MIN = -(2 ** 31);
  let rev = 0;
  let num = x;

  while (num !== 0) {
    let pop = num % 10;
    num = (num / 10) | 0; 
    if (rev > INT_MAX / 10 || (rev === INT_MAX / 10 && pop > 7)) return 0;
    if (rev < INT_MIN / 10 || (rev === INT_MIN / 10 && pop < -8)) return 0;
    rev = rev * 10 + pop;
  }
  return rev;
}