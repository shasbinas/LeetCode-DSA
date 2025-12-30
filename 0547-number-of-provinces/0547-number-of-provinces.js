var findCircleNum=function(m){
let n=m.length
let v=new Array(n).fill(false)
let c=0
function dfs(i){
v[i]=true
for(let j=0;j<n;j++){
if(m[i][j]===1&&!v[j])dfs(j)
}
}
for(let i=0;i<n;i++){
if(!v[i]){
c++
dfs(i)
}
}
return c
}
