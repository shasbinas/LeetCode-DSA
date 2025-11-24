var removeDuplicates = function(nums) {
    let k = 0;
    for (let n of nums) {
        if (k < 2 || n > nums[k - 2]) {
            nums[k] = n;
            k++;
        }
    }
    return k;
};
