function nextGreaterElement(nums1, nums2) {
    const nextGreater = new Map(); 
    const stack = [];
 for (let num of nums2) { 
        while (stack.length && stack[stack.length - 1] < num) {
            const smaller = stack.pop();
            nextGreater.set(smaller, num);
        }
        stack.push(num);
    }
    while (stack.length) {
        nextGreater.set(stack.pop(), -1);
    }
 return nums1.map(num => nextGreater.get(num)); 
}