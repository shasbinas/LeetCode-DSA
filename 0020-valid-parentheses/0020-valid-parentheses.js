function isValid(s) {
  const stack = [];
  const map = {
    ')': '(',
    '}': '{',
    ']': '['
  };

  for (let ch of s) {
    if (ch === '(' || ch === '{' || ch === '[') {
      stack.push(ch);
    } else {
      if (stack.length === 0 || stack.pop() !== map[ch]) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

function isValid(s) {
  const stack = [];
  const map = {
    ')': '(',
    '}': '{',
    ']': '['
  };
  for (let ch of s) {
    if (ch === '(' || ch === '{' || ch === '[') {
      stack.push(ch);
    } else {
      if (stack.length === 0 || stack.pop() !== map[ch]) {
        return false;
      }
    }
  }
  return stack.length === 0;
};
