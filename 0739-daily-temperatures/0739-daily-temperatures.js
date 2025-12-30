var dailyTemperatures=function(t){
let n=t.length,res=Array(n).fill(0),stack=[]
for(let i=0;i<n;i++){
while(stack.length&&t[i]>t[stack[stack.length-1]]){
let idx=stack.pop()
res[idx]=i-idx
}
stack.push(i)
}
return res
}
