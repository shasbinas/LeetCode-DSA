var maxLevelSum=function(root){
if(!root)return 0
let q=[root],level=1,ans=1,max=-Infinity
while(q.length){
let s=0,n=q.length
for(let i=0;i<n;i++){
let node=q.shift()
s+=node.val
if(node.left)q.push(node.left)
if(node.right)q.push(node.right)
}
if(s>max){max=s;ans=level}
level++
}
return ans
}
