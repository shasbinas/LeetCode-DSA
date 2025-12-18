let reverseKGroup=function(head,k){
let d={next:head},p=d;
while(true){
let n=p;
for(let i=0;i<k&&n;i++)n=n.next;
if(!n)break;
let c=p.next,prev=n.next;
for(let i=0;i<k;i++){
let t=c.next;
c.next=prev;
prev=c;
c=t;
}
let t=p.next;
p.next=prev;
p=t;
}
return d.next;
}
