var suggestedProducts=function(p,s){
p.sort()
let res=[],i=0
for(let c of s){
let tmp=[]
while(i<p.length&&p[i][0]<c)i++
for(let w of p)if(w.startsWith(s.slice(0,res.length+1)))tmp.push(w)
res.push(tmp.slice(0,3))
}
return res
}
