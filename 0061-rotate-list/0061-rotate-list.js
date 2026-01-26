function rotateRight(head,k){
if(!head||!head.next||k===0)return head;
let len=1,tail=head;
while(tail.next){
tail=tail.next;
len++;
}
k%=len;
if(k===0)return head;
tail.next=head;
let steps=len-k,newTail=tail;
while(steps--){
newTail=newTail.next;
}
let newHead=newTail.next;
newTail.next=null;
return newHead;
}
