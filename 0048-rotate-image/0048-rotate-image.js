rotate = m => {
  let n = m.length
  for (let i = 0; i < n; i++)
    for (let j = i; j < n; j++)
      [m[i][j], m[j][i]] = [m[j][i], m[i][j]]
  for (let i = 0; i < n; i++) m[i].reverse()
}
