function isInterleave(s1, s2, s3) {
  let m = s1.length, n = s2.length;
  if (m + n !== s3.length) return false;
  if (n > m) {
    [s1, s2] = [s2, s1];
    [m, n] = [n, m];
  }
  const dp = new Array(n + 1).fill(false);
  dp[0] = true;
  for (let j = 1; j <= n; j++) {
    dp[j] = dp[j - 1] && s2[j - 1] === s3[j - 1];
  }
  for (let i = 1; i <= m; i++) {
    dp[0] = dp[0] && s1[i - 1] === s3[i - 1];
    for (let j = 1; j <= n; j++) {
      const a = dp[j] && s1[i - 1] === s3[i + j - 1];
      const b = dp[j - 1] && s2[j - 1] === s3[i + j - 1];
      dp[j] = a || b;
    }
  }
  return dp[n];
}
