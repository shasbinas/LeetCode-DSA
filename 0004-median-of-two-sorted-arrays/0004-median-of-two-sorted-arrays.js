var findMedianSortedArrays=function(a,b){
    if(a.length>b.length)[a,b]=[b,a];
    let m=a.length,n=b.length;
    let l=0,r=m;
    while(l<=r){
        let i=(l+r>>1),j=(m+n+1>>1)-i;
        let L1=i==0?-Infinity:a[i-1];
        let R1=i==m?Infinity:a[i];
        let L2=j==0?-Infinity:b[j-1];
        let R2=j==n?Infinity:b[j];
        if(L1<=R2&&L2<=R1){
            if((m+n)%2==0)return(Math.max(L1,L2)+Math.min(R1,R2))/2;
            return Math.max(L1,L2);
        }else if(L1>R2)r=i-1;
        else l=i+1;
    }
};
