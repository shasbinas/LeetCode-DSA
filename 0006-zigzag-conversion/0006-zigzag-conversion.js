var convert=function(s,numRows){
    if(numRows==1||s.length<=numRows)return s;
    let rows=Array(numRows).fill("");
    let i=0,step=1;
    for(let c of s){
        rows[i]+=c;
        if(i==0)step=1;
        else if(i==numRows-1)step=-1;
        i+=step;
    }
    return rows.join("");
};
