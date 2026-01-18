var deleteDuplicates=function(head){
let d={val:0,next:head},p=d
while(head){
if(head.next&&head.val===head.next.val){
let v=head.val
while(head&&head.val===v)head=head.next
p.next=head
}else{
p=head
head=head.next
}
}
return d.next
}
