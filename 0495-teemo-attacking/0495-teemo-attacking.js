let findPoisonedDuration = function(timeSeries, duration) {
    if (timeSeries.length === 0) return 0;
    let total = 0;
    for (let i = 0; i < timeSeries.length - 1; i++) {   
  total += Math.min(duration, timeSeries[i + 1] - timeSeries[i]); 
    }
    total += duration;
    return total;
};