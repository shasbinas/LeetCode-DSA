var findMinArrowShots=function(p){
if(!p.length)return 0
p.sort((a,b)=>a[1]-b[1])
let arrows=1,end=p[0][1]
for(let [s,e] of p){
if(s>end){arrows++;end=e}
}
return arrows
}
