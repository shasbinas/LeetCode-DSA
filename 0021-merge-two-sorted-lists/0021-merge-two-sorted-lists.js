function mergeTwoLists(l1, l2) {
  let d={next:null},c=d
  while(l1&&l2){
    if(l1.val<=l2.val){c.next=l1;l1=l1.next}
    else{c.next=l2;l2=l2.next}
    c=c.next
  }
  c.next=l1||l2
  return d.next
}
