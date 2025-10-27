function toHex(num) {
    if (num === 0) return "0";
    const hexMap = "0123456789abcdef";
    let result = "";
    num = num >>> 0;
    while (num > 0) {
        let digit = num % 16;
        result = hexMap[digit] + result;
        num = Math.floor(num / 16);
    }
    return result;
}
