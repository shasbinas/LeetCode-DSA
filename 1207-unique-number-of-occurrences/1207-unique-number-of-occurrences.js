uniqueOccurrences = arr => {
  let freq = new Map()
  for (let x of arr) freq.set(x, (freq.get(x) || 0) + 1)
  let counts = new Set(freq.values())
  return counts.size === freq.size
}
