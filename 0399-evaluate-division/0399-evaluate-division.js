var calcEquation=function(equations,values,queries){
let g={}
for(let i=0;i<equations.length;i++){
let [a,b]=equations[i]
let v=values[i]
if(!g[a])g[a]=[]
if(!g[b])g[b]=[]
g[a].push([b,v])
g[b].push([a,1/v])
}
function dfs(s,t,vis){
if(!g[s])return -1
if(s===t)return 1
vis.add(s)
for(let [n,w] of g[s]){
if(!vis.has(n)){
let r=dfs(n,t,vis)
if(r!==-1)return r*w
}
}
return -1
}
let res=[]
for(let [c,d] of queries){
if(!g[c]||!g[d])res.push(-1)
else res.push(dfs(c,d,new Set()))
}
return res
}
