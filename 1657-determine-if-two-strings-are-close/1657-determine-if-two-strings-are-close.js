closeStrings = (w1, w2) => {
  if (w1.length !== w2.length) return false
  let c1 = Array(26).fill(0), c2 = Array(26).fill(0)
  for (let ch of w1) c1[ch.charCodeAt(0) - 97]++
  for (let ch of w2) c2[ch.charCodeAt(0) - 97]++
  for (let i = 0; i < 26; i++) if ((c1[i] && !c2[i]) || (!c1[i] && c2[i])) return false
  c1.sort((a,b)=>a-b); c2.sort((a,b)=>a-b)
  for (let i = 0; i < 26; i++) if (c1[i] !== c2[i]) return false
  return true
}
