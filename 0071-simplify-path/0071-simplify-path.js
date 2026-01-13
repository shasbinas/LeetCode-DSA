var simplifyPath=function(p){
let s=[];
for(let x of p.split("/")){
if(x==""||x==".")continue;
if(x=="..")s.pop();
else s.push(x);
}
return"/"+s.join("/");
}
