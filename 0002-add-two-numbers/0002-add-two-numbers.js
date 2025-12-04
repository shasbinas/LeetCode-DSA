var addTwoNumbers=function(l1,l2){
  let d=new ListNode(),p=d,c=0
  while(l1||l2||c){
    let s=(l1?l1.val:0)+(l2?l2.val:0)+c
    c=Math.floor(s/10)
    p.next=new ListNode(s%10)
    p=p.next
    if(l1)l1=l1.next
    if(l2)l2=l2.next
  }
  return d.next
}
