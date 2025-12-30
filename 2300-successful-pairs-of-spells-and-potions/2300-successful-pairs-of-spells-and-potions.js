var successfulPairs=function(s,p,x){
p.sort((a,b)=>a-b)
let m=p.length
return s.map(v=>{
let t=Math.ceil(x/v),l=0,r=m
while(l<r){
let mid=(l+r)>>1
if(p[mid]<t)l=mid+1
else r=mid
}
return m-l
})
}
