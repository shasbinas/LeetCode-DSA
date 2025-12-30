var guessNumber=function(n){
let l=1,r=n
while(l<=r){
let m=l+((r-l)>>1)
let g=guess(m)
if(g===0)return m
if(g<0)r=m-1
else l=m+1
}
}
