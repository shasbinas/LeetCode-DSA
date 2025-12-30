var nearestExit=function(maze,entrance){
let m=maze.length,n=maze[0].length
let q=[[entrance[0],entrance[1],0]]
maze[entrance[0]][entrance[1]]='+'
let d=[[1,0],[-1,0],[0,1],[0,-1]]
while(q.length){
let [r,c,s]=q.shift()
for(let [dr,dc] of d){
let nr=r+dr,nc=c+dc
if(nr>=0&&nr<m&&nc>=0&&nc<n&&maze[nr][nc]==='.'){
if(nr===0||nc===0||nr===m-1||nc===n-1)return s+1
maze[nr][nc]='+'
q.push([nr,nc,s+1])
}
}
}
return -1
}
