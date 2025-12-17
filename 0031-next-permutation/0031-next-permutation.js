let nextPermutation=function(nums){
let i=nums.length-2
while(i>=0&&nums[i]>=nums[i+1])i--
if(i>=0){
let j=nums.length-1
while(nums[j]<=nums[i])j--
let t=nums[i];nums[i]=nums[j];nums[j]=t
}
let l=i+1,r=nums.length-1
while(l<r){
let t=nums[l];nums[l]=nums[r];nums[r]=t
l++;r--
}
}
