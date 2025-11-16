let combine=function(n,k){
  let res=[],path=[];
  function backtrack(start){
    if(path.length===k){res.push([...path]);return;}
    for(let i=start;i<=n;i++){
      path.push(i);
      backtrack(i+1);
      path.pop();
    }
  }
  backtrack(1);
  return res;
};
