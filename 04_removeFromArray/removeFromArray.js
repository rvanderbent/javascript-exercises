const removeFromArray = function(array, numberToRemove) {

    for (let n = 1; n < arguments.length; n++){
        for (let i = 0; i < array.length; i++) {
            if (array[i] === arguments[n]){
                array.splice(i, 1);
            }
        }
    }

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;


//console.log(removeFromArray([1,5,3,7,],5))