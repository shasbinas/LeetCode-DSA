var findKthLargest=function(nums,k){
let h=[]
function push(x){
h.push(x)
let i=h.length-1
while(i>0){
let p=(i-1)>>1
if(h[p]<=h[i])break
;[h[p],h[i]]=[h[i],h[p]]
i=p
}
}
function pop(){
let r=h[0]
let x=h.pop()
if(h.length){
h[0]=x
let i=0
while(true){
let l=i*2+1,r2=l+1,s=i
if(l<h.length&&h[l]<h[s])s=l
if(r2<h.length&&h[r2]<h[s])s=r2
if(s===i)break
;[h[i],h[s]]=[h[s],h[i]]
i=s
}
}
return r
}
for(let n of nums){
push(n)
if(h.length>k)pop()
}
return h[0]
}
