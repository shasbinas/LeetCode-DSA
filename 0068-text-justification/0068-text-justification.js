var fullJustify=function(words,maxWidth){
let res=[],i=0
while(i<words.length){
let j=i,len=0
while(j<words.length&&len+words[j].length+(j-i)<=maxWidth){
len+=words[j].length
j++
}
let gaps=j-i-1,line=""
if(j===words.length||gaps===0){
for(let k=i;k<j;k++){
line+=words[k]
if(k<j-1)line+=" "
}
line+=" ".repeat(maxWidth-line.length)
}else{
let spaces=maxWidth-len
let even=Math.floor(spaces/gaps)
let extra=spaces%gaps
for(let k=i;k<j-1;k++){
line+=words[k]
line+=" ".repeat(even+(k-i<extra?1:0))
}
line+=words[j-1]
}
res.push(line)
i=j
}
return res
}
