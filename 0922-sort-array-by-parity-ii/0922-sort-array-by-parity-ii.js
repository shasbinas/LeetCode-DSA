var sortArrayByParityII = function(nums) {
    let n = nums.length;
    let evenIndex = 0, oddIndex = 1;
    while (evenIndex < n && oddIndex < n) {
        if (nums[evenIndex] % 2 === 0) {
            evenIndex += 2;
        } else if (nums[oddIndex] % 2 === 1) {
            oddIndex += 2; 
        } else {
            [nums[evenIndex], nums[oddIndex]] = [nums[oddIndex], nums[evenIndex]];
            evenIndex += 2;
            oddIndex += 2;
        }
    }
    return nums;
};