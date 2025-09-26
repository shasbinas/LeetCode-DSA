function thirdMax(nums) {
const distinctNums = [...new Set(nums)];
distinctNums.sort((a, b) => b - a);
 return distinctNums.length >= 3 ? distinctNums[2] : distinctNums[0]; 
}