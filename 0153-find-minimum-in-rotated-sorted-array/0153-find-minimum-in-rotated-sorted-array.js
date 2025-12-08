var findMin=function(a){
    let l=0,r=a.length-1;
    while(l<r){
        let m=(l+r>>1);
        if(a[m]>a[r])l=m+1;
        else r=m;
    }
    return a[l];
};
