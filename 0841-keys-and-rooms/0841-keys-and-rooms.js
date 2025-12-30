var canVisitAllRooms=function(rooms){
let n=rooms.length
let v=new Array(n).fill(false)
let s=[0]
v[0]=true
while(s.length){
let r=s.pop()
for(let k of rooms[r]){
if(!v[k]){
v[k]=true
s.push(k)
}
}
}
for(let i=0;i<n;i++)if(!v[i])return false
return true
}
