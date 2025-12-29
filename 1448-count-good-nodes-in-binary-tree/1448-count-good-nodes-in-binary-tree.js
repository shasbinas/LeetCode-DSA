goodNodes = root => {
  let count = 0
  const dfs = (node, maxVal) => {
    if (!node) return
    if (node.val >= maxVal) count++
    dfs(node.left, Math.max(maxVal, node.val))
    dfs(node.right, Math.max(maxVal, node.val))
  }
  dfs(root, -Infinity)
  return count
}
