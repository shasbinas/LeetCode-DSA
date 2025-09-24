var calPoints = function(ops) {
    let record = [];
    for (let op of ops) {
        if (op === "+") {
            let last = record[record.length - 1];
            let secondLast = record[record.length - 2];
            record.push(last + secondLast);
        } else if (op === "D") {
            record.push(2 * record[record.length - 1]);
        } else if (op === "C") {
            record.pop();
        } else {
            record.push(parseInt(op));
        }
    }
    return record.reduce((a, b) => a + b, 0);
};
