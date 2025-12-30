var Trie=function(){this.t={}}
Trie.prototype.insert=function(w){
let n=this.t
for(let c of w){if(!n[c])n[c]={};n=n[c]}
n.end=1
}
Trie.prototype.search=function(w){
let n=this.t
for(let c of w){if(!n[c])return 0;n=n[c]}
return !!n.end
}
Trie.prototype.startsWith=function(p){
let n=this.t
for(let c of p){if(!n[c])return 0;n=n[c]}
return 1
}
