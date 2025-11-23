function romanToInt(s){
    const m={I:1,V:5,X:10,L:50,C:100,D:500,M:1000};
    let t=0;
    for(let i=0;i<s.length;i++){
        let v=m[s[i]],n=m[s[i+1]];
        t+=n>v?-v:v;
    }
    return t;
}
