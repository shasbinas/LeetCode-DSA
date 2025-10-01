var countRangeSum = function(nums, lower, upper) {
    let prefix = [0];
    for (let num of nums) {
        prefix.push(prefix[prefix.length - 1] + num);
    }

    function mergeSort(start, end) {
        if (end - start <= 1) return 0;
        let mid = Math.floor((start + end) / 2);
        let count = mergeSort(start, mid) + mergeSort(mid, end);
        let j = mid, k = mid, t = mid;
        let cache = [];
        for (let i = start, r = 0; i < mid; i++, r++) {
            while (k < end && prefix[k] - prefix[i] < lower) k++;
            while (j < end && prefix[j] - prefix[i] <= upper) j++;
            while (t < end && prefix[t] < prefix[i]) cache.push(prefix[t++]);
            cache.push(prefix[i]);
            count += j - k;
        }
        while (t < end) cache.push(prefix[t++]);
        for (let i = 0; i < cache.length; i++) {
            prefix[start + i] = cache[i];
        }
        return count;
    }
    return mergeSort(0, prefix.length);
};
