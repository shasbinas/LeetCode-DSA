function reverseVowels(s) {
  const vowels = 'aeiouAEIOU';
  let arr = s.split('');
  let i = 0, j = arr.length - 1;
  while (i < j) {
    while (i < j && !vowels.includes(arr[i])) i++;
    while (i < j && !vowels.includes(arr[j])) j--;
    [arr[i], arr[j]] = [arr[j], arr[i]];
    i++;
    j--;
  }
  return arr.join('');
}
