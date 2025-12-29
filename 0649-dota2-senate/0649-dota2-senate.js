predictPartyVictory = senate => {
  let n = senate.length
  let queueR = [], queueD = []
  for (let i = 0; i < n; i++) {
    if (senate[i] === 'R') queueR.push(i)
    else queueD.push(i)
  }
  while (queueR.length && queueD.length) {
    let r = queueR.shift(), d = queueD.shift()
    if (r < d) queueR.push(r + n)
    else queueD.push(d + n)
  }
  return queueR.length ? "Radiant" : "Dire"
}
