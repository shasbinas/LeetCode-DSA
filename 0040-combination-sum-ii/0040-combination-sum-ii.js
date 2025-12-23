var combinationSum2=function(c,t){
c.sort((a,b)=>a-b)
let r=[]
const d=(i,s,a)=>{
if(s===t){r.push(a.slice());return}
if(s>t)return
for(let j=i;j<c.length;j++){
if(j>i&&c[j]===c[j-1])continue
a.push(c[j])
d(j+1,s+c[j],a)
a.pop()
}
}
d(0,0,[])
return r
}
