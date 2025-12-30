var minDistance=function(a,b){
let m=a.length,n=b.length
let dp=Array(n+1).fill(0).map((_,i)=>i)
for(let i=1;i<=m;i++){
let prev=dp[0]
dp[0]=i
for(let j=1;j<=n;j++){
let tmp=dp[j]
if(a[i-1]===b[j-1])dp[j]=prev
else dp[j]=1+Math.min(dp[j-1],dp[j],prev)
prev=tmp
}
}
return dp[n]
}
