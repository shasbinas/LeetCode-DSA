function reverseVowels(s){
  const v=new Set(['a','e','i','o','u','A','E','I','O','U'])
  const a=s.split('')
  let l=0,r=a.length-1
  while(l<r){
    while(l<r&&!v.has(a[l]))l++
    while(l<r&&!v.has(a[r]))r--
    ;[a[l],a[r]]=[a[r],a[l]]
    l++;r--
  }
  return a.join('')
}
