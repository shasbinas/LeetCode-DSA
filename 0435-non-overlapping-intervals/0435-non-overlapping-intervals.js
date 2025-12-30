var eraseOverlapIntervals=function(intv){
intv.sort((a,b)=>a[1]-b[1])
let cnt=0,end=-1e9
for(let [s,e] of intv){
if(s>=end)end=e
else cnt++
}
return cnt
}
