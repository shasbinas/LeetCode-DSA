maxVowels = (s, k) => {
  let vowels = new Set(['a','e','i','o','u']), count = 0, maxCount = 0
  for (let i = 0; i < k; i++) if (vowels.has(s[i])) count++
  maxCount = count
  for (let i = k; i < s.length; i++) {
    if (vowels.has(s[i])) count++
    if (vowels.has(s[i - k])) count--
    if (count > maxCount) maxCount = count
  }
  return maxCount
}
