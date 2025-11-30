var letterCombinations = function(digits) {
    if(!digits.length) return [];
    const map = {
        2:"abc",3:"def",4:"ghi",5:"jkl",
        6:"mno",7:"pqrs",8:"tuv",9:"wxyz"
    };
    const res = [];
    const dfs = (i, path) => {
        if(i === digits.length){
            res.push(path);
            return;
        }
        for(let c of map[digits[i]]) dfs(i+1, path+c);
    };
    dfs(0, "");
    return res;
};
