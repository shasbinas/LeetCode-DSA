function calculate(s) {
  let stack = [];
  let currentNumber = 0;
  let operator = '+';
  s = s.trim() + '+'; 
  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    if (!isNaN(ch) && ch !== ' ') {
      currentNumber = currentNumber * 10 + Number(ch);
    }
    if ((isNaN(ch) && ch !== ' ') || i === s.length - 1) {
      if (operator === '+') {
        stack.push(currentNumber);
      } else if (operator === '-') {
        stack.push(-currentNumber);
      } else if (operator === '*') {
        stack.push(stack.pop() * currentNumber);
      } else if (operator === '/') {
        let top = stack.pop();
        stack.push(top / currentNumber > 0 ? Math.floor(top / currentNumber) : Math.ceil(top / currentNumber));
      }
      operator = ch;
      currentNumber = 0;
    }
  }
  return stack.reduce((a, b) => a + b, 0);
}
