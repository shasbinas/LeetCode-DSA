function findNthDigit(n){
  let digitLength = 1;
  let count = 9;
  let start = 1;
  while(n > digitLength * count){
    n -= digitLength * count;
    digitLength++;
    count *= 10;
    start *= 10;
  }
  const num = start + Math.floor((n - 1) / digitLength);
  const s = String(num);
  return Number(s[(n - 1) % digitLength]);
}
