var nthUglyNumber=function(n){
  let a=0,b=0,c=0,dp=[1];
  for(let i=1;i<n;i++){
    let x=dp[a]*2,y=dp[b]*3,z=dp[c]*5,m=Math.min(x,y,z);
    dp[i]=m;
    if(m===x)a++;
    if(m===y)b++;
    if(m===z)c++;
  }
  return dp[n-1];
}
