var divide=function(dividend,divisor){
    const INT_MAX=2147483647,INT_MIN=-2147483648;
    if(dividend===INT_MIN&&divisor===-1)return INT_MAX;
    const neg=(dividend<0)^(divisor<0);
    let a=Math.abs(dividend),b=Math.abs(divisor),res=0;
    while(a>=b){
        let t=b,m=1;
        while((t<<1)>0&&(t<<1)<=a){
            t<<=1;
            m<<=1;
        }
        a-=t;
        res+=m;
    }
    return neg?-res:res;
};
