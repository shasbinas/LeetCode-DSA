var combinationSum3=function(k,n){
let res=[]
function f(i,s,sum){
if(s.length===k){
if(sum===n)res.push([...s])
return
}
for(let j=i;j<=9;j++){
s.push(j)
f(j+1,s,sum+j)
s.pop()
}
}
f(1,[],0)
return res
}
