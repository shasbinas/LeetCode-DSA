var combinationSum=function(c,t){
let r=[],f=(i,s,a)=>{
if(s===t){r.push(a.slice());return}
if(s>t)return
for(let j=i;j<c.length;j++){
a.push(c[j])
f(j,s+c[j],a)
a.pop()
}
}
f(0,0,[])
return r
}
