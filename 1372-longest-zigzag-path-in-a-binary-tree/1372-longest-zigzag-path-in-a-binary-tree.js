longestZigZag = root => {
  let maxLen = 0
  const dfs = (node, goLeft, length) => {
    if (!node) return
    maxLen = Math.max(maxLen, length)
    if (goLeft) {
      dfs(node.left, false, length + 1)
      dfs(node.right, true, 1)
    } else {
      dfs(node.right, true, length + 1)
      dfs(node.left, false, 1)
    }
  }
  dfs(root, true, 0)
  dfs(root, false, 0)
  return maxLen
}
