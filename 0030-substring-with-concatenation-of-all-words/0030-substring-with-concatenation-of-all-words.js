var findSubstring = function(s, words) {
    const wlen = words[0].length, total = wlen * words.length, res = [];
    const need = {};
    for (let w of words) need[w] = (need[w]||0)+1;
    for (let i = 0; i < wlen; i++) {
        let left = i, count = 0, seen = {};
        for (let j = i; j + wlen <= s.length; j += wlen) {
            const w = s.substring(j, j + wlen);
            if (need[w]) {
                seen[w] = (seen[w]||0)+1;
                count++;
                while (seen[w] > need[w]) {
                    const lw = s.substring(left, left + wlen);
                    seen[lw]--; left += wlen; count--;
                }
                if (count === words.length) {
                    res.push(left);
                    const lw = s.substring(left, left + wlen);
                    seen[lw]--; left += wlen; count--;
                }
            } else {
                seen = {}; count = 0; left = j + wlen;
            }
        }
    }
    return res;
};
