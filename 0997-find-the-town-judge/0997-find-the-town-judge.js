function findJudge(n, trust) {
    if (n === 1) return 1;
    const trustedBy = new Array(n + 1).fill(0); 
    const trusts = new Array(n + 1).fill(0);   
    for (let [a, b] of trust) {
        trusts[a]++;   
        trustedBy[b]++;   
    }
    for (let i = 1; i <= n; i++) {
        if (trustedBy[i] === n - 1 && trusts[i] === 0) {
            return i;
        }
    }
    return -1; 
}