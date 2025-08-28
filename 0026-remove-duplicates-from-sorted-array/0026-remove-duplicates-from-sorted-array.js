/**
 * @param {number[]} nums 
 * @return {number} 
 */
function removeDuplicates(nums) {
    if (nums.length === 0) return 0;
    let k = 1; 
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            nums[k] = nums[i]; 
            k++; 
        }
    }
    return k;
}
// Example 1
let nums1 = [1, 1, 2];
let k1 = removeDuplicates(nums1);
console.log(k1, nums1.slice(0, k1)); 
// Example 2
let nums2 = [0,0,1,1,1,2,2,3,3,4];
let k2 = removeDuplicates(nums2);
console.log(k2, nums2.slice(0, k2)); 
