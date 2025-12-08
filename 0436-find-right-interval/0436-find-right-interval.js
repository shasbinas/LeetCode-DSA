var findRightInterval=function(v){
    let n=v.length,res=Array(n).fill(-1);
    let s=v.map((x,i)=>[x[0],i]).sort((a,b)=>a[0]-b[0]);
    const bs=(x)=>{
        let l=0,r=n;
        while(l<r){
            let m=(l+r>>1);
            if(s[m][0]<x)l=m+1;
            else r=m;
        }
        return l<n?s[l][1]:-1;
    };
    for(let i=0;i<n;i++)res[i]=bs(v[i][1]);
    return res;
};
