var orangesRotting=function(g){
let m=g.length,n=g[0].length
let q=[],f=0,t=0
for(let i=0;i<m;i++)for(let j=0;j<n;j++){
if(g[i][j]===2)q.push([i,j])
if(g[i][j]===1)f++
}
let d=[[1,0],[-1,0],[0,1],[0,-1]]
while(q.length&&f){
let sz=q.length
for(let k=0;k<sz;k++){
let [r,c]=q.shift()
for(let [dr,dc] of d){
let nr=r+dr,nc=c+dc
if(nr>=0&&nr<m&&nc>=0&&nc<n&&g[nr][nc]===1){
g[nr][nc]=2
f--
q.push([nr,nc])
}
}
}
t++
}
return f? -1:t
}
