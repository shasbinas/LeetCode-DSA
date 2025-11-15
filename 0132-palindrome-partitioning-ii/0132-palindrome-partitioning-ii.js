var minCut = function(s) {
  const n = s.length;
  const dp = Array(n).fill(0);
  const pal = Array.from({ length: n }, () => Array(n).fill(false));
  for (let i = 0; i < n; i++) {
    let cuts = i;
    for (let j = 0; j <= i; j++) {
      if (s[j] === s[i] && (i - j < 2 || pal[j+1][i-1])) {
        pal[j][i] = true;
        cuts = j === 0 ? 0 : Math.min(cuts, dp[j-1] + 1);
      }
    }
    dp[i] = cuts;
  }
  return dp[n-1];
};
