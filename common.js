function getSeries(start, interval, count) {
    var end = start + count*interval;
    
    var result = [];

    for (var i = start; i < end; i+=interval) {
        result.push(i);
    }

    return result;
}