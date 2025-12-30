var SmallestInfiniteSet=function(){
this.cur=1
this.h=[]
this.s=new Set()
}
SmallestInfiniteSet.prototype.popSmallest=function(){
if(this.h.length){
let r=this.h[0]
this.s.delete(r)
let x=this.h.pop()
if(this.h.length){
this.h[0]=x
let i=0
while(true){
let l=i*2+1,r2=l+1,m=i
if(l<this.h.length&&this.h[l]<this.h[m])m=l
if(r2<this.h.length&&this.h[r2]<this.h[m])m=r2
if(m===i)break
;[this.h[i],this.h[m]]=[this.h[m],this.h[i]]
i=m
}
}
return r
}
return this.cur++
}
SmallestInfiniteSet.prototype.addBack=function(num){
if(num<this.cur&&!this.s.has(num)){
this.s.add(num)
this.h.push(num)
let i=this.h.length-1
while(i>0){
let p=(i-1)>>1
if(this.h[p]<=this.h[i])break
;[this.h[p],this.h[i]]=[this.h[i],this.h[p]]
i=p
}
}
}
