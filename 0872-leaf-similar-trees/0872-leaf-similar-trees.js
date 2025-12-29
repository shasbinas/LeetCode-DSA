leafSimilar = (root1, root2) => {
  const getLeaves = (root) => {
    if (!root) return []
    if (!root.left && !root.right) return [root.val]
    return [...getLeaves(root.left), ...getLeaves(root.right)]
  }
  const leaves1 = getLeaves(root1), leaves2 = getLeaves(root2)
  if (leaves1.length !== leaves2.length) return false
  for (let i = 0; i < leaves1.length; i++) if (leaves1[i] !== leaves2[i]) return false
  return true
}
