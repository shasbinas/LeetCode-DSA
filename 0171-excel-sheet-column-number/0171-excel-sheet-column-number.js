let titleToNumber = function(columnTitle) {
    let result = 0;
    for (let i = 0; i < columnTitle.length; i++) {
        let ch = columnTitle[i];
        result = result * 26 + (ch.charCodeAt(0) - 'A'.charCodeAt(0) + 1);
    }
    return result;
};
