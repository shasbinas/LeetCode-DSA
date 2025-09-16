function reverseVowels(s) {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
  let arr = s.split('');
  let left = 0, right = arr.length - 1;
  while (left < right) {
    while (left < right && !vowels.has(arr[left])) {
      left++;
    }
    while (left < right && !vowels.has(arr[right])) {
      right--;
    }
    if (left < right) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
  }
  return arr.join('');
}