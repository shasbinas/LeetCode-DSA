let distributeCandies = function(candyType) { 
    const uniqueTypes = new Set(candyType).size; 
    const maxAllowed = candyType.length / 2;   
    return Math.min(uniqueTypes, maxAllowed);
};