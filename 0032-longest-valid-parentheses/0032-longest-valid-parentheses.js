longestValidParentheses=s=>{m=0;st=[-1];for(i=0;i<s.length;i++){
    if(s[i]=='(')st.push(i)
    else{st.pop();
    if(st.length)m=Math.max(m,i-st[st.length-1]);
    else st.push(i)}}
    return m}
