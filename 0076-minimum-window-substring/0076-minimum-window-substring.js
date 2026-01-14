var minWindow=function(s,t){
let need={},have=0,req=0,l=0,res=[0,Infinity];
for(let c of t){need[c]=(need[c]||0)+1}
req=Object.keys(need).length;
let win={};
for(let r=0;r<s.length;r++){
let c=s[r];
win[c]=(win[c]||0)+1;
if(need[c]&&win[c]==need[c])have++;
while(have==req){
if(r-l+1<res[1]-res[0])res=[l,r+1];
let d=s[l++];
win[d]--;
if(need[d]&&win[d]<need[d])have--;
}
}
return res[1]==Infinity?"":s.slice(res[0],res[1]);
}
