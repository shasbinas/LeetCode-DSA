var numTilings=function(n){
let mod=1e9+7
let a=1,b=1,c=2
if(n===1)return 1
if(n===2)return 2
for(let i=3;i<=n;i++){
let t=(2*c+a)%mod
a=b
b=c
c=t
}
return c
}
