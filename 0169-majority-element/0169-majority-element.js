var majorityElement=function(nums){
let c=0,m
for(let i=0;i<nums.length;i++){
if(c===0)m=nums[i]
c+=nums[i]===m?1:-1
}
return m
}
