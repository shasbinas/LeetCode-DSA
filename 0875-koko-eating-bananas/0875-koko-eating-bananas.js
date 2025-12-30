var minEatingSpeed=function(p,h){
let l=1,r=Math.max(...p)
while(l<r){
let m=(l+r)>>1,t=0
for(let x of p)t+=Math.ceil(x/m)
if(t>h)l=m+1
else r=m
}
return l
}
