var maxProfit=function(p,f){
let b=-p[0],s=0
for(let x of p){
b=Math.max(b,s-x)
s=Math.max(s,b+x-f)
}
return s
}
