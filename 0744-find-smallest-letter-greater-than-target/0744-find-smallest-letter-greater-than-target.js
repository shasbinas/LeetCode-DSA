function nextGreatestLetter(letters, target) {
  for (let ch of letters) {
    if (ch > target) {
      return ch; 
    }
  }
  return letters[0]; 
}