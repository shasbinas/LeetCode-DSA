dailyTemperatures = T => {
  let n = T.length, res = Array(n).fill(0), stack = []
  for (let i = 0; i < n; i++) {
    while (stack.length && T[i] > T[stack[stack.length-1]]) {
      let idx = stack.pop()
      res[idx] = i - idx
    }
    stack.push(i)
  }
  return res
}
