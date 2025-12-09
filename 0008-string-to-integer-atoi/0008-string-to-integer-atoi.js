var myAtoi=function(s){
    let i=0,n=s.length;
    while(i<n&&s[i]===' ')i++;
    let sign=1;
    if(i<n&&(s[i]==='-'||s[i]==='+')){if(s[i]==='-')sign=-1;i++;}
    let num=0;
    while(i<n&&s[i]>='0'&&s[i]<='9'){
        num=num*10+(s[i].charCodeAt(0)-48);
        if(num>2147483647)break;
        i++;
    }
    num*=sign;
    if(num<-2147483648)return -2147483648;
    if(num>2147483647)return 2147483647;
    return num;
}
