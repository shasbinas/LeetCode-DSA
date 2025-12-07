var longestPalindrome=function(s){
    if(s.length<2)return s;
    let res="",len=0;
    const exp=(l,r)=>{
        while(l>=0&&r<s.length&&s[l]==s[r]){l--;r++}
        return s.substring(l+1,r);
    };
    for(let i=0;i<s.length;i++){
        let p1=exp(i,i),p2=exp(i,i+1);
        let p=p1.length>p2.length?p1:p2;
        if(p.length>len){len=p.length;res=p}
    }
    return res;
};
