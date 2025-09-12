let addStrings = function(num1, num2) {
    let i = num1.length - 1;
    let j = num2.length - 1;
    let carry = 0;
    let result = [];
    while (i >= 0 || j >= 0 || carry > 0) {
        let digit1 = i >= 0 ? num1.charCodeAt(i) - '0'.charCodeAt(0) : 0;
        let digit2 = j >= 0 ? num2.charCodeAt(j) - '0'.charCodeAt(0) : 0;

        let sum = digit1 + digit2 + carry;
        result.push(sum % 10);
        carry = Math.floor(sum / 10);

        i--;
        j--;
    }
    return result.reverse().join('');
};
