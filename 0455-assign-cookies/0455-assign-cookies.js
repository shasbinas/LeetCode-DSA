function findContentChildren(g, s) {
  g.sort((a, b) => a - b); 
  s.sort((a, b) => a - b);
  let i = 0; 
  let j = 0; 
  let count = 0;

  while (i < g.length && j < s.length) {
    if (s[j] >= g[i]) {  
      count++;
      i++;
      j++;
    } else {
      j++;
    }
  }
  return count;
}