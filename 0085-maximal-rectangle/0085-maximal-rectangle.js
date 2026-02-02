var maximalRectangle=function(matrix){
if(!matrix.length)return 0
let cols=matrix[0].length
let heights=new Array(cols).fill(0)
let max=0
for(let i=0;i<matrix.length;i++){
for(let j=0;j<cols;j++){
heights[j]=matrix[i][j]=="1"?heights[j]+1:0
}
let stack=[]
for(let j=0;j<=cols;j++){
let curr=j==cols?0:heights[j]
while(stack.length&&curr<heights[stack[stack.length-1]]){
let h=heights[stack.pop()]
let w=stack.length?j-stack[stack.length-1]-1:j
max=Math.max(max,h*w)
}
stack.push(j)
}
}
return max
}
