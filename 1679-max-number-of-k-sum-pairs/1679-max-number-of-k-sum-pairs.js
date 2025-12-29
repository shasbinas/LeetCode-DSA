maxOperations = (nums, k) => {
  let m = new Map(), c = 0
  for (let x of nums) {
    let y = k - x
    if (m.get(y) > 0) {
      m.set(y, m.get(y) - 1)
      c++
    } else m.set(x, (m.get(x) || 0) + 1)
  }
  return c
}
