var minReorder=function(n,connections){
let g=Array.from({length:n},()=>[])
for(let [a,b] of connections){
g[a].push([b,1])
g[b].push([a,0])
}
let v=new Array(n).fill(false)
let res=0
function dfs(i){
v[i]=true
for(let [j,c] of g[i]){
if(!v[j]){
res+=c
dfs(j)
}
}
}
dfs(0)
return res
}
