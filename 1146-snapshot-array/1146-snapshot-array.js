var SnapshotArray=function(n){
    this.a=Array(n).fill(0).map(()=>[[0,0]]);
    this.id=0;
};
SnapshotArray.prototype.set=function(i,v){
    let x=this.a[i];
    if(x[x.length-1][0]==this.id)x[x.length-1][1]=v;
    else x.push([this.id,v]);
};
SnapshotArray.prototype.snap=function(){
    return this.id++;
};
SnapshotArray.prototype.get=function(i,s){
    let x=this.a[i],l=0,r=x.length-1,res=0;
    while(l<=r){
        let m=(l+r>>1);
        if(x[m][0]<=s){res=x[m][1];l=m+1}
        else r=m-1;
    }
    return res;
};
