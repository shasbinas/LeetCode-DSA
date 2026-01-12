var restoreIpAddresses=function(s){
 let res=[]
 function dfs(i,part,path){
  if(part===4&&i===s.length){res.push(path.join('.'));return}
  if(part===4||i===s.length)return
  for(let len=1;len<=3;len++){
   if(i+len>s.length)break
   let seg=s.slice(i,i+len)
   if(seg.length>1&&seg[0]==='0')break
   let num=+seg
   if(num<=255){
    path.push(seg)
    dfs(i+len,part+1,path)
    path.pop()
   }
  }
 }
 dfs(0,0,[])
 return res
}
