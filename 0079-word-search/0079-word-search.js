var exist=function(b,w){
let m=b.length,n=b[0].length
function d(i,j,k){
if(k==w.length)return true
if(i<0||j<0||i>=m||j>=n||b[i][j]!=w[k])return false
let t=b[i][j]
b[i][j]="#"
let r=d(i+1,j,k+1)||d(i-1,j,k+1)||d(i,j+1,k+1)||d(i,j-1,k+1)
b[i][j]=t
return r
}
for(let i=0;i<m;i++)
for(let j=0;j<n;j++)
if(d(i,j,0))return true
return false
}
