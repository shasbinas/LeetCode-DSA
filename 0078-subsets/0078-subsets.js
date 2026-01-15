var subsets=function(nums){
let res=[[]]
for(let n of nums){
let l=res.length
for(let i=0;i<l;i++)res.push(res[i].concat(n))
}
return res
}
