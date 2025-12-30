var minCostClimbingStairs=function(c){
let a=c[0],b=c[1]
for(let i=2;i<c.length;i++){
let t=c[i]+Math.min(a,b)
a=b
b=t
}
return Math.min(a,b)
}
