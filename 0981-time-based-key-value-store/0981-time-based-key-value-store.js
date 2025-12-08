var TimeMap=function(){
    this.m={};
};
TimeMap.prototype.set=function(k,v,t){
    if(!this.m[k])this.m[k]=[];
    this.m[k].push([t,v]);
};
TimeMap.prototype.get=function(k,t){
    if(!this.m[k])return "";
    let a=this.m[k],l=0,r=a.length-1,res="";
    while(l<=r){
        let m=(l+r>>1);
        if(a[m][0]<=t){res=a[m][1];l=m+1}
        else r=m-1;
    }
    return res;
};
