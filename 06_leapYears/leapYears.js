const leapYears = function(inputYear) {

    if (inputYear%4 ===0 && (inputYear%100 !=0 || inputYear%400 ==0)){
        return true;
    }
    return false;
};

// console.log(leapYears(1984))
// console.log(leapYears(1900))
// console.log(leapYears(2000))
// console.log(leapYears(2004))


// Do not edit below this line
module.exports = leapYears;
