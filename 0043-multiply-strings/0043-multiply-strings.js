multiply = (a, b) => {
  if (a === "0" || b === "0") return "0"
  let r = Array(a.length + b.length).fill(0)
  for (let i = a.length - 1; i >= 0; i--) {
    for (let j = b.length - 1; j >= 0; j--) {
      let p = (a[i] - 0) * (b[j] - 0) + r[i + j + 1]
      r[i + j + 1] = p % 10
      r[i + j] += (p / 10) | 0
    }
  }
  while (r[0] === 0) r.shift()
  return r.join("")
}
