function generateParenthesis(n) {
  const res = [];
  function dfs(s, o, c) {
    if (s.length === 2 * n) {
      res.push(s);
      return;
    }
    if (o < n) dfs(s + "(", o + 1, c);
    if (c < o) dfs(s + ")", o, c + 1);
  }
  dfs("", 0, 0);
  return res;
}
