var grayCode=function(n){
let r=[];
for(let i=0;i<1<<n;i++){
r.push(i^(i>>1));
}
return r;
}
