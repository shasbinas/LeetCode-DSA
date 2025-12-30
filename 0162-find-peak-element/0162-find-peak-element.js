var findPeakElement=function(a){
let l=0,r=a.length-1
while(l<r){
let m=(l+r)>>1
if(a[m]>a[m+1])r=m
else l=m+1
}
return l
}
