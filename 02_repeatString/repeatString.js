const repeatString = function(subStringVal, timeRepeat) {
    if (timeRepeat < 0) {
        return "ERROR"
        
    }
    if (timeRepeat == 0) {
        return "";
    }
    let returnVal = subStringVal;
    for (let i = 1; i<timeRepeat; i++){
        returnVal = `${returnVal}${subStringVal}`;
    }
    return returnVal;

};

// Do not edit below this line
module.exports = repeatString;
