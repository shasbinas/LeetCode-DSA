var minFlips=function(a,b,c){
let res=0
while(a||b||c){
let x=a&1,y=b&1,z=c&1
if(z===0)res+=x+y
else if(x===0&&y===0)res++
a>>=1;b>>=1;c>>=1
}
return res
}
