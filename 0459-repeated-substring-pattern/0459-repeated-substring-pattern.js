function repeatedSubstringPattern(s) {
    const len = s.length;
    for (let i = 1; i <= Math.floor(len / 2); i++) {
        if (len % i === 0) { 
            const substring = s.slice(0, i);
            const repeatCount = len / i;
            if (substring.repeat(repeatCount) === s) {
                return true;
            }
        }
    }
    return false;
}