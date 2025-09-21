function canConstruct(ransomNote, magazine) {
  const count = {};
  for (let ch of magazine) {
    count[ch] = (count[ch] || 0) + 1;
  }
  for (let ch of ransomNote) {
    if (!count[ch]) {
      return false;  
    }
    count[ch]--;  
  }
  return true;
};