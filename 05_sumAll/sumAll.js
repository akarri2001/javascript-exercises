const sumAll = function() {

    for (const arg of arguments){
        if (typeof(arg) != 'number' || arg < 0){
            return 'ERROR';
        }
    }

    let smallerNumber = Math.min.apply(Math, arguments);
    let largerNumber = Math.max.apply(Math, arguments);
    let sumVal = 0;
    for(let i =smallerNumber; i<largerNumber+1; i++){
        sumVal += i;
    }
    return sumVal;
};

// console.log(sumAll(1, 4));
// console.log(sumAll(1, 4000));
// console.log(sumAll(123, 1));
// console.log(sumAll(-10, 4));



// Do not edit below this line
module.exports = sumAll;
