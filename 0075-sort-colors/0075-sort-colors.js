var sortColors = function(nums) {
    let l=0, r=nums.length-1, i=0;
    while(i<=r){
        if(nums[i]===0){
            [nums[i],nums[l]]=[nums[l],nums[i]];
            l++; i++;
        } else if(nums[i]===2){
            [nums[i],nums[r]]=[nums[r],nums[i]];
            r--;
        } else {
            i++;
        }
    }
};
