var countNegatives=function(g){
    let m=g.length,n=g[0].length;
    let i=0,j=n-1,c=0;
    while(i<m&&j>=0){
        if(g[i][j]<0){c+=m-i;j--}
        else i++;
    }
    return c;
};
