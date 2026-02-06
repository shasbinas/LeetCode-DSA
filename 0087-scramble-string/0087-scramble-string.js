var isScramble=function(s1,s2){
if(s1===s2)return true
if(s1.length!==s2.length)return false
let memo={}
function helper(a,b){
if(a===b)return true
if(memo[a+" "+b]!==undefined)return memo[a+" "+b]
if(a.split("").sort().join("")!==b.split("").sort().join(""))return memo[a+" "+b]=false
let n=a.length
for(let i=1;i<n;i++){
if((helper(a.slice(0,i),b.slice(0,i))&&helper(a.slice(i),b.slice(i)))||
(helper(a.slice(0,i),b.slice(n-i))&&helper(a.slice(i),b.slice(0,n-i))))return memo[a+" "+b]=true
}
return memo[a+" "+b]=false
}
return helper(s1,s2)
}
