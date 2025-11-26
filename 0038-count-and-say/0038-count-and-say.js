let countAndSay=function(n){
  let s="1";
  for(let i=2;i<=n;i++){
    let t="",c=1;
    for(let j=1;j<=s.length;j++){
      if(s[j]===s[j-1]) c++;
      else{
        t+=c+s[j-1];
        c=1;
      }
    }
    s=t;
  }
  return s;
};
