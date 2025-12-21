var isValidSudoku=function(b){
let r=Array.from({length:9},()=>new Set())
let c=Array.from({length:9},()=>new Set())
let s=Array.from({length:9},()=>new Set())
for(let i=0;i<9;i++){
for(let j=0;j<9;j++){
let v=b[i][j]
if(v===".")continue
let k=3*Math.floor(i/3)+Math.floor(j/3)
if(r[i].has(v)||c[j].has(v)||s[k].has(v))return false
r[i].add(v)
c[j].add(v)
s[k].add(v)
}}
return true
}
