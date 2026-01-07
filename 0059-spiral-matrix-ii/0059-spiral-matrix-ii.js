var generateMatrix=function(n){
let a=Array.from({length:n},()=>Array(n).fill(0))
let t=0,b=n-1,l=0,r=n-1,c=1
while(t<=b&&l<=r){
for(let i=l;i<=r;i++)a[t][i]=c++
t++
for(let i=t;i<=b;i++)a[i][r]=c++
r--
if(t<=b){for(let i=r;i>=l;i--)a[b][i]=c++;b--}
if(l<=r){for(let i=b;i>=t;i--)a[i][l]=c++;l++}
}
return a
}
