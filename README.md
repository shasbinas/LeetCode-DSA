# 🧩 LeetCode Solutions

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Algorithms](https://img.shields.io/badge/Algorithms-Yes-brightgreen)
![LeetHub](https://img.shields.io/badge/LeetHub-3.0-blue)

A collection of **LeetCode problem solutions** written in **JavaScript**, showcasing clean and optimized code for practicing algorithms and data structures.  
All solutions are stored in a **single folder** for easy access.  

---

## 🚀 Features

- 📝 **All-in-One Folder** – All solutions in a single place  
- 🔗 **Problem Links** – Each file contains a reference to the original LeetCode problem  
- ⚡ **Optimized Code** – Focused on readability and efficiency  
- 📂 **Automatic Sync** – Solutions can be synced via LeetHub 3.0  

---

## 🛠️ Technologies Used

- **JavaScript**  
- **Git & GitHub**  
- **LeetHub 3.0 Chrome Extension**  

---

- All solution files are in the root folder.  
- Each file is named after the LeetCode problem for easy identification.  

---

## 🔗 Links

- GitHub Repository: [LeetCode Solutions](https://github.com/yourusername/leetcode-solutions)  
- LeetCode Profile: [Your LeetCode](https://leetcode.com/yourusername/)  

---

## 📌 How to Use

1. Browse the repository files.  
2. Open a solution file to view the code and problem reference link.  
3. Use it for **learning, reference, and practice**.  

---

**Example Code Preview**  

```javascript
// Example: Two Sum
const twoSum = (nums, target) => {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(target - nums[i])) return [map.get(target - nums[i]), i];
    map.set(nums[i], i);
  }
};


<!---LeetCode Topics Start-->
# LeetCode Topics
## Linked List
| Problem Name | Difficulty |
| ------- | ------- |
| [0092-reverse-linked-list-ii](https://github.com/shasbinas/LeetCode-DSA/tree/main/0092-reverse-linked-list-ii/) | Medium |
## Tree
| Problem Name | Difficulty |
| ------- | ------- |
| [0094-binary-tree-inorder-traversal](https://github.com/shasbinas/LeetCode-DSA/tree/main/0094-binary-tree-inorder-traversal/) | Easy |
| [0100-same-tree](https://github.com/shasbinas/LeetCode-DSA/tree/main/0100-same-tree/) | Easy |
## Depth-First Search
| Problem Name | Difficulty |
| ------- | ------- |
| [0094-binary-tree-inorder-traversal](https://github.com/shasbinas/LeetCode-DSA/tree/main/0094-binary-tree-inorder-traversal/) | Easy |
| [0100-same-tree](https://github.com/shasbinas/LeetCode-DSA/tree/main/0100-same-tree/) | Easy |
## Breadth-First Search
| Problem Name | Difficulty |
| ------- | ------- |
| [0100-same-tree](https://github.com/shasbinas/LeetCode-DSA/tree/main/0100-same-tree/) | Easy |
## Binary Tree
| Problem Name | Difficulty |
| ------- | ------- |
| [0094-binary-tree-inorder-traversal](https://github.com/shasbinas/LeetCode-DSA/tree/main/0094-binary-tree-inorder-traversal/) | Easy |
| [0100-same-tree](https://github.com/shasbinas/LeetCode-DSA/tree/main/0100-same-tree/) | Easy |
## Stack
| Problem Name | Difficulty |
| ------- | ------- |
| [0094-binary-tree-inorder-traversal](https://github.com/shasbinas/LeetCode-DSA/tree/main/0094-binary-tree-inorder-traversal/) | Easy |
<!---LeetCode Topics End-->