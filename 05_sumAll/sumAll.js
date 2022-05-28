const sumAll = function(start, end) {
    //Checking for errors;
    if (typeof start !== "number" || typeof end !== "number"
        || start < 0 || end < 0) {
        return 'ERROR'
    }
    //creating new variables if start is larger than end
    let actualStart;
    let actualEnd;

    if (start > end) {
        let temp = start;
        actualStart = end;
        actualEnd = temp;
    } else {
        actualStart = start;
        actualEnd = end;
    }
    
    let sum = 0;

    while(actualStart <= actualEnd) {
        sum += actualStart;
        actualStart++;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
