var solveSudoku=function(board){
const v=(r,c,ch)=>{
for(let i=0;i<9;i++)if(board[r][i]==ch||board[i][c]==ch)return false
let sr=Math.floor(r/3)*3,sc=Math.floor(c/3)*3
for(let i=sr;i<sr+3;i++)for(let j=sc;j<sc+3;j++)if(board[i][j]==ch)return false
return true}
const bt=()=>{
for(let i=0;i<9;i++)for(let j=0;j<9;j++)if(board[i][j]=='.'){
for(let ch=1;ch<=9;ch++){
let s=ch.toString()
if(v(i,j,s)){board[i][j]=s;if(bt())return true;board[i][j]='.'}}
return false}
return true}
bt()}
