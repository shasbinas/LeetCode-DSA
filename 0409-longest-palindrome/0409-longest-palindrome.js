function longestPalindrome(s) {
    const charCount = {};
    
    // Count the occurrences of each character
    for (let char of s) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    let length = 0;
    let hasOdd = false;

    for (let count of Object.values(charCount)) {
        if (count % 2 === 0) {
            length += count; // add all even counts
        } else {
            length += count - 1; // add the largest even part of odd counts
            hasOdd = true; // remember that we have at least one odd count
        }
    }

    // We can place exactly one odd character in the middle
    if (hasOdd) length += 1;

    return length;
}