var inorderTraversal=function(root)
{
    let r=[];function f(n){if(!n)return;f(n.left);r.push(n.val);
f(n.right);
}
f(root);return r;}