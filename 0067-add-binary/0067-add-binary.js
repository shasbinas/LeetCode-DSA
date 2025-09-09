function addBinary(a, b) {
    let result = "";
    let carry = 0;
    const maxLen = Math.max(a.length, b.length);
    a = a.padStart(maxLen, "0");
    b = b.padStart(maxLen, "0");
    for (let i = maxLen - 1; i >= 0; i--) {
        const bitA = parseInt(a[i]);
        const bitB = parseInt(b[i]);
        const sum = bitA + bitB + carry;
        result = (sum % 2) + result; 
        carry = Math.floor(sum / 2); 
    }
    if (carry) {
        result = "1" + result;
    }
    
    return result;
}

