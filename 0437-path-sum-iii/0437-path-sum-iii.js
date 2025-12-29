pathSum = (root, targetSum) => {
  let count = 0
  const dfs = (node, arr) => {
    if (!node) return
    arr.push(node.val)
    let sum = 0
    for (let i = arr.length - 1; i >= 0; i--) {
      sum += arr[i]
      if (sum === targetSum) count++
    }
    dfs(node.left, arr)
    dfs(node.right, arr)
    arr.pop()
  }
  dfs(root, [])
  return count
}
