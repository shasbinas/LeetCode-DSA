var maxProduct=function(nums){
    let maxProd=nums[0],minProd=nums[0],res=nums[0];
    for(let i=1;i<nums.length;i++){
        let cur=nums[i];
        if(cur<0)[maxProd,minProd]=[minProd,maxProd];
        maxProd=Math.max(cur,maxProd*cur);
        minProd=Math.min(cur,minProd*cur);
        res=Math.max(res,maxProd);
    }
    return res;
};
