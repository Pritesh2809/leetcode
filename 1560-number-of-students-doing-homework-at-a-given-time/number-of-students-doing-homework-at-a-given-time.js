var busyStudent = function(startTime, endTime, queryTime) {
    return startTime.reduce((count, start, i) => count + (start <= queryTime && queryTime <= endTime[i] ? 1 : 0), 0);
};
