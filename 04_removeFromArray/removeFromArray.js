const removeFromArray = function() {
    //seperate out the first object in the inputs as the trueList
    let inputList = arguments[0];

    //make all the other elements in another list (removeList)
    let removeList = [];
    for (let i =1;i<arguments.length;i++){
        removeList.push(arguments[i]);
    }

    //go through every element of the trueList and delete it if it's in the removeList
    let finalList = [];
    inputLoop: for (const inputElement of inputList){

        for (const removeElement of removeList){

            if (inputElement === removeElement){
                continue inputLoop;
            }
        }
        finalList.push(inputElement);
    }
    return finalList
};

// Do not edit below this line
module.exports = removeFromArray;
