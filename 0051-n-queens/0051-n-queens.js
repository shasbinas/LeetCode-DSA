function solveNQueens(n){
    const res=[]
    function backtrack(row,cols,diags,antiDiags,board){
        if(row===n){
            res.push(board.map(r=>r.join('')))
            return
        }
        for(let col=0;col<n;col++){
            const diag=row-col
            const antiDiag=row+col
            if(cols.has(col)||diags.has(diag)||antiDiags.has(antiDiag)) continue
            board[row][col]='Q'
            cols.add(col)
            diags.add(diag)
            antiDiags.add(antiDiag)
            backtrack(row+1,cols,diags,antiDiags,board)
            board[row][col]='.'
            cols.delete(col)
            diags.delete(diag)
            antiDiags.delete(antiDiag)
        }
    }
    const board=Array.from({length:n},()=>Array(n).fill('.'))
    backtrack(0,new Set(),new Set(),new Set(),board)
    return res
}