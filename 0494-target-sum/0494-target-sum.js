function findTargetSumWays(nums, target) {
    const memo = new Map();
    function dfs(index, sum) {
        const key = `${index},${sum}`;
        if (memo.has(key)) return memo.get(key);
        if (index === nums.length) {
            return sum === target ? 1 : 0;
        }
        const add = dfs(index + 1, sum + nums[index]);
        const subtract = dfs(index + 1, sum - nums[index]);
        memo.set(key, add + subtract);
        return add + subtract;
    }
    return dfs(0, 0);
}