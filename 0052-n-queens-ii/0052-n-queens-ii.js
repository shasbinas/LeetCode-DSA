var totalNQueens=function(n){
	let c=new Set(),d1=new Set(),d2=new Set(),r=0
	var b=function(i){
		if(i===n){
			r++
			return
		}
		for(let j=0;j<n;j++){
			if(c.has(j)||d1.has(i-j)||d2.has(i+j))continue
			c.add(j)
			d1.add(i-j)
			d2.add(i+j)
			b(i+1)
			c.delete(j)
			d1.delete(i-j)
			d2.delete(i+j)
		}
	}
	b(0)
	return r
}
