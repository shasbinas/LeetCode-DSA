function lengthOfLastWord(s) {
    const words = s.trim().split(" ");
    const lastWord = words[words.length - 1];
    return lastWord.length;
}