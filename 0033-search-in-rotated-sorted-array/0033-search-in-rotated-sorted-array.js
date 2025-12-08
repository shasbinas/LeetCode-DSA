var search=function(a,t){
    let l=0,r=a.length-1;
    while(l<=r){
        let m=(l+r>>1);
        if(a[m]==t)return m;
        if(a[l]<=a[m]){
            if(a[l]<=t&&t<a[m])r=m-1;
            else l=m+1;
        }else{
            if(a[m]<t&&t<=a[r])l=m+1;
            else r=m-1;
        }
    }
    return -1;
};
