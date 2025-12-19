var mergeKLists=function(lists){
if(!lists||lists.length==0)return null
let h={next:null},c=h
while(true){
let m=-1
for(let i=0;i<lists.length;i++){
if(lists[i]&&(m==-1||lists[i].val<lists[m].val))m=i
}
if(m==-1)break
c.next=lists[m]
c=c.next
lists[m]=lists[m].next
}
return h.next
}
