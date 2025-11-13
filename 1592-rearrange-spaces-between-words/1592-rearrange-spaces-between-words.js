function reorderSpaces(text){
  const totalSpaces = text.split('').filter(c=>c===' ').length;
  const words = text.trim().split(/\s+/);
  if(words.length===1) return words[0] + ' '.repeat(totalSpaces);
  const spaceBetween = Math.floor(totalSpaces / (words.length - 1));
  const extraSpaces = totalSpaces % (words.length - 1);
  return words.join(' '.repeat(spaceBetween)) + ' '.repeat(extraSpaces);
}
