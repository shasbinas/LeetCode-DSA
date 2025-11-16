let hammingDistance=function(x,y){
  let xor=x^y,count=0;
  while(xor>0){
    xor&=xor-1;
    count++;
  }
  return count;
};
