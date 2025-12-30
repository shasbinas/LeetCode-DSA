var deleteNode=function(r,k){
if(!r)return null
if(k<r.val){r.left=deleteNode(r.left,k);return r}
if(k>r.val){r.right=deleteNode(r.right,k);return r}
if(!r.left)return r.right
if(!r.right)return r.left
let s=r.right
while(s.left)s=s.left
r.val=s.val
r.right=deleteNode(r.right,s.val)
return r
}
