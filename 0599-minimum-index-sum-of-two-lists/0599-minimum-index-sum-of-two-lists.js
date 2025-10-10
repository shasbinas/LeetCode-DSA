function findRestaurant(list1, list2) {
    const map = new Map();
    const result = [];
    let minSum = Infinity;
    list1.forEach((str, i) => map.set(str, i));
    list2.forEach((str, j) => {
        if (map.has(str)) {
            const sum = j + map.get(str);
            if (sum < minSum) {
                minSum = sum;
                result.length = 0;
                result.push(str);
            } else if (sum === minSum) {
                result.push(str);
          }
        }
    });
    return result;
}