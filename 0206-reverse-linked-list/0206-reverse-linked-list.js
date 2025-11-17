var reverseList=function(head){
  let prev=null,cur=head;
  while(cur){
    let nxt=cur.next;
    cur.next=prev;
    prev=cur;
    cur=nxt;
  }
  return prev;
};
