var subsetsWithDup = function(nums) {
    const result = [];
    nums.sort((a, b) => a - b);   // Step 1: Sort
    
    function backtrack(start, path) {
        result.push([...path]);   // Add current subset
        for (let i = start; i < nums.length; i++) {
            // Skip duplicates
            if (i > start && nums[i] === nums[i - 1]) continue;
            path.push(nums[i]);
            backtrack(i + 1, path);
            path.pop(); // backtrack
        }
    }
    backtrack(0, []);
    return result;
};