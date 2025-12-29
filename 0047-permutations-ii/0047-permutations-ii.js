var permuteUnique=function(nums){
nums.sort((a,b)=>a-b)
let res=[]
let used=Array(nums.length).fill(false)
let dfs=arr=>{
if(arr.length===nums.length){
res.push([...arr])
return
}
for(let i=0;i<nums.length;i++){
if(used[i])continue
if(i>0&&nums[i]===nums[i-1]&&!used[i-1])continue
used[i]=true
arr.push(nums[i])
dfs(arr)
arr.pop()
used[i]=false
}}
dfs([])
return res
}
