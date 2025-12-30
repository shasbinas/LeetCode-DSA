var longestCommonSubsequence=function(a,b){
let m=a.length,n=b.length
let dp=Array(n+1).fill(0)
for(let i=1;i<=m;i++){
let prev=0
for(let j=1;j<=n;j++){
let tmp=dp[j]
if(a[i-1]===b[j-1])dp[j]=prev+1
else dp[j]=Math.max(dp[j],dp[j-1])
prev=tmp
}
}
return dp[n]
}
