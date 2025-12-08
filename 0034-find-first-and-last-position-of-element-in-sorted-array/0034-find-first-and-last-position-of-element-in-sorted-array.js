var searchRange=function(a,t){
    const f=(x)=>{
        let l=0,r=a.length;
        while(l<r){
            let m=(l+r>>1);
            if(a[m]<x)l=m+1;
            else r=m;
        }
        return l;
    };
    let s=f(t);
    if(s==a.length||a[s]!=t)return[-1,-1];
    return[s,f(t+1)-1];
};
