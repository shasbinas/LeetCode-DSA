var setZeroes=function(matrix){
let m=matrix.length,n=matrix[0].length
let fr=false,fc=false
for(let i=0;i<m;i++)if(matrix[i][0]===0)fc=true
for(let j=0;j<n;j++)if(matrix[0][j]===0)fr=true
for(let i=1;i<m;i++){
for(let j=1;j<n;j++){
if(matrix[i][j]===0){
matrix[i][0]=0
matrix[0][j]=0
}
}
}
for(let i=1;i<m;i++){
if(matrix[i][0]===0){
for(let j=1;j<n;j++)matrix[i][j]=0
}
}
for(let j=1;j<n;j++){
if(matrix[0][j]===0){
for(let i=1;i<m;i++)matrix[i][j]=0
}
}
if(fc){
for(let i=0;i<m;i++)matrix[i][0]=0
}
if(fr){
for(let j=0;j<n;j++)matrix[0][j]=0
}
}
