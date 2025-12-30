var tribonacci=function(n){
let a=[0,1,1]
if(n<3)return a[n]
for(let i=3;i<=n;i++)a[i]=a[i-1]+a[i-2]+a[i-3]
return a[n]
}
